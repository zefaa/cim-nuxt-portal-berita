<template>
  <v-layout
    column
    justify-center
    align-center
    class="page page-activity-list"
  >
    <v-row
      class="activity-list"
    >
      <v-col
        v-for="post in posts"
        :key="post.fields.slug"
        xs="12"
        sm="12"
        md="6"
        lg="4"
        class="activity-list-item"
      >
        <n-link :to="'/aktivitas/' + post.fields.slug">
          <v-card>
            <v-img
              :src="post.fields.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'"
              :alt="post.fields.thumbnail.fields.file.fileName"
              class="white--text align-end"
              gradient="to bottom, rgba(255,255,255,.1), rgba(255,255,255,.9)"
              max-height="210px"
              width="100%"
            >
              <v-card-title
                class="card-title"
                v-text="post.fields.title"
              />
              <v-card-subtitle
                v-text="post.fields.excerpt"
              />
            </v-img>
          </v-card>
        </n-link>
      </v-col>
    </v-row>
  </v-layout>
</template>

<style lang="scss">
  a {
    text-decoration: none;
  }
  .activity-list {
    width: 100%;
  }
  .activity-list-item {
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
//         content_type: 'activity',
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
</script>
