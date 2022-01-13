<template>
  <v-layout
    column
    justify-center
    align-center
    class="page page-book-list"
  >
    <h1
      class="page-title text-center"
    >
      Buku-buku
    </h1>
    <section class="section-anchor-books">
      <h2
        class="section-title"
      >
        Seri Utama YOUCAT
      </h2>
      <ul
        class="book-list"
      >
        <li
          v-for="post in anchorPosts"
          :key="post.fields.slug"
          class="book-list-item"
        >
          <n-link :to="'/book/' + post.fields.slug">
            <v-card>
              <v-row
                dense
                align="center"
              >
                <v-col
                  cols=""
                  sm="3"
                  md="2"
                  lg="1"
                >
                  <v-img
                    :src="post.fields.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'"
                    :alt="post.fields.thumbnail.fields.file.fileName"
                    class="white--text align-end"
                    gradient="to bottom, rgba(255,255,255,.1), rgba(255,255,255,.9)"
                    height="120px"
                    width="100%"
                    cover
                  />
                </v-col>
                <v-col>
                  <v-card-title
                    class="card-title"
                    v-text="post.fields.title"
                  />
                  <v-card-subtitle
                    class="card-excerpt"
                    v-text="post.fields.excerpt"
                  />
                </v-col>
              </v-row>
            </v-card>
          </n-link>
        </li>
      </ul>
    </section>
    <section class="section-other-books">
      <h2
        class="section-title"
      >
        Buku-buku lainnya
      </h2>
      <ul
        class="book-list other-book-list"
      >
        <li
          v-for="post in otherPosts"
          :key="post.fields.slug"
          class="book-list-item"
        >
          <n-link :to="'/book/' + post.fields.slug">
            <v-card>
              <v-row
                dense
                align="center"
              >
                <v-col
                  cols=""
                  sm="3"
                  md="2"
                  lg="1"
                >
                  <v-img
                    :src="post.fields.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'"
                    :alt="post.fields.thumbnail.fields.file.fileName"
                    class="white--text align-end"
                    gradient="to bottom, rgba(255,255,255,.1), rgba(255,255,255,.5)"
                    height="120px"
                    width="100%"
                    cover
                  />
                </v-col>
                <v-col>
                  <v-card-title
                    class="card-title"
                    v-text="post.fields.title"
                  />
                  <v-card-subtitle
                    class="card-excerpt"
                    v-text="post.fields.excerpt"
                  />
                </v-col>
              </v-row>
            </v-card>
          </n-link>
        </li>
      </ul>
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
  a {
    text-decoration: none;
  }
  section {
    width: 100%;
    padding-bottom: 2rem;
  }
  .book-list {
    width: 100%;
  }
  .book-list-item {
    padding: 1rem;
    .card-title {
      font-weight: 700;
      color: #000;
    }
  }
  .date {
    text-align: right;
    opacity: 0.7;
    font-size: 0.875rem;
  }
  .excerpt {
    font-style: italic;
  }
  .card-title {
    @include phone {
      font-size: 1rem;
      line-height: 1.4;
      word-break: keep-all;
    }
  }
  .card-excerpt {
    font-style: italic;
    @include phone {
      // display: none;
    }
  }
  .author {
    opacity: 0.7;
    font-size: 0.875rem;
  }
  ul {
    list-style-type: none;
  }
</style>

<script>
// import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
  },
  async asyncData ({ env }) {
    try {
      const getPosts = await client.getEntries({
        content_type: 'book',
        order: 'fields.position',
        'fields.anchorBook': true
      })
      const getOthers = await client.getEntries({
        content_type: 'book',
        order: 'fields.position',
        'fields.anchorBook': false
      })
      return {
        anchorPosts: getPosts.items,
        otherPosts: getOthers.items
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>
