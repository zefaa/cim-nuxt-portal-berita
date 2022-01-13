<template>
  <div class="page page-action-detail">
    <h1 class="page-title">
      {{ lifeAction.fields.title }}
    </h1>
    <div class="description">
      <span v-html="content" />
    </div>
    <div class="resources">
      <div>
        <span>YOUCAT: </span>
        <span
          v-for="youcat in lifeAction.fields.youcatNumber"
          :key="youcat"
          class="youcat-number"
        >
          {{ youcat }}
        </span>
      </div>
      <div>
        <span>DOCAT: </span>
        <span
          v-for="docat in lifeAction.fields.docatNumber"
          :key="docat"
          class="docat-number"
        >
          {{ docat }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .text-right {
    text-align: right;
  }
  .button-image, .button-download {
    width: 100%;
    // max-width: 120px;
  }
  .youcat-number {
    &::after {
      content: ',';
    }
    &:last-child {
      &::after {
        content: '';
      }
    }
  }
</style>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
let thislifeAction

export default {
  async asyncData ({ env, params }) {
    try {
      const thisPost = await client.getEntries({
        content_type: 'lifeAction',
        'fields.slug': params.slug
      })

      if (thisPost) {
        thislifeAction = thisPost.items[0]
      }
      return {
        lifeAction: thisPost.items[0],
        content: documentToHtmlString(thisPost.items[0].fields.content)
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  head () {
    if (thislifeAction) {
      const thisUrl = 'https://imerz.imavi.org/lakukan/' + thislifeAction.fields.slug
      return {
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'title', name: 'title', content: thislifeAction.fields.title },
          { hid: 'description', name: 'description', content: thislifeAction.fields.excerpt },
          { hid: 'og:title', name: 'og:title', content: thislifeAction.fields.title },
          { hid: 'og:description', name: 'og:description', content: thislifeAction.fields.excerpt },
          { hid: 'og:image', name: 'og:image', content: thislifeAction.fields.thumbnail.fields.file.url },
          { hid: 'og:url', name: 'og:url', content: thisUrl }
        ]
      }
    }
  }
}
</script>
