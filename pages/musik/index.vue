<template>
  <v-layout
    column
    justify-center
    align-center
    class="page page-song-list"
  >
    <h1 class="page-title">
      Daftar Musik-lagu
    </h1>
    <section class="section-song-list">
      <div class="song-list">
        <nuxt-link
          v-for="post in posts"
          :key="post.fields.slug"
          :to="'/musik/' + post.fields.slug"
          cols="12"
          class="song-list-item"
        >
          <v-card>
            <v-row
              dense
              align="center"
              class="item song-item"
            >
              <v-col
                class="image-wrapper"
                cols="2"
                md="2"
                lg="1"
              >
                <v-img
                  :src="post.fields.thumbnail.fields.file.url"
                  class="card-image"
                />
              </v-col>
              <v-col
                class="card-info"
              >
                <div class="card-title">
                  {{ post.fields.title }}
                </div>
                <div class="card-excerpt">
                  {{ post.fields.excerpt }}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </nuxt-link>
      </div>
    </section>
  </v-layout>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
  .song-list {
    width: 100%;
  }
  .song-list-item {
    margin-bottom: 0.5rem;
    display: block;
  }
  .song-item {
    padding: 1rem;
    .card-title {
      line-height: 1.6;
      font-size: 1.2rem;
      font-weight: 700;
    }
    .card-excerpt {
      line-height: 1;
      font-size: 0.875rem;
      font-style: italic;
      font-weight: 300;
      color: #999;
    }
    .card-image {
      width: 60px;
      border-radius: 4px;
    }
  }
  .date {
    text-align: right;
    opacity: 0.7;
    font-size: 0.875rem;
  }
  .excerpt {
    font-style: italic;
    font-weight: 400;
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
        content_type: 'song'
        // 'fields.tag': 'DOCAT'
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
