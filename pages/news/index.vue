<template>
  <v-layout
    column
    justify-center
    align-center
    class="page page-news-list"
  >
    <h1 class="page-title">
      Berita-berita
    </h1>
    <v-row
      class="news-list"
    >
      <v-col
        v-for="post in posts"
        :key="post.fields.slug"
        xs="12"
        sm="12"
        md="6"
        lg="4"
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
                class="card-date"
                v-text="$moment(post.fields.publishDate).format('D MMMM YYYY')"
              />
            </v-img>
          </v-card>
        </n-link>
      </v-col>
    </v-row>
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
  .news-list {
    width: 100%;
  }
  .news-list-item {
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
  .card-date {
    text-align: right;
    font-style: italic;
  }
  .excerpt {
    font-style: italic;
  }
  .card-title {
    word-break: keep-all;
    @include phone {
      font-size: 1rem;
      line-height: 1.4;
    }
  }
  .card-excerpt {
    @include phone {
      display: none;
    }
  }
  .author {
    opacity: 0.7;
    font-size: 0.875rem;
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
        content_type: 'blogPost',
        order: '-fields.publishDate'
      })
      return {
        posts: getPosts.items
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
