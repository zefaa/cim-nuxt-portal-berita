<template>
  <v-layout
    column
    justify-center
    align-center
    class="page page-read page-fullscreen"
  >
    <section class="section-page-navigation">
      <div class="section-inner">
        <v-row
          align="center"
          justify="stretch"
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
              href="#section-artikel"
            >
              Artikel
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
              href="#section-journal"
            >
              Jurnal
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
              href="#section-news"
            >
              Berita
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </section>
    <section
      id="section-article"
      class="section-article-list"
    >
      <div class="section-inner">
        <h2 class="section-title">
          Artikel Terkini
        </h2>
        <v-row
          class="article-list"
        >
          <v-col
            v-for="post in articles"
            :key="post.fields.slug"
            cols="12"
            sm="6"
            class="article-list-item"
          >
            <n-link :to="'/article/' + post.fields.slug">
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
          </v-col>
          <v-col class="article-list-item read-more">
            <v-btn
              to="/article"
              color="primary"
              class="text-center"
            >
              Baca Selebihnya
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </section>
    <section class="section-quotes">
      <img :src="quote1" alt="Tolle, lege">
    </section>
    <section id="section-journal" class="section-journal-list">
      <div class="section-inner">
        <h2 class="section-title">
          Jurnal Terbaru
        </h2>
        <div class="journal-list">
          <div
            v-for="post in journals"
            :key="post.fields.slug"
            class="journal-list-item"
          >
            <n-link :to="'/jurnal/' + post.fields.slug">
              <v-card class="item journal-item">
                <div class="date">
                  {{ $moment(post.fields.datePublish).format('D MMMM YYYY') }}
                </div>
                <!-- <div>{{ post.fields.title }}</div> -->
                <div class="excerpt">
                  {{ post.fields.excerpt }}
                </div>
                <div class="author">
                  Oleh: {{ post.fields.author.fields.name }}
                </div>
              </v-card>
            </n-link>
          </div>
          <div class="journal-list-item read-more">
            <v-btn
              to="/jurnal"
              color="primary"
              class="text-center"
            >
              Baca Selebihnya
            </v-btn>
          </div>
        </div>
      </div>
    </section>
    <section id="section-news" class="section-news">
      <div class="section-inner">
        <h2 class="section-title">
          Berita-berita
        </h2>
        <v-row
          class="news-list"
        >
          <v-col
            v-for="post in news"
            :key="post.fields.slug"
            cols="12"
            sm="6"
            class="news-list-item"
          >
            <n-link :to="'/news/' + post.fields.slug">
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
          </v-col>
          <v-col class="news-list-item read-more">
            <v-btn
              to="/news"
              color="primary"
              class="text-center"
            >
              Baca Selebihnya
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </section>
  </v-layout>
</template>

<style lang="scss" scoped>
  section {
    width: 100%;
    .section-title {
      text-align: center;
      margin-top: 1rem;
    }
  }
  a {
    text-decoration: none;
  }
  .journal-list, .article-list, .news-list {
    width: 100%;
    margin: 0 auto;
  }
  .journal-item, .article-item, .news-item {
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
  .card-title {
    color: #000;
    font-weight: 700;
    line-height: 1.4;
    word-break: keep-all;
  }
  .date {
    text-align: right;
    opacity: 0.7;
    font-size: 0.875rem;
  }
  .card-excerpt, .excerpt {
    font-style: italic;
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
  .read-more {
    text-align: center;
    padding: 2rem 1rem;
  }
</style>

<script>
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()

// export default {
//   components: {
//   },
//   async asyncData ({ env }) {
//     try {
//       const getArticles = await client.getEntries({
//         content_type: 'article',
//         // 'fields.tags': 'DOCAT',
//         order: '-sys.createdAt',
//         limit: 4
//       })
//       const getJournals = await client.getEntries({
//         content_type: 'journal',
//         // 'fields.tags': 'DOCAT',
//         order: '-sys.createdAt',
//         limit: 4
//       })
//       const getNews = await client.getEntries({
//         content_type: 'blogPost',
//         // 'fields.tags': 'DOCAT',
//         order: '-sys.createdAt',
//         limit: 4
//       })
//       return {
//         articles: getArticles.items,
//         news: getNews.items,
//         journals: getJournals.items
//       }
//     } catch (e) {
//       // eslint-disable-next-line
//       console.error(e)
//     }
//   },
//   data () {
//     return {
//       quote1: require('@/assets/img/quotes-augustine-l.jpg')
//     }
//   },
//   computed: {
//     // orderedUsers () {
//     //   const sortedPosts = this.$_.sortBy(this.posts, 'datePublish')
//     //   return sortedPosts
//     // }
//   },
//   mounted () {
//   }
// }
// Catatan harian RD Kurdo Irianto tentang iman, harapan, kasih ditengah badai COVID-19
</script>
