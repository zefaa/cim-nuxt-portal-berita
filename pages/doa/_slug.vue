<template>
  <v-container class="page page-prayer-details">
    <h1 class="page-title">
      <!-- {{ prayer.fields.title }} -->
      DOA
    </h1>
    <div>
      <!-- <span v-html="content" /> -->
      <span v-html="$md.render(prayer.fields.content)" />
    </div>
  </v-container>
</template>

<style lang="scss">
  .text-right {
    text-align: right;
  }
</style>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
let thisPrayer

// thisContent = documentToHtmlString( post.fields.content )

export default {
  async asyncData ({ env, params }) {
    try {
      const thisPost = await client.getEntries({
        content_type: 'prayer',
        'fields.slug': params.slug
      })

      if (thisPost) {
        thisPrayer = thisPost.items[0]
      }
      return {
        prayer: thisPost.items[0],
        content: documentToHtmlString(thisPost.items[0].fields.content)
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  head () {
    if (thisPrayer) {
      const prayerUrl = 'https://imerz.imavi.org/doa/' + thisPrayer.fields.slug
      return {
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'og:title', name: 'og:title', content: thisPrayer.fields.title },
          { hid: 'title', name: 'title', content: thisPrayer.fields.title },
          { hid: 'description', name: 'description', content: thisPrayer.fields.excerpt },
          { hid: 'og:description', name: 'og:description', content: thisPrayer.fields.excerpt },
          { hid: 'og:image', name: 'og:image', content: thisPrayer.fields.thumbnail.fields.file.url },
          { hid: 'og:url', name: 'og:url', content: prayerUrl }
        ]
      }
    }
  }
}
</script>
