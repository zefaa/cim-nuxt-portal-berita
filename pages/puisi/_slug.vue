<template>
  <v-container class="page page-poem-details">
    <h1 class="page-title">
      {{ poem.fields.title }}
    </h1>
    <div class="lyric-wrapper">
      <div class="lyric" v-html="$md.render(poem.fields.lyricMd)" />
    </div>
    <div class="description-wrapper">
      <h3 class="block-title">Catatan</h3>
      <div class="description" v-html="description" />
    </div>
  </v-container>
</template>

<style lang="scss">
  .text-right {
    text-align: right;
  }
  .lyric-wrapper {
    padding: 2rem;
    border-radius: 4px;
    border: solid 1px #eee;
    margin: 1rem auto 2rem;
    box-shadow: 0 6px 8px -5px #ccc;
  }
</style>

<script>
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()
let thisPoem

// thisContent = documentToHtmlString( post.fields.content )

// export default {
//   async asyncData ({ env, params }) {
//     try {
//       const getPoem = await client.getEntries({
//         content_type: 'poem',
//         'fields.slug': params.slug
//       })

//       if (getPoem) {
//         thisPoem = getPoem.items[0]
//       }
//       return {
//         poem: getPoem.items[0],
//         description: documentToHtmlString(getPoem.items[0].fields.description)
//       }
//     } catch (e) {
//       // eslint-disable-next-line
//       console.error(e)
//     }
//   },
//   head () {
//     if (thisPoem) {
//       const poemUrl = 'https://imerz.imavi.org/puisi/' + thisPoem.fields.slug
//       return {
//         meta: [
//           // hid is used as unique identifier. Do not use `vmid` for it as it will not work
//           { hid: 'og:title', name: 'og:title', content: thisPoem.fields.title },
//           { hid: 'title', name: 'title', content: thisPoem.fields.title },
//           { hid: 'description', name: 'description', content: thisPoem.fields.excerpt },
//           { hid: 'og:description', name: 'og:description', content: thisPoem.fields.excerpt },
//           { hid: 'og:image', name: 'og:image', content: thisPoem.fields.thumbnail.fields.file.url },
//           { hid: 'og:url', name: 'og:url', content: poemUrl }
//         ]
//       }
//     }
//   }
// }
</script>
