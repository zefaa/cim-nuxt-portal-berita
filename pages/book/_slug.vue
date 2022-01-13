<template>
  <v-container class="page page-book-detail">
    <h1 class="page-title">
      {{ book.fields.title }}
    </h1>
    <div class="description">
      <v-img
        :src="book.fields.thumbnail.fields.file.url + '?fm=jpg&fl=progressive'"
        :alt="book.fields.thumbnail.fields.file.fileName"
        max-width="180px"
        class="book-image"
        cover
      />
      <span v-html="$md.render(book.fields.body)" />
    </div>
    <v-row
      dense
      align="center"
      justify="center"
    >
      <v-col
        class="purchase-button text-right"
        align-self=""
      >
        <v-btn
          :href="book.fields.purchaseUrl"
          color="primary"
          large
          ripple
          target="_blank"
          rel="noreferrer"
        >
          Dapatkan
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-col>
      <v-col
        class="share-buttons text-left"
      >
        <v-btn
          :href="waHref"
          target="_blank"
          rel="noreferrer"
          ripple
          color="#25D366"
          class="share-whatsapp"
          large
        >
          Bagikan
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
  .button-image, .button-download {
    width: 100%;
    // max-width: 120px;
  }
  .book-image {
    // margin: 1rem auto;
    margin-right: 1rem;
    margin-bottom: 1rem;
    float: left;
  }
  .purchase-button a.v-btn {
    color: #000;
    font-weight: 700;
    > span {
      margin-right: 0.5rem;
    }
  }
  .share-buttons {
    margin: 2rem auto;
  }
  .share-whatsapp, .share-whatsapp i {
    color: #fff;
    font-weight: 700;
  }
  .share-whatsapp, .purchase-button {
    i {
      margin-left: 0.5rem;
    }
  }
</style>

<script>
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { createClient } from '~/plugins/contentful.js'

const client = createClient()
let thisbook
let waHref

export default {
  async asyncData ({ env, params }) {
    try {
      const pathUrl = 'https://imerz.imavi.org/book/' + params.slug
      const thisPost = await client.getEntries({
        content_type: 'book',
        'fields.slug': params.slug
      })

      if (thisPost) {
        thisbook = thisPost.items[0]
        waHref = 'https://wa.me/?text=%2A' + encodeURIComponent(thisbook.fields.title) + '%2A%0A_' + encodeURIComponent(thisbook.fields.excerpt) + '_%0A%0A' + 'Baca%20lebih%20lanjut%20di%20website%20youcat%2Eid' + '%0A' + encodeURIComponent(pathUrl)
      }
      return {
        waHref,
        book: thisPost.items[0],
        content: documentToHtmlString(thisPost.items[0].fields.descriptionRichText)
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  head (params) {
    if (thisbook) {
      const thisUrl = 'https://imerz.imavi.org/book/' + params.slug
      return {
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'title', name: 'title', content: thisbook.fields.title },
          { hid: 'description', name: 'description', content: thisbook.fields.excerpt },
          { hid: 'og:title', name: 'og:title', content: thisbook.fields.title },
          { hid: 'og:description', name: 'og:description', content: thisbook.fields.excerpt },
          { hid: 'og:image', name: 'og:image', content: thisbook.fields.thumbnail.fields.file.url },
          { hid: 'og:url', name: 'og:url', content: thisUrl }
        ]
      }
    }
  }
}
</script>
