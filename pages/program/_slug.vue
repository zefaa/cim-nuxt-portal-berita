<template>
  <v-container class="page page-program-detail">
    <h1 class="page-title">
      {{ program.fields.title }}
    </h1>
    <div class="description">
      <v-img
        :src="program.fields.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'"
        :alt="program.fields.thumbnail.fields.file.fileName"
        max-width="180px"
        class="program-image"
        cover
      />
      <span v-html="$md.render(program.fields.body)" />
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
  .program-image {
    // margin: 1rem auto;
    margin-right: 1rem;
    margin-bottom: 1rem;
    float: left;
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
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()
let thisprogram
let waHref

// export default {
//   async asyncData ({ env, params }) {
//     try {
//       const pathUrl = 'https://imerz.imavi.org/program/' + params.slug
//       const thisPost = await client.getEntries({
//         content_type: 'program',
//         'fields.slug': params.slug
//       })

//       if (thisPost) {
//         thisprogram = thisPost.items[0]
//         waHref = 'https://wa.me/?text=%2A' + encodeURIComponent(thisprogram.fields.title) + '%2A%0A_' + encodeURIComponent(thisprogram.fields.excerpt) + '_%0A%0A' + 'Baca%20lebih%20lanjut%20di%20website%20youcat%2Eid' + '%0A' + encodeURIComponent(pathUrl)
//       }
//       return {
//         waHref,
//         program: thisPost.items[0],
//         content: documentToHtmlString(thisPost.items[0].fields.descriptionRichText)
//       }
//     } catch (e) {
//       // eslint-disable-next-line
//       console.error(e)
//     }
//   },
//   head (params) {
//     if (thisprogram) {
//       const thisUrl = 'https://imerz.imavi.org/program/' + params.slug
//       return {
//         meta: [
//           // hid is used as unique identifier. Do not use `vmid` for it as it will not work
//           { hid: 'title', name: 'title', content: thisprogram.fields.title },
//           { hid: 'description', name: 'description', content: thisprogram.fields.excerpt },
//           { hid: 'og:title', name: 'og:title', content: thisprogram.fields.title },
//           { hid: 'og:description', name: 'og:description', content: thisprogram.fields.excerpt },
//           { hid: 'og:image', name: 'og:image', content: thisprogram.fields.thumbnail.fields.file.url },
//           { hid: 'og:url', name: 'og:url', content: thisUrl }
//         ]
//       }
//     }
//   }
// }
</script>
