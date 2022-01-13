<template>
  <v-container class="page page-news-detail">
    <h1 class="page-title">
      {{ news.fields.title }}
    </h1>
    <div class="date text-right">
      {{ $moment(news.fields.publishDate).format('D MMMM YYYY') }}
    </div>
    <div class="author text-right">
      oleh: {{ news.fields.author.fields.name }}
    </div>
    <div class="content">
      <v-img
        :src="news.fields.heroImage.fields.file.url + '?fm=jpg&fl=progressive'"
        :alt="news.fields.heroImage.fields.file.fileName"
        class="news-image"
        cover
      />
      <span v-html="$md.render(news.fields.body)" />
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
  .content {
    max-width: 100%;
    img {
      max-width: 100%;
    }
  }
  .button-image, .button-download {
    width: 100%;
    // max-width: 120px;
  }
  .news-image {
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
let thisnews
let waHref

// export default {
//   async asyncData ({ env, params }) {
//     try {
//       const pathUrl = 'https://imerz.imavi.org/news/' + params.slug
//       const thisPost = await client.getEntries({
//         content_type: 'blogPost',
//         'fields.slug': params.slug
//       })

//       if (thisPost) {
//         thisnews = thisPost.items[0]
//         waHref = 'https://wa.me/?text=%2A' + encodeURIComponent(thisnews.fields.title) + '%2A%0A_' + encodeURIComponent(thisnews.fields.excerpt) + '_%0A%0A' + 'Baca%20lebih%20lanjut%20di%20website%20youcat%2Eid' + '%0A' + encodeURIComponent(pathUrl)
//       }
//       return {
//         waHref,
//         news: thisPost.items[0]
//       }
//     } catch (e) {
//       // eslint-disable-next-line
//       console.error(e)
//     }
//   },
//   head (params) {
//     if (thisnews) {
//       const thisUrl = 'https://imerz.imavi.org/news/' + params.slug
//       return {
//         meta: [
//           // hid is used as unique identifier. Do not use `vmid` for it as it will not work
//           { hid: 'title', name: 'title', content: thisnews.fields.title },
//           { hid: 'description', name: 'description', content: thisnews.fields.excerpt },
//           { hid: 'og:title', name: 'og:title', content: thisnews.fields.title },
//           { hid: 'og:description', name: 'og:description', content: thisnews.fields.excerpt },
//           { hid: 'og:image', name: 'og:image', content: thisnews.fields.heroImage.fields.file.url },
//           { hid: 'og:url', name: 'og:url', content: thisUrl }
//         ]
//       }
//     }
//   }
// }
</script>
