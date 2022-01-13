<template>
  <v-container class="page page-page-detail">
    <h1 class="page-title">
      {{ post.fields.title }}
    </h1>
    <div class="content">
      <span v-html="$md.render(post.fields.body)" />
    </div>
    <div class="share-buttons text-center">
      <v-btn
        :href="waHref"
        target="_blank"
        rel="noreferrer"
        ripple
        color="#25D366"
        class="share-whatsapp"
        large
      >
        <span class="">
          Bagikan
        </span>
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
  .button-image, .button-download {
    width: 100%;
    // max-width: 120px;
  }
  .page-image {
    margin: 1rem auto;
    // margin-right: 1rem;
    // float: left;
  }
  .share-buttons {
    text-align: center;
    margin: 2rem auto;
  }
  .share-whatsapp, .share-whatsapp i {
    color: #fff;
  }
  .share-whatsapp span {
    margin-right: 0.5rem;;
  }
</style>

<script>
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()
let flatPage
let waHref

// export default {
//   async asyncData ({ env, params }) {
//     try {
//       const pathUrl = 'https://imerz.imavi.org/page/' + params.slug
//       const thisPost = await client.getEntries({
//         content_type: 'page',
//         'fields.slug': params.slug
//       })

//       if (thisPost) {
//         flatPage = thisPost.items[0]
//         waHref = 'https://wa.me/?text=%2A' + encodeURIComponent(flatPage.fields.title) + '%2A%0A_' + encodeURIComponent(flatPage.fields.excerpt) + '_%0A%0A' + 'Baca%20lebih%20lanjut%20di%20website%20youcat%2Eid' + '%0A' + encodeURIComponent(pathUrl)
//       }
//       return {
//         waHref,
//         post: thisPost.items[0]
//       }
//     } catch (e) {
//       // eslint-disable-next-line
//       console.error(e)
//     }
//   },
//   head (params) {
//     if (flatPage) {
//       const thisUrl = 'https://imerz.imavi.org/page/' + params.slug
//       return {
//         meta: [
//           // hid is used as unique identifier. Do not use `vmid` for it as it will not work
//           { hid: 'title', name: 'title', content: flatPage.fields.title },
//           { hid: 'description', name: 'description', content: flatPage.fields.excerpt },
//           { hid: 'og:title', name: 'og:title', content: flatPage.fields.title },
//           { hid: 'og:description', name: 'og:description', content: flatPage.fields.excerpt },
//           { hid: 'og:url', name: 'og:url', content: thisUrl }
//         ]
//       }
//     }
//   }
// }
</script>
