<template>
  <v-container class="page page-song-details">
    <h1 class="page-title">
      {{ song.fields.title }}
    </h1>
    <div class="lyric-wrapper">
      <div class="lyric" v-html="$md.render(song.fields.lyricMd)" />
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

const client = createClient()
let thisSong

// thisContent = documentToHtmlString( post.fields.content )

export default {
  async asyncData ({ env, params }) {
    try {
      const getSong = await client.getEntries({
        content_type: 'song',
        'fields.slug': params.slug
      })

      if (getSong) {
        thisSong = getSong.items[0]
      }
      return {
        song: getSong.items[0],
        description: documentToHtmlString(getSong.items[0].fields.description)
      }
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  head () {
    if (thisSong) {
      const songUrl = 'https://imerz.imavi.org/musik/' + thisSong.fields.slug
      return {
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'og:title', name: 'og:title', content: thisSong.fields.title },
          { hid: 'title', name: 'title', content: thisSong.fields.title },
          { hid: 'description', name: 'description', content: thisSong.fields.excerpt },
          { hid: 'og:description', name: 'og:description', content: thisSong.fields.excerpt },
          { hid: 'og:image', name: 'og:image', content: thisSong.fields.thumbnail.fields.file.url },
          { hid: 'og:url', name: 'og:url', content: songUrl }
        ]
      }
    }
  }
}
</script>
