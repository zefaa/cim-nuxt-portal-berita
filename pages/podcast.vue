<template>
  <div class="page page-dokumen">
    <h1
      class="page-title"
    >
      Podcast Peziarah feat. Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI
    </h1>
    <section class="section-podcasts">
      <ul class="list-group">
        <li
          v-for="(post) in podcasts"
          :key="post.episode"
          class="list-group-item"
        >
          <div class="podcast-list-item">
            <div class="docTitle">
              <span class="episode">{{ post.episode }}</span>{{ post.title }}
            </div>
            <div class="excerpt">
              {{ post.description }}
            </div>
            <div class="text-right">
              <div class="button-group cell shrink">
                <v-btn
                  class="spotifyButton button button-primary"
                  rel="noreferrer"
                  :href="post.linkUrl.spotify"
                  target="_blank"
                  title="Spotify"
                  color="#1db954"
                >
                  Spotify
                </v-btn>
                <v-btn
                  class="anchorButton button button-primary"
                  rel="noreferrer"
                  :href="post.linkUrl.anchor"
                  target="_blank"
                  title="Anchor"
                  color="#9C0AFF"
                >
                  Anchor FM
                </v-btn>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="section-podcasts">
      <ul class="list-group">
        <li
          v-for="(post) in specialPodcasts"
          :key="post.order"
          class="list-group-item"
        >
          <div class="podcast-list-item">
            <div class="docTitle">
              <span class="episode">Special {{ post.order }}</span>{{ post.title }}
            </div>
            <div class="excerpt">
              {{ post.description }}
            </div>
            <div class="text-right">
              <div class="button-group cell shrink">
                <v-btn
                  class="spotifyButton button button-primary"
                  rel="noreferrer"
                  :href="post.linkUrl.spotify"
                  target="_blank"
                  title="Spotify"
                  color="#1db954"
                >
                  Spotify
                </v-btn>
                <v-btn
                  class="anchorButton button button-primary"
                  rel="noreferrer"
                  :href="post.linkUrl.anchor"
                  target="_blank"
                  title="Anchor"
                  color="#9C0AFF"
                >
                  Anchor FM
                </v-btn>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()
let CommonPodcasts
let SuperPodcasts
let waHref

// export default {
//   async asyncData ({ env, params }) {
//     try {
//       const pathUrl = 'https://imerz.imavi.org/podcast'
//       const Podcasts = await client.getEntry('7h8PFPxm0fimzWdejpvRdc')
//       const SpecialPodcasts = await client.getEntry('7zf0pCYg3MByIGPJu1xxBd')
//       if (Podcasts) {
//         CommonPodcasts = Podcasts.fields.jsonData
//         SuperPodcasts = SpecialPodcasts.fields.jsonData
//         waHref = 'https://wa.me/?text=%2A' + encodeURIComponent('Podcast Peziarah feat. Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI') + '%2A%0A_' + encodeURIComponent('Kumpulan Podcast Peziarah') + '_%0A%0A' + 'Baca%20lebih%20lanjut%20di%20website%20youcat%2Eid' + '%0A' + encodeURIComponent(pathUrl)
//       }
//       return {
//         waHref,
//         podcasts: CommonPodcasts,
//         specialPodcasts: SuperPodcasts
//       }
//     } catch (e) {
//       // eslint-disable-next-line
//       console.error(e)
//     }
//   },
//   head (params) {
//     if (CommonPodcasts) {
//       // eslint-disable-next-line
//       const thisUrl = 'https://imerz.imavi.org/podcast'
//       return {
//         meta: [
//           // hid is used as unique identifier. Do not use `vmid` for it as it will not work
//           { hid: 'title', name: 'title', content: 'Podcast Peziarah feat. Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI' },
//           { hid: 'description', name: 'description', content: 'Podcast Peziarah feat. Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI' },
//           { hid: 'og:title', name: 'og:title', content: 'Podcast Peziarah feat. Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI' },
//           { hid: 'og:description', name: 'og:description', content: 'Podcast Peziarah feat. Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI' },
//           { hid: 'og:url', name: 'og:url', content: thisUrl }
//         ]
//       }
//     }
//   }
// }
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    border-bottom: solid 1px #999;
  }
  .docTitle {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 1.1rem;
    font-weight: 700;
  }
  .episode {
    font-style: italic;
    font-weight: 700;
    font-size: 1.6rem;
    margin-right: 1rem;
  }
  .docItem {
    padding: 0.5rem 0;
    border-bottom: solid 1px #999;
  }
  .excerpt {
    font-style: italic;
    color: #999;
    margin-bottom: 0.5rem;
  }
  .spotifyButton, .anchorButton {
    color: #FFF;
    font-weight: 700;
  }
</style>
