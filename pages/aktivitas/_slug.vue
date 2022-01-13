<template>
  <v-container>
    <div class="title">
      {{ activity.fields.title }}
    </div>
    <div class="description">
      <span v-html="content" />
    </div>
    <v-row class="download">
      <v-col
        v-for="(image, index) in activity.fields.images"
        :key="index"
        xs="4"
        sm="3"
        md="2"
      >
        <v-card
          class="download-card"
        >
          <v-img
            class="button-image"
            :src="image.fields.file.url"
          />
          <v-btn
            color="primary"
            :href="image.fields.file.url"
            target="_blank"
            rel="noreferrer"
            class="button-download"
          >
            Unduh
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
  .text-right {
    text-align: right;
  }
  .button-image, .button-download {
    width: 100%;
  }
</style>

<script>
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import { createClient } from '~/plugins/contentful.js'

const client = createClient()
let thisActivity

export default {
  async asyncData ({ env, params }) {
    try {
      const thisPost = await client.getEntries({
        content_type: 'activity',
        'fields.slug': params.slug
      })

      if (thisPost) {
        thisActivity = thisPost.items[0]
      }
      return {
        activity: thisPost.items[0],
        content: documentToHtmlString(thisPost.items[0].fields.descriptionRichText)
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  head () {
    if (thisActivity) {
      const thisUrl = 'https://imerz.imavi.org/aktivitas/' + thisActivity.fields.slug
      return {
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'title', name: 'title', content: thisActivity.fields.title },
          { hid: 'description', name: 'description', content: thisActivity.fields.excerpt },
          { hid: 'og:title', name: 'og:title', content: thisActivity.fields.title },
          { hid: 'og:description', name: 'og:description', content: thisActivity.fields.excerpt },
          { hid: 'og:image', name: 'og:image', content: thisActivity.fields.thumbnail.fields.file.url },
          { hid: 'og:url', name: 'og:url', content: thisUrl }
        ]
      }
    }
  }
}
</script>
