<template>
  <v-layout
    column
    justify-center
    align-center
    class="page page-home page-fullscreen"
  >
    <v-container>
      <h2 class="section-title">
        Artikel-artikel Pilihan
      </h2>
      <v-icon>mdi-home</v-icon>
      <v-row
        class="articles-list"
      >
        <v-col
          v-for="post in articless"
          :key="post.fields.slug"
          xs="12"
          sm="12"
          md="4"
          lg="4"
          class="articles-list-item"
        >
          <n-link :to="'/articles/' + post.fields.slug">
            <v-card>
              <v-img
                :src="post.fields.heroImage.fields.file.url + '?fm=jpg&fl=progressive'"
                :alt="post.fields.heroImage.fields.file.fileName"
                class="white--text align-end"
                gradient="to bottom, rgba(255,255,255,.5), rgba(255,255,255,1)"
                height="270px"
                width="100%"
                cover
              >
                <v-card-title
                  class="card-title"
                  v-text="post.fields.title"
                />
                <v-card-subtitle
                  class="card-excerpt"
                  v-text="post.fields.excerpt"
                />
              </v-img>
            </v-card>
          </n-link>
        </v-col>
      </v-row>
      <div class="view-more text-right">
        <v-btn
          color="primary"
          :to="'/articles/'"
        >
          Lihat Semua Artikel
        </v-btn>
      </div>
    </v-container>
    <!-- <v-container>
      <v-row
        align-stretch
      >
        <v-col
          cols="12"
          sm="12"
          md="8"
          lg="8"
          class="section-journal"
        >
          <h2 class="section-title">
            Jurnal-jurnal Terkini
          </h2>
          <div class="journal-list">
            <div
              v-for="post in journals"
              :key="post.fields.slug"
              xs12
              class="journal-list-item"
            >
              <n-link :to="'/jurnal/' + post.fields.slug">
                <v-card class="item journal-item">
                  <div class="date">
                    {{ $moment(post.fields.datePublish).format('D MMMM YYYY') }}
                  </div>
                  <h3 class="title">{{ post.fields.title }}</h3>
                  <div class="excerpt">
                    {{ post.fields.excerpt }}
                  </div>
                  <div class="author">
                    Oleh: {{ post.fields.author.fields.name }}
                  </div>
                </v-card>
              </n-link>
            </div>
          </div>
          <div class="view-more">
            <v-btn
              color="primary"
              :to="'/jurnal/'"
            >
              Lihat Jurnal Lainnya
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          class="section-prayer"
          :style="{ 'backgroundImage': `url(${todayPrayer.fields.thumbnail.fields.file.url})` }"
        >
          <nuxt-link
            :to="'/doa/' + todayPrayer.fields.slug"
            class="prayer-item"
          >
            <div class="card-header">
              Doa Hari Ini
            </div>
            <div class="card-info">
              <div class="card-title">
                {{ todayPrayer.fields.title }}
              </div>
              <div class="card-excerpt">
                {{ todayPrayer.fields.excerpt }}
              </div>
            </div>
          </nuxt-link>
          <div class="view-more text-right">
            <nuxt-link
              :to="'/doa'"
            >
              Lihat Doa-doa Lainnya
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container> -->
    <section class="section-video-home">
      <div class="bg-yellow section-header">
        <nuxt-link
          to="/page/tentang-centrum-ivan-merz-kursus-teologi-katolik-keuskupan-surabaya"
          class="prayer-item"
        >
        <h2 class="section-title" style="color: #000;">
          Apa itu Centrum Ivan Merz?
        </h2>
        </nuxt-link>
      </div>
      <!-- <div class="video-container">
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/qhphKfgCR-4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div> -->
    </section>
    <v-container class="section-news">
      <h2 class="section-title">
        Berita-berita Terbaru
      </h2>
      <v-row
        class="news-list"
        align-middle
        justify="center"
      >
        <v-col
          v-for="(post, index) in news"
          :key="index"
          xs="12"
          sm="12"
          md="4"
          lg="4"
          class="articles-list-item"
        >
          <n-link :to="'/news/' + post.slug">
            <v-card>
              <v-img
                :src="post.slug + '?fm=jpg&fl=progressive'"
                :alt="post.slug"
                class="white--text align-end"
                gradient="to bottom, rgba(255,255,255,.5), rgba(255,255,255,1)"
                height="270px"
                width="100%"
                cover
              >
                <v-card-title
                  class="card-title"
                  v-text="post.title"
                />
                <v-card-subtitle
                  class="card-excerpt"
                  :v-text="post.excerpt"
                />
              </v-img>
            </v-card>
          </n-link>
        </v-col>
      </v-row>
      <div class="view-more text-right">
        <v-btn
          color="primary"
          :to="'/news/'"
        >
          Lihat Berita Lainnya
        </v-btn>
      </div>
    </v-container>
    <!-- <section
      class="section-aksi"
    >
      <v-img
        :src="imgAksi"
        size="cover"
        height="420px"
      >
        <div class="content">
          <div class="cta">
            Kita terpanggil untuk menemukan Kristus dalam diri mereka.
          </div>
          <div class="action-button">
            <v-btn
              to="/aksi"
              color="primary"
            >
              Beraksi Sekarang!
            </v-btn>
          </div>
        </div>
      </v-img>
    </section> -->
    <!-- <section class="section-segments bg-yellow">
      <div class="section-header">
        <h2 class="section-title">
          Bagaimana memanfaatkan YOUCAT bagi:
        </h2>
      </div>
      <v-container>
        <v-row>
          <v-col
            xs="12"
            sm="12"
            md="4"
            lg="4"
            class="segment-item"
          >
            <v-img
              :src="segment1"
              height="240px"
            >
              <h3>OMK</h3>
            </v-img>
          </v-col>
          <v-col
            xs="12"
            sm="12"
            md="4"
            lg="4"
            class="segment-item"
          >
            <v-img
              :src="segment2"
              height="240px"
            >
              <h3>Pendamping <br>OMK</h3>
            </v-img>
          </v-col>
          <v-col
            xs="12"
            sm="12"
            md="4"
            lg="4"
            class="segment-item"
          >
            <v-img
              :src="segment3"
              height="240px"
            >
              <h3>Orangtua <br>OMK</h3>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </section> -->

    <!-- <section class="section-video-home">
      <div class="bg-yellow section-header">
        <h2 class="section-title">
          Seperti apa sih semangat <strong>kreatif</strong> dalam Centrum Ivan Merz itu?
        </h2>
      </div>
      <div class="video-container">
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/9iRzSGIGo_Y"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </section> -->

    <!-- <section class="section-vacancies">
      <v-img
        :src="direx"
        size="cover"
        position="60%"
        height="480px"
      >
        <div class="content">
          <div class="cta">
            <h3 class="cta-title">
              Berkaryalah bersama tim Centrum Ivan Merz
            </h3>
            <p>Bertumbuhlah dalam suasana tim yang hidup dan terbuka.</p>
            <p>Temukan sukacita dalam semangat pengabdian.</p>
          </div>
          <div class="vacancy-list-wrapper">
            <p>Apakah kamu seorang:</p>
            <ul class="vacancy-list">
              <li
                v-for="(pos, index) in vpositions"
                :key="index"
                class="vacancy-list-item"
              >
                <div v-text="pos.title" />
              </li>
            </ul>
          </div>
          <div class="action-button">
            <v-btn
              to="/aksi"
              color="primary"
            >
              Ayo hubungi kami!
            </v-btn>
          </div>
        </div>
      </v-img>
    </section> -->

    <section class="section-donate section-yellow text-center">
      <h2 class="section-title">Dukung</h2>
      <p>Dukungan untuk upaya ini tidak harus hanya dengan tenaga & keahlian saja.</p>
      <p>Ada cara lain untuk mendukung kami!</p>
      <div class="action-button">
        <v-btn
          to="/page/donate"
        >
          Donasi
        </v-btn>
      </div>
    </section>
    <section class="section-sponsors">
      <h2
        class="section-title text-center"
      >
        <span>
          <!-- <img class="youcat-logo" src="~/assets/img/logo/logo.svg" alt="Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI"> -->
          Centrum Ivan Merz
        </span> didukung oleh:
      </h2>
      <v-row
        class="footer-sponsor"
        align="center"
        justify="center"
      >
        <v-col
          v-for="post in sponsors"
          :key="post.fields.slug"
          cols="6"
          sm="4"
          md="3"
        >
          <a
            :href="post.fields.action"
            target="_blank"
            rel="noreferrer"
          >
            <div class="item sponsor-item">
              <img
                :src="post.fields.image.fields.file.url + '?fm=jpg&fl=progressive'"
                class=""
              >
              <h6>{{ post.fields.name }}</h6>
            </div>
          </a>
        </v-col>
      </v-row>
    </section>
  </v-layout>
</template>

<style lang="scss" scoped>
  $small-width: 40em;
  $medium-width: 64em;
  $large-width: 90em;

  @mixin phone {
    @media (max-width: #{$small-width}) {
      @content;
    }
  }

  @mixin tablet-down {
    @media (max-width: #{$medium-width}) {
      @content;
    }
  }

  @mixin tablet {
    @media (min-width: #{$small-width + 0.063em }) and (max-width: #{$medium-width}) {
      @content;
    }
  }

  @mixin tablet-up {
    @media (min-width: #{$small-width + 0.063em }) {
      @content;
    }
  }

  @mixin desktop {
    @media (min-width: #{$medium-width + 0.063em}) {
      @content;
    }
  }
  .page-home {
    position: relative;
    // padding-bottom: 120px;
  }
  .card-title {
    font-weight: 700;
    font-size: 1.4rem;
    color: #000;
    word-break: keep-all;
    @include phone {
      font-size: 1rem;
      // padding: 0.5rem 0.5rem;
      line-height: 1.3;
    }
  }
  .excerpt, .card-excerpt {
    font-style: italic;
    @include phone {
      padding-top: 0.5rem;
    }
  }
  .journal-item {
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
  .date {
    text-align: right;
    opacity: 0.7;
    font-size: 0.875rem;
  }
  .author {
    opacity: 0.7;
    font-size: 0.875rem;
  }
  .journal-today {
    width: 95%;
    margin: 2rem auto;
    border: solid 1px #eee;
    border-radius: 6px;
    padding: 1rem;
  }
  .read-more {
    padding: 1rem;
    text-align: center;
    font-style: italic;
  }
  .section-prayer {
    background-size: cover;
    padding: 0;
    @include tablet-down {
      max-width: 320px;
      margin: 2rem auto;
    }
    a.prayer-item {
      display: block;
      height: 100%;
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+100 */
      background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
      @include tablet-down {
        min-height: 320px;
        margin: auto;
      }
    }
    .view-more {
      a {
        color: darken(hsla(74, 72%, 59%, 1), 20%);
        padding: 0.5rem 0;
        display: block;
        // background-color: hsla(74, 72%, 59%, 1);
        // display: inline-block;
        // padding: 0.25rem 0.5rem;
        // border-radius: 6px;
        // text-transform: uppercase;
        // font-size: 0.875rem;
      }
    }
  }
  .section-yellow {
    background-color: hsla(74, 72%, 59%, 1);
    .v-btn {
      background-color: #fff;
      font-weight: 700;
    }
  }
  .prayer-item {
    position: relative;
    .card-header {
      font-weight: 700;
      color: #fff;
      padding: 1rem;
      font-size: 1.4rem;
    }
    .card-info {
      padding: 1rem;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      color: #000;
    }
  }
  .section-video-home {
    // margin-bottom  : 3rem;
    width: 100%;
    border-bottom: solid 15px hsla(74, 72%, 59%, 1);
  }
  .section-header {
    text-align: center;
    padding: 4rem 1rem 2rem;
  }
  .video-container {
    overflow: hidden;
    position: relative;
    width:100%;
  }

  .video-container::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .section-news {
    margin-top: 1rem;
  }
  .view-more {
    padding: 0.5rem 0;
  }
  .section-aksi, .section-vacancies {
    position: relative;
    margin-top: 1rem;
    width: 100%;
    .content {
      background-color: transparentize(#000, 0.5);
      padding: 2rem;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      .cta {
        margin-bottom: 1rem;
        color: #fff;
        font-weight: 700;
        font-size: 2rem;
      }
      .action-button {
        text-align: left;
      }
      @include phone {
        padding: 1rem;
        left: 40%;
        top: 65%;
        .cta {
          font-size: 1.6rem;
        }
      }
    }
  }
  .section-segments {
    width: 100%;
    padding-bottom: 3rem;
    h2 {
      font-size: 2rem;
    }
    .section-header {
      padding-bottom: 0;
    }
    .segment-item {
      // padding: 0;
      position: relative;
    }
    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-align: center;
      font-size: 2rem;
      padding: 1rem;
      background-color: transparentize(#000, 0.8);
      border-radius: 6px;
    }
  }
  .section-vacancies {
    position: relative;
    width: 100%;
    margin-top: 0;
    @include phone {
      .v-img {
        background-position: 0 100%;
      }
    }
    .content {
      left: 5%;
      top: 50%;
      background-color: transparentize(#fff, 0.4);
      transform: translate(0%, -50%);
      .cta {
        color: #000;
        h3 {
          font-size: 1.6rem;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1rem;
          margin-bottom: 0;
        }
      }
      .vacancy-list-wrapper {
        p {
          margin-bottom: .5rem;
        }
      }
      @include phone {
        width: 90%;
        // position: relative;
        top: 10%;
        // bottom: 0;
        left: 0;
        transform: initial;
        .cta {
          h3 {
            font-size: 1.2rem;
            line-height: 1.4;
          }
        }
        .action-button {
          margin-top: 1rem;
        }
      }
    }
  }
  .section-donate, .section-sponsors {
    width: 100%;
    padding: 3rem 1rem;
  }
  .section-sponsors {
    .youcat-logo {
      max-width: 120px;
      vertical-align: middle;
    }
    .sponsor-item {
      margin-top: 0.5rem;
      box-shadow: 0 6px 8px -5px #ccc;
      border-radius: 4px;
      border: solid 1px #eee;
      padding: 1rem;
      text-align: center;
      a {
        display: block;
      }
      img {
        max-width: 120px;
        margin: auto;
      }
      h6 {
        margin-top: 0.25rem;
        font-size: 1rem;
        color: #999;
        @include phone {
          display: none;
        }
      }
    }
  }
</style>

<script>

// import moment from 'moment'
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()

// const bgomk = require('@/assets/img/segments/bgomk.jpg')

const youcatSegments = [
  {
    title: 'OMK',
    img: 'segment1'
  },
  {
    title: 'Orangtua OMK'
  },
  {
    title: 'Pendamping OMK'
  }
]

const vpositions = [
  {
    title: 'Copywriter',
    url: 'https://docs.google.com/forms/'
  },
  {
    title: 'Graphic Designer',
    url: 'https://docs.google.com/forms/'
  },
  {
    title: 'Illustrator',
    url: 'https://docs.google.com/forms/'
  },
  {
    title: 'Penulis',
    url: 'https://docs.google.com/forms/'
  },
  {
    title: 'Jurnalis',
    url: 'https://docs.google.com/forms/'
  },
  {
    title: 'Programmer',
    url: 'https://docs.google.com/forms/'
  }
]

// const today = moment().format('D-MM-YYYY')
export default {
  data: () => ({
    dataList: [],
    news : [],
    sponsors : [],
    articless : []
  }),

  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/featured', {
        type: 'articles'
      })
    }
    console.log(payload.length)
    this.news = payload

  }
}

// export default {
//   async asyncData ({ env }) {
//     try {
//       const getarticless = await client.getEntries({
//         content_type: 'articles',
//         'fields.featured': true,
//         order: '-sys.createdAt',
//         limit: 3
//       })
//       const getJournals = await client.getEntries({
//         content_type: 'journal',
//         order: '-sys.createdAt',
//         limit: 3
//       })
//       const getNews = await client.getEntries({
//         content_type: 'blogPost',
//         order: '-sys.createdAt',
//         limit: 3
//       })
//       const getPrayers = await client.getEntries({
//         content_type: 'prayer',
//         order: '-sys.createdAt',
//         'fields.featured': true,
//         limit: 1
//       })
//       const getSponsors = await client.getEntries({
//         content_type: 'sponsor',
//         order: '-fields.order',
//         'fields.type': 0
//       })

//       const todayPrayer = getPrayers.items[0]
//       return {
//         articless: getarticless.items,
//         journals: getJournals.items,
//         news: getNews.items,
//         sponsors: getSponsors.items,
//         todayPrayer,
//         imgAksi: require('@/assets/img/banners/anjal3.jpg'),
//         direx: require('@/assets/img/banners/direx-banner.jpg'),
//         segment1: require('@/assets/img/segments/bgomk.jpg'),
//         segment2: require('@/assets/img/segments/bgpomk.jpg'),
//         segment3: require('@/assets/img/segments/bgortu.jpg'),
//         youcatSegments,
//         vpositions
//       }
//     } catch (e) {
//       // eslint-disable-next-line
//       console.error(e)
//     }
//   },
//   computed: {
//   },
//   mounted () {
//   }
// }
// Catatan RD Kurdo Irianto, sebuah suara harapan di tengah badai COVID-19
</script>
