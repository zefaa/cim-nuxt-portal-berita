<template>
  <div class="page page-dokumen">
    <h1 class="page-title">
      Daftar Streaming Pekan Suci 2020
    </h1>
    <section class="section-streamList">
      <ul class="list-group">
        <li
          v-for="(post, index) in streamList"
          v-show="!($moment() > $moment(post.tanggal, 'DD/MM/YYYY HH:mm:ss'))"
          :key="index"
          :class="'list-group-item expired-' + ($moment() > $moment(post.tanggal, 'DD/MM/YYYY HH:mm:ss'))"
        >
          <v-row
            :class="'streaming-list-item'"
            dense
          >
            <v-col
              cols="12"
              sm="5"
              md="4"
              class="keuskupan"
            >
              {{ post.keuskupan }}
            </v-col>
            <v-col
              cols="12"
              sm="7"
              md="8"
              class="paroki text-right"
            >
              {{ post.paroki }}
            </v-col>
            <v-col
              cols="6"
              class="note"
            >
              {{ post.keterangan }}
            </v-col>
            <v-col
              cols="6"
              class="date text-right"
            >
              {{ $moment(post.tanggal, "DD/MM/YYYY HH:mm:ss").format("dddd, D MMMM YYYY HH:mm") }}
            </v-col>
            <v-col
              cols="12"
              class="text-right"
            >
              <v-btn
                class="button button-primary"
                rel="noreferrer"
                :href="post.link"
                target="_blank"
                title="Kunjungi"
                color="primary"
              >
                Kunjungi
              </v-btn>
            </v-col>
          </v-row>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// import { createClient } from '~/plugins/contentful.js'

const client = createClient()
let streams
let waHref

export default {
  async asyncData ({ env, params }) {
    try {
      const pathUrl = 'https://imerz.imavi.org/streaming'
      const getStreams = await client.getEntry('5uHUST7gQlTHOwCdfwgY99')
      if (getStreams) {
        streams = getStreams.fields.jsonData
        waHref = 'https://wa.me/?text=%2A' + encodeURIComponent('Daftar Streaming Pekan Suci 2020') + '%2A%0A_' + encodeURIComponent('Kumpulan Podcast Peziarah') + '_%0A%0A' + 'Baca%20lebih%20lanjut%20di%20website%20youcat%2Eid' + '%0A' + encodeURIComponent(pathUrl)
      }
      return {
        waHref,
        streamList: streams
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  computed: {
  },
  head (params) {
    if (streams) {
      // eslint-disable-next-line
      const thisUrl = 'https://imerz.imavi.org/streaming'
      return {
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'title', name: 'title', content: 'Daftar Streaming Pekan Suci 2020' },
          { hid: 'description', name: 'description', content: 'Daftar Streaming Pekan Suci 2020' },
          { hid: 'og:title', name: 'og:title', content: 'Daftar Streaming Pekan Suci 2020' },
          { hid: 'og:description', name: 'og:description', content: 'Daftar Streaming Pekan Suci 2020' },
          { hid: 'og:url', name: 'og:url', content: thisUrl }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    border-bottom: solid 1px #999;
    &.expired-true {
      opacity: 0.4;
    }
  }
  .docTitle {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 1.1rem;
    font-weight: 700;
  }
  .episode {
    font-style: italic;
    font-weight: 700;
    font-size: 1.6rem;
    margin-right: 1rem;
  }
  .docItem {
    padding: 0.5rem 0;
    border-bottom: solid 1px #999;
  }
  .excerpt {
    font-style: italic;
    color: #999;
    margin-bottom: 0.5rem;
  }
  .note {
    font-weight: 700;
  }
</style>
