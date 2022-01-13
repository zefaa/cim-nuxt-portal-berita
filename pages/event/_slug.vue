<template>
  <v-container class="page page-event-detail">
    <h1 class="page-title">
      {{ event.fields.title }}
    </h1>
    <div class="date text-right">
      {{ $moment(event.fields.date).format('D MMMM YYYY') }}
    </div>
    <div class="content">
      <v-img
        :src="event.fields.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'"
        :alt="event.fields.thumbnail.fields.file.fileName"
        class="event-image"
        cover
      />
      <span v-html="$md.render(event.fields.body)" />
    </div>
    <v-row
      dense
      align="center"
      justify="center"
    >
      <v-col
        class="purchase-button text-right"
      >
        <v-btn
          :href="event.fields.registerUrl"
          color="primary"
          large
          ripple
          target="_blank"
          rel="noreferrer"
        >
          Daftar
          <v-icon>mdi-hand-pointing-up</v-icon>
        </v-btn>
      </v-col>
      <v-col
        class="share-buttons text-left"
      >
        <v-btn
          :href="waHref"
          target="_blank"
          rel="noreferrer"
          ripple
          color="#25D366"
          class="share-whatsapp"
          large
        >
          Bagikan
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
  .content {
    max-width: 100%;
    img {
      max-width: 100%;
    }
  }
  .button-image, .button-download {
    width: 100%;
    // max-width: 120px;
  }
  .event-image {
    margin: 1rem auto;
    // margin-right: 1rem;
    // float: left;
  }
  .purchase-button a.v-btn {
    color: #000;
    font-weight: 700;
    > span {
      margin-right: 0.5rem;
    }
  }
  .share-buttons {
    margin: 2rem auto;
  }
  .share-whatsapp, .share-whatsapp i {
    color: #fff;
    font-weight: 700;
  }
  .share-whatsapp, .purchase-button {
    i {
      margin-left: 0.5rem;
    }
  }
</style>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
let thisevent
let waHref

export default {
  async asyncData ({ env, params }) {
    try {
      const pathUrl = 'https://imerz.imavi.org/event/' + params.slug
      const thisPost = await client.getEntries({
        content_type: 'event',
        'fields.slug': params.slug
      })

      if (thisPost) {
        thisevent = thisPost.items[0]
        waHref = 'https://wa.me/?text=%2A' + encodeURIComponent(thisevent.fields.title) + '%2A%0A_' + encodeURIComponent(thisevent.fields.excerpt) + '_%0A%0A' + 'Baca%20lebih%20lanjut%20di%20website%20youcat%2Eid' + '%0A' + encodeURIComponent(pathUrl)
      }
      return {
        waHref,
        event: thisPost.items[0]
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  head (params) {
    if (thisevent) {
      const thisUrl = 'https://imerz.imavi.org/event/' + params.slug
      return {
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'title', name: 'title', content: thisevent.fields.title },
          { hid: 'description', name: 'description', content: thisevent.fields.excerpt },
          { hid: 'og:title', name: 'og:title', content: thisevent.fields.title },
          { hid: 'og:description', name: 'og:description', content: thisevent.fields.excerpt },
          { hid: 'og:image', name: 'og:image', content: thisevent.fields.thumbnail.fields.file.url },
          { hid: 'og:url', name: 'og:url', content: thisUrl }
        ]
      }
    }
  }
}
</script>
