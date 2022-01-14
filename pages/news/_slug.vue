<template>
  <v-container class="page page-news-detail">
    <h1 class="page-title">
      {{ pageData.title }}
    </h1>
    <div class="date text-right">
      {{ $moment(pageData.publishDate).format('D MMMM YYYY') }}
    </div>
    <div class="author text-right">
      oleh: {{ pageData.author }}
    </div>
    <div class="content">
      <v-img

        class="news-image"
        cover
      />
      <span v-html="$md.render(pageData.content)" />
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
export default {
  data: () => ({
    pageData: {},
    type: 'news'
  }),
  async fetch () {
    let payload = this.$nuxt.context.payload
    if (!payload) {
      payload = await this.$axios.$post('/.netlify/functions/imavi-detail', {
        type: this.type,
        code: this.$nuxt.context.params.slug
      })
    }
    this.pageData = payload
  }
}
</script>
