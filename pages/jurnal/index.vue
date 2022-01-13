<template>
  <v-container>
    <v-layout
      column
      justify-center
      align-center
      class="page page-journal-list"
    >
      <h1 class="page-title">
        Jurnal-jurnal
      </h1>
      <div class="journal-list">
        <div
          v-for="post in posts"
          :key="post.fields.slug"
          xs12
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
      </div>
    </v-layout>
  </v-container>
</template>

<style lang="scss">
  a {
    text-decoration: none;
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
  .excerpt {
    font-style: italic;
  }
  .author {
    opacity: 0.7;
    font-size: 0.875rem;
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
//       const getPosts = await client.getEntries({
//         content_type: 'journal',
//         order: '-sys.createdAt'
//       })
//       return {
//         posts: getPosts.items
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
