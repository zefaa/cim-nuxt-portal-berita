<template>
  <v-container class="page page-event-detail">
    <h1 class="page-title">
      {{ pageData.title }}
    </h1>
    <div class="date text-right">
      {{ $moment(pageData.date).format('D MMMM YYYY') }}
    </div>
    <div class="content">
      <v-img
        
        class="event-image"
        cover
      />
      <span v-html="$md.render(pageData.body)" />
    </div>
    <v-row
      dense
      align="center"
      justify="center"
    >
      <v-col
        class="purchase-button text-right"
      >
        <v-btn
          :href="pageData.registerUrl"
          color="primary"
          large
          ripple
          target="_blank"
          rel="noreferrer"
        >
          Daftar
          <v-icon>mdi-hand-pointing-up</v-icon>
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
  .event-image {
    margin: 1rem auto;
    // margin-right: 1rem;
    // float: left;
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
export default {
  data: () => ({
    pageData: {},
    type: 'events'
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
