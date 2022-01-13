<template>
  <v-container class="page page-journal-detail">
    <div class="text-right">
      {{ $moment(journal.fields.datePublish).format('D MMMM YYYY') }}
    </div>
    <div v-html="content" />
  </v-container>
</template>

<style lang="scss">
  .text-right {
    text-align: right;
  }
  .page-journal-detail {
    max-width: 640px;
    margin: auto;
  }
</style>

<script>

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
let thisJournal
// thisContent = documentToHtmlString( post.fields.content )

export default {
  async asyncData ({ env, params }) {
    try {
      const thisPost = await client.getEntries({
        content_type: 'journal',
        'fields.slug': params.slug
      })

      thisJournal = thisPost.items[0]
      return {
        journal: thisPost.items[0],
        content: documentToHtmlString(thisPost.items[0].fields.content)
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  head () {
    if (thisJournal) {
      const journalUrl = 'https://imerz.imavi.org/journal/' + thisJournal.fields.slug
      return {
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'og:title', name: 'og:title', content: thisJournal.fields.title },
          { hid: 'title', name: 'title', content: thisJournal.fields.title },
          { hid: 'description', name: 'description', content: thisJournal.fields.excerpt },
          { hid: 'og:description', name: 'og:description', content: thisJournal.fields.excerpt },
          { hid: 'og:image', name: 'og:image', content: thisJournal.fields.thumbnail.fields.file.url },
          { hid: 'og:url', name: 'og:url', content: journalUrl }
        ]
      }
    }
  }
}
</script>
