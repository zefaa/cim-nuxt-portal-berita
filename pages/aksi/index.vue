<template>
  <v-layout
    column
    justify-center
    align-center
    class="page page-aksi page-fullscreen"
  >
    <section class="section-page-navigation">
      <div class="section-inner">
        <v-row
          align="center"
          justify-stretch
          class="page-navigation"
        >
          <v-col
            cols="4"
          >
            <v-btn
              class="button button-primary"
              elevation="1"
              large
              block
              color="primary"
              href="#section-articles"
            >
              Pelajari
            </v-btn>
          </v-col>
          <v-col
            cols="4"
          >
            <v-btn
              class="button button-primary"
              elevation="1"
              large
              block
              color="primary"
              href="#section-life-actions"
            >
              Lakukan
            </v-btn>
          </v-col>
          <v-col
            cols="4"
          >
            <v-btn
              class="button button-primary"
              elevation="1"
              large
              block
              color="primary"
              href="#section-doa"
            >
              Doakan
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </section>
    <section id="section-read" class="section-read">
      <div class="section-inner">
        <h2 class="section-title">
          Jurnal Kepedulian Sosial
        </h2>
        <div
          v-if="todayJournal"
          :class="{'expanded': journalExpanded }"
          class="today-journal-wrapper"
        >
          <div class="journal-mask">
            <v-btn
              color="primary"
              @click="toggleExpansion"
            >
              Baca Selengkapnya
            </v-btn>
          </div>
          <v-sheet
            id="today-journal"
            class="today-journal"
            elevation="2"
          >
            <div
              transition
              name="expand"
              class="journal-content"
            >
              <span
                v-html="todayJournal.content"
              />
            </div>
          </v-sheet>
        </div>
        <div class="journal-list">
          <h3 class="block-title">
            Jurnal-jurnal lainnya
          </h3>
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
                <div class="excerpt">
                  {{ post.fields.excerpt }}
                </div>
                <div class="author">
                  Oleh: {{ post.fields.author.fields.name }}
                </div>
              </v-card>
            </n-link>
          </div>
          <div class="journal-list-item read-more text-center">
            <v-btn
              color="primary"
              to="/jurnal"
              class="text-center"
            >
              Lihat Lainnya
            </v-btn>
          </div>
        </div>
      </div>
    </section>
    <section class="section-quotes">
      <img :src="docatq" alt="Act">
    </section>
    <section
      id="section-life-actions"
      class="section-life-actions"
    >
      <div class="section-inner">
        <h2 class="section-title text-center">
          Apa yang bisa kita lakukan?
        </h2>
        <v-list
          two-line
          class="action-list"
        >
          <template
            v-for="(post, index) in lifeActions"
            class="action-list-item"
          >
            <v-list-item
              :key="index"
            >
              <v-list-item-avatar>
                <v-img
                  :src="post.fields.thumbnail.fields.file.url"
                />
              </v-list-item-avatar>
              <n-link :to="'/lakukan/' + post.fields.slug">
                <v-list-item-content>
                  <v-card-title
                    class="card-title"
                    v-text="post.fields.title"
                  />
                  <v-card-subtitle
                    class="card-excerpt"
                    v-text="post.fields.excerpt"
                  />
                </v-list-item-content>
              </n-link>
            </v-list-item>
          </template>
          <div class="lakukan-list-item read-more text-center">
            <v-btn
              to="/lakukan"
              color="primary"
              class="text-center"
            >
              Lihat Lainnya
            </v-btn>
          </div>
        </v-list>
      </div>
    </section>
    <section class="section-quotes">
      <img :src="kolbeq" alt="Act">
    </section>
    <section id="section-articles" class="section-articles">
      <div class="section-inner">
        <h2 class="section-title">
          Artikel-artikel
        </h2>
        <v-row
          align="center"
          justify="center"
          class="reading-list"
        >
          <v-col
            v-for="post in articless"
            :key="post.fields.slug"
            cols="12"
            sm="6"
            class="news-list-item"
          >
            <n-link :to="'/articles/' + post.fields.slug">
              <v-card>
                <v-img
                  :src="post.fields.heroImage.fields.file.url + '?fm=jpg&fl=progressive'"
                  :alt="post.fields.heroImage.fields.file.fileName"
                  class="white--text align-end"
                  gradient="to bottom, rgba(255,255,255,.1), rgba(255,255,255,.9)"
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

            <div class="read-more text-center" style="margin-top: 1rem;">
              <v-btn
                to="/articles"
                class="text-center"
                color="primary"
              >
                Lihat Selebihnya
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>
    <section id="section-doa" class="section-prayers section-grey">
      <div class="section-inner">
        <h2 class="section-title">
          Doa-doa
        </h2>
        <v-row
          class="activity-list"
          align="center"
          justify="center"
        >
          <v-col
            v-for="post in prayers"
            :key="post.fields.slug"
            cols="12"
            sm="6"
            md="4"
            class="activity-list-item"
          >
            <n-link :to="'/doa/' + post.fields.slug">
              <v-card>
                <v-img
                  :src="post.fields.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'"
                  :alt="post.fields.thumbnail.fields.file.fileName"
                  class="white--text align-end"
                  gradient="to bottom, rgba(255,255,255,.1), rgba(255,255,255,.9)"
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
          <v-col
            cols="12"
          >
            <div class="activity-list-item read-more text-center">
              <v-btn
                to="/doa"
                class="text-center"
                color="primary"
              >
                Lihat Selebihnya
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
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
  section {
    width: 100%;
    margin-top: 2rem;
    .section-title {
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }
  .section-quotes {
    text-align: center;
    // background: #f5ce3e;
    img {
      max-width: 1280px;
      margin: auto;
    }
  }
  a {
    text-decoration: none;
  }
  .journal-list, .articles-list, .news-list {
    width: 100%;
  }
  .action-list {
    max-width: 640px;
    margin: auto;
  }
  .journal-list {
    padding-top: 2rem;
    .block-title {
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  .journal-item, .articles-item, .news-item {
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
  .card-title {
    color: #000;
    font-weight: 700;
    word-break: keep-all;
  }
  .date {
    text-align: right;
    opacity: 0.7;
    font-size: 0.875rem;
  }
  .card-excerpt, .excerpt {
    font-style: italic;
    color: #999;
  }
  .author {
    opacity: 0.7;
    font-size: 0.875rem;
  }
  .page-navigation {
    padding: 1rem 1rem 2rem;
    a.button {
      color: #000;
      font-weight: 700;
    }
  }
  .today-journal-wrapper {
    position: relative;
    .journal-mask {
      padding-top: 90px;
      padding-bottom: 1rem;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+100 */
      background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 40%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 40%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 40%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
      z-index: 1;
    }
  }
  .journal-content {
    padding: 4rem;
    max-height: 300px;
    overflow: hidden;
    @include tablet {
      padding: 4rem 2rem;
    }
    @include phone {
      padding: 2rem 1rem;
    }
  }
  .expanded {
    .journal-mask {
      display: none;
    }
    .journal-content {
      max-height: none;
    }
  }
  .expand-enter-active, .expand-leave-active {
    transition: height .5s;
  }
  .expand-enter-to, .expand-leave {
    height: auto;
  }
  .expand-enter, .expand-leave-to {
    height: 200px;
  }
</style>

<script>
// import moment from 'moment'
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()

let todayJournal

// const today = moment().format('D-MM-YYYY')

// export default {
//   components: {
//   },
//   async asyncData ({ env }) {
//     try {
//       const getActions = await client.getEntries({
//         content_type: 'lifeAction',
//         // 'fields.tags': 'DOCAT',
//         order: '-sys.createdAt',
//         limit: 4
//       })
//       const getJournals = await client.getEntries({
//         content_type: 'journal',
//         // 'fields.tags': 'asg',
//         order: '-sys.createdAt',
//         // skip: 1,
//         limit: 3
//       })
//       const getarticless = await client.getEntries({
//         content_type: 'articles',
//         // 'fields.tags': 'asg',
//         order: '-sys.createdAt',
//         limit: 4
//       })
//       const getPrayers = await client.getEntries({
//         content_type: 'prayer',
//         order: '-sys.createdAt',
//         // 'fields.tag': 'asg',
//         limit: 4
//       })
//       todayJournal = {
//         item: getJournals.items[0],
//         content: documentToHtmlString(getJournals.items[0].fields.content)
//       }
//       const restJournals = getJournals.items.slice(1)
//       return {
//         journals: restJournals,
//         articless: getarticless.items,
//         lifeActions: getActions.items,
//         prayers: getPrayers.items,
//         docatq: require('@/assets/img/quotes-teresa.jpg'),
//         kolbeq: require('@/assets/img/quotes-kolbe.jpg'),
//         journalExpanded: false,
//         todayJournal
//       }
//     } catch (e) {
//       // eslint-disable-next-line
//       console.error(e)
//     }
//   },
//   computed: {
//     // theme () {
//     //   return this.$store.themeType.type
//     // }
//   },
//   created () {
//     this.$store.dispatch('toggleFs', true)
//   },
//   mounted () {
//     // this.$vuetify.theme.themes.light.primary = '#65b4e4'
//     // this.$vuetify.theme.themes.light.primary = '#4caf50'
//     // this.$vuetify.theme.docat = true
//     this.$vuetify.theme.fullscreen = true
//     // eslint-disable-next-line no-console
//     // console.log(this.$vuetify.theme)
//     // document.body.classList.add('fullscreen')
//     // document.body.classList.add('docat')
//   },
//   // updated () {
//   //   document.body.classList.remove('fullscreen')
//   //   document.body.classList.remove('docat')
//   // },
//   updated () {
//     // this.$store.dispatch('toggleFs', false)
//   },
//   methods: {
//     toggleExpansion () {
//       const getStatus = this.journalExpanded
//       this.journalExpanded = !getStatus
//     }
//   }
// }
// Catatan RD Kurdo Irianto, sebuah suara harapan di tengah badai COVID-19
</script>
