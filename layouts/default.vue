<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="navi-drawer navi-drawer-left"
    >
      <div
        class="inner"
      >
        <v-img
          :src="navidrawerleft"
          gradient="to top left, rgba(255, 209, 41,.5), rgba(192, 226, 75,.9)"
          height="100%"
          class="navi-image"
          position="fixed"
        />
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            :href="item.href"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      absolute
      :clipped-left="clipped"
      color="hsla(184, 100%, 52%, 1)"
      shrink-on-scroll
      :src="appbarbg"
      scroll-target="#main-layout-content"
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-if="isDocat"
          v-bind="props"
          gradient="to bottom left, rgba(192, 226, 75,.5), rgba(192, 226, 75,.9)"
          class="appbar-image"
        />
        <v-img
          v-else
          v-bind="props"
          gradient="to bottom left, rgba(192, 226, 75, .5), rgba(192, 226, 75,.9)"
          class="appbar-image"
        />
      </template>
      <v-row
        align="center"
      >
        <v-col
          cols="2"
          sm="2"
          md="1"
          lg="1"
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        </v-col>
        <v-col class="header-logo">
          <v-toolbar-title>
            <n-link
              to="/"
              class="app-title"
            >
              <!-- <img class="youcat-logo" src="~/assets/img/logo/logo-white.svg" alt="Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI"> -->
              <h1 class="desktop-title" style="line-height: 120px;">Centrum Ivan Merz</h1>
              <h1 class="mobile-title" style="line-height: 120px; font-size: 1.6rem;">Centrum Ivan Merz</h1>
            </n-link>
          </v-toolbar-title>
        </v-col>
        <!-- <v-col
          cols="2"
          sm="2"
          md="1"
          lg="1"
          class="text-right"
        >
          <v-btn
            icon
            @click.stop="rightDrawer = !rightDrawer"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col> -->
      </v-row>
    </v-app-bar>
    <v-main id="main-layout-content">
      <nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
      class="navi-drawer navi-drawer-right"
    >
      <div class="inner">
        <v-img
          :src="navidrawerright"
          gradient="to top left, rgba(250, 226, 75,.5), rgba(192, 226, 75,.9)"
          height="100vh"
          class="navi-image"
          position="top right"
        />
        <v-list>
          <v-list-item
            v-for="(item, i) in rightItems"
            :key="i"
            :to="item.to"
            :href="item.href"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-footer
      class="text-center"
      color="primary"
    >
      <!-- <v-btn
        id="platform-button"
        fixed
        dark
        fab
        bottom
        right
        color="primary"
        @click="showPlatform = !showPlatform"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn> -->
      <div class="footer-inner">
        <div class="footer-top">
          <nav
            class="footer-links"
            align="center"
            justify="center"
          >
            <nuxt-link
              class="cell shrink"
              to="/page/faq"
            >
              <span>FAQ</span>
            </nuxt-link>
            <nuxt-link
              class="cell shrink"
              to="/page/privacy"
            >
              <span>Kebijakan Kerahasiaan</span>
            </nuxt-link>
            <nuxt-link
              class="cell shrink"
              to="/page/tou"
            >
              <span>Syarat Penggunaan</span>
            </nuxt-link>
            <nuxt-link
              class="cell shrink"
              to="/page/contact"
            >
              <span>Hubungi</span>
            </nuxt-link>
            <nuxt-link
              class="cell shrink"
              to="/page/volunteer"
            >
              <span>Volunteer</span>
            </nuxt-link>
            <nuxt-link
              class="cell shrink"
              to="/page/donate"
            >
              <span>Donasi</span>
            </nuxt-link>
          </nav>
        </div>

        <div class="footer-bottom">
          <div class="copyright">
            &copy;2019-{{ new Date().getFullYear() }} <a href="https://www.imavi.org/">Institutum Theologicum Ioannis Mariae Vianney Surabayanum</a> <br>
            All Rights Reserved.
          </div>
        </div>
      </div>
    </v-footer>
    <transition
      name="fade"
      origin="center center"
    >
      <v-container
        v-if="showPlatform"
        id="menu-platform-container"
      >
        <div class="platform-wrapper">
          <v-sheet
            id="youcat-platform"
            class="menu-list youcat-platform"
            elevation="2"
          >
            <v-container>
              <v-row
                dense
                align="end"
                class="platform-header"
              >
                <v-col class="platform-logo">
                  <h3 class="block-title">
                    PLATFORM
                  </h3>
                  <img class="youcat-logo" src="~/assets/img/logo/logo.svg" alt="Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI">
                </v-col>
                <v-col class="stickman">
                  <img :src="platformimg" alt="sing">
                </v-col>
              </v-row>
              <v-row
                align="center"
                justify="space-around"
              >
                <v-col
                  v-for="(category, index) in platform"
                  :key="index"
                  cols="12"
                  class="platform-category"
                >
                  <div class="category-title">
                    {{ category.title }}
                  </div>
                  <v-row dense>
                    <v-col
                      v-for="(item, i) in category.children"
                      :key="i"
                      cols="4"
                      router
                      exact
                      class="platform-menu-item"
                    >
                      <n-link
                        v-if="item.to"
                        :to="item.to"
                        color="primary"
                        @click="showPlatform = !showPlatform"
                      >
                        <div class="menu-icon">
                          <v-icon>{{ item.icon }}</v-icon>
                        </div>
                        <div class="menu-title">
                          {{ item.title }}
                        </div>
                      </n-link>
                      <a
                        v-else
                        :href="item.href"
                        target="_blank"
                        rel="noreferrer"
                        @click="showPlatform = !showPlatform"
                      >
                        <div class="menu-icon">
                          <v-icon>{{ item.icon }}</v-icon>
                        </div>
                        <div class="menu-title">
                          {{ item.title }}
                        </div>
                      </a>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <div class="platform-footer">
                <v-btn
                  @click="showPlatform = !showPlatform"
                >
                  <span>Tutup</span>
                  <v-icon>mdi-close-circle</v-icon>
                </v-btn>
              </div>
            </v-container>
          </v-sheet>
        </div>
      </v-container>
    </transition>
  </v-app>
</template>
<style lang="scss">
  $small-width: 40em;
  $medium-width: 64em;
  $large-width: 90em;

  @mixin phone {
    @media (max-width: #{$small-width}) {
      @content;
    }
  }

  @mixin tablet-down {
    @media (max-width: #{$medium-width}) {
      @content;
    }
  }

  @mixin tablet {
    @media (min-width: #{$small-width + 0.063em }) and (max-width: #{$medium-width}) {
      @content;
    }
  }

  @mixin tablet-up {
    @media (min-width: #{$small-width + 0.063em }) {
      @content;
    }
  }

  @mixin desktop {
    @media (min-width: #{$medium-width + 0.063em}) {
      @content;
    }
  }

  body, html, .v-application {
    font-family: 'Fira Sans', "Roboto", sans-serif;
  }
  body.fullscreen, .page-fullscreen {
    padding: 0;
    > section > .section-inner {
      padding: 1rem;
      max-width: 960px;
      margin: auto;
      width: 90%;
      @include phone {
        width: 99%;
      }
    }
  }
  a {
    text-decoration: none;
  }
  .bg-yellow {
    background-color: hsla(74, 72%, 59%, 1);
  }
  .appbar-image {
    .v-image__image--cover {
      background-position: 20% center !important;
    }
  }
  .header-logo {
    padding: 0;
    height: 120px;
    position: relative;
    .youcat-logo {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
    a {
      display: block;
    }
    img {
      max-height: 44px;
      width: auto;
    }
  }
  .theme--light.v-navigation-drawer.navi-drawer {
    // background-color: #f5ce3e;
    background-color: hsla(74, 72%, 59%, 1);
    .inner {
      position: relative;
      min-height: 100%;
      height: auto;
      .navi-image {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    a {
      font-weight: 700;
      border-bottom: solid 1px #f5ce3e;
    }
  }
  .page {
    padding: 1rem;
    @include phone {
      // padding: 0;
    }
  }
  .page-inner {
    width: 100%;
    max-width: 960px;
    margin: auto;
  }
  .theme--light.v-app-bar.v-toolbar.v-sheet {
    background: #f5ce3e;
  }

  .theme--light.v-btn.v-btn--icon {
    color: #000;
  }
  .v-application .app-title {
    font-weight: 700;
    font-size: 1.2rem;
    color: #000;
    font-weight: 700;
  }
  footer {
    text-align: center;
    // background: #f5ce3e;
    a {
      color: #000 !important;
      font-weight: 700;
    }
  }
  .footer-inner {
    padding: 1rem;
    text-align: center;
    display: block;
    width: 100%;
  }
  .youcatorg-logo {
    svg {
      max-width: 105px;
      position: relative;
      top: 2px;
    }
  }
  .logo-youcat {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    margin: auto;
    max-width: 240px;
    img {
      width: 100%;
    }
  }
  a {
    text-decoration: none;
  }
  // .theme--light.v-app-bar.v-toolbar.v-sheet {
  //   background-color: #f5ce3e;
  //   color: #000;
  //   a {
  //     color: #000;
  //   }
  // }

  // .theme--light.v-footer {
  //   background-color: #f5ce3e;
  // }
  .footer-top {
    a {
      // margin-right: 1rem;
      color: #000;
      font-style: italic;
      line-height: 2;
      padding: 0.5rem;
    }
  }
  .text-right {
    text-align: right;
  }
  .text-center {
    text-align: center;
  }
  .navigation__logo, .youcatorg-logo {
    fill: #fff;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  .page-title {
    margin-top: 1rem;
    margin-bottom: 1rem;;
  }
  .button-primary, .v-btn.primary {
    color: #000 !important;
    font-weight: 700;
  }
  ol {
    ol {
      list-style-type: lower-alpha;
    }
  }
  .section-grey {
    background-color: #eee;
    padding: 1rem;
    .read-more {
      a {
        color: #000;
      }
    }
  }
  .section-yellow {
    background-color: hsla(52, 100%, 50%, 0.3);
    padding: 1rem;
    .read-more {
      a {
        color: #000;
      }
    }
  }
  .page-fullscreen {
    padding: 0;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  #menu-platform-container {
    position: fixed;
    left: 0;
    top: 0;
    // transform: translate(-50%, -50%);
    max-width: none;
    width: 100%;
    height: 100%;
    // max-width: 640px;
    margin: auto;
    background-color: transparentize(#000, 0.4);
    z-index: 8;
    padding: 0;
  }
  .plaform-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .youcat-platform {
    width: 80%;
    max-width: 720px;
    margin: 30px auto;
    z-index: 1;
    > .container {
      padding-top: 0;
    }
    @include phone {
      position: absolute;
      bottom: 15px;
      right: 45px;
      width: 85%;
    }
  }
  #platform-button {
    z-index: 99;
  }
  .platform-header {
    padding-top: 0;
    img {
      width: 120px;
    }

    h3 {
      text-align: left;
      color: #f5ce3e;
      letter-spacing: 7px;
      font-size: 0.9rem;
    }
    .platform-logo {
      padding-left: 1rem;
    }
    .stickman {
      text-align: center;
      img {
        position: relative;
        bottom: -30px;
      }
    }
  }
  .platform-footer {
    width: 100%;
    display: block;
    padding: 2rem;
    text-align: right;
    @include phone {
      display: none;
    }
  }
  .category-title {
    font-size: 1rem;
    font-weight: 700;
    // color: #f5ce3e;
    letter-spacing: 2px;
  }
  .platform-menu-item {
    padding: 1rem;
    text-align: center;
    @include phone {
      padding: 0.25rem;
      // text-align: left;
    }
    a {
      color: #000 !important;
      background-color: hsla(184, 100%, 52%, 1);
      display: block;
      padding: 1rem;
      @include phone {
        padding: 0.5rem;
        .menu-title {
          font-size: 0.6rem;
          // color: #000;
        }
        .menu-icon {
          display: none;
          vertical-align: middle;
          i {
            font-size: 14px;
          }
        }
        i, svg {
          width: 30px;
          vertical-align: middle;
        }
      }
      i, svg {
        color: #000;
      }
    }
  }
  .desktop-title {
    display: block;
    @include phone {
      display: none;
    }
  }
  .mobile-title {
    display: none;
    @include phone {
      display: block;
    }
  }

</style>
<script>
export default {
  data () {
    return {
      themeType: true,
      showPlatform: false,
      platformimg: require('@/assets/img/sing.png'),
      appbarbg: require('@/assets/img/appbar.jpg'),
      navidrawerleft: require('@/assets/img/ndl.jpg'),
      navidrawerright: require('@/assets/img/ndr.jpg'),
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          platform: false,
          title: 'Beranda',
          to: '/'
        },
        {
          icon: 'mdi-book-open',
          platform: false,
          title: 'Tentang',
          to: '/page/about'
        },
        // {
        //   icon: 'mdi-book-open',
        //   platform: true,
        //   title: 'Buku',
        //   to: '/book'
        // },
        // {
        //   icon: 'mdi-book-open',
        //   platform: true,
        //   title: 'Program',
        //   to: '/program'
        // },
        {
          icon: 'mdi-book-open',
          platform: true,
          title: 'Artikel',
          to: '/articles'
        },
        {
          icon: 'mdi-book-open',
          platform: true,
          title: 'Berita',
          to: '/news'
        },
        {
          icon: 'mdi-book-open',
          platform: true,
          title: 'Event',
          to: '/event'
        }
        // {
        //   icon: 'mdi-book-open',
        //   platform: true,
        //   title: 'Jurnal',
        //   to: '/jurnal'
        // },
        // {
        //   icon: 'mdi-charity',
        //   platform: true,
        //   title: 'Dokumen',
        //   to: '/document'
        // },
        // {
        //   icon: 'mdi-message-text',
        //   platform: true,
        //   title: 'Podcast',
        //   to: '/podcast'
        // },
        // {
        //   icon: 'mdi-message-text',
        //   platform: true,
        //   title: 'Newsletter',
        //   to: '/page/newsletter'
        // },
        // {
        //   icon: 'mdi-message-text',
        //   platform: true,
        //   title: 'Lakukan',
        //   to: '/lakukan'
        // },
        // {
        //   icon: 'mdi-message-text',
        //   platform: true,
        //   title: 'Aktivitas',
        //   to: '/aktivitas'
        // },
        // {
        //   icon: 'mdi-message-text',
        //   platform: true,
        //   title: 'Doa-doa',
        //   to: '/doa'
        // },
        // {
        //   icon: 'mdi-message-text',
        //   platform: true,
        //   title: 'Musik & Lagu',
        //   to: '/musik'
        // },
        // {
        //   icon: 'mdi-message-text',
        //   platform: true,
        //   title: 'Puisi',
        //   to: '/puisi'
        // },
        // {
        //   icon: 'mdi-message-text',
        //   platform: true,
        //   title: 'Shop',
        //   href: 'https://www.tokopedia.com/imerz/'
        // }
      ],
      rightItems: [
        {
          icon: 'mdi-home',
          title: 'Beranda',
          to: '/'
        },
        // {
        //   icon: 'mdi-home',
        //   title: 'SPESIAL COVID-19',
        //   to: '/asa'
        // },
        {
          icon: 'mdi-book-open',
          title: 'Baca',
          to: '/baca'
        },
        {
          icon: 'mdi-charity',
          title: 'Lakukan',
          to: '/aksi'
        },
        {
          icon: 'mdi-message-text',
          title: 'Doa-doa',
          to: '/doa'
        },
        {
          icon: 'mdi-message-text',
          title: 'Musik-lagu',
          to: '/musik'
        },
        {
          icon: 'mdi-message-text',
          title: 'Puisi',
          to: '/puisi'
        }
      ],
      platform: [
        {
          title: 'Pelajari/Know',
          children: [
            {
              icon: 'mdi-file-document-edit',
              title: 'articles',
              to: '/articles'
            },
            {
              icon: 'mdi-notebook',
              title: 'Jurnal',
              to: '/jurnal'
            },
            {
              icon: 'mdi-newspaper-variant',
              title: 'Berita',
              to: '/news'
            },
            {
              icon: 'mdi-book-open-page-variant',
              title: 'Buku',
              to: '/book'
            },
            {
              icon: 'mdi-podcast',
              title: 'Podcast',
              to: '/podcast'
            },
            {
              icon: 'mdi-file-document',
              title: 'Dokumen',
              to: '/document'
            }
          ]
        },
        {
          title: 'Jumpai/Share-Meet',
          children: [
            {
              icon: 'mdi-instagram',
              title: 'Instagram',
              href: 'https://www.instagram.com/youcatid'
            },
            {
              icon: 'mdi-facebook',
              title: 'Facebook',
              href: 'https://www.facebook.com/youcatid'
            },
            {
              icon: 'mdi-whatsapp',
              title: 'Forum',
              to: '/page/whatsapp-group'
            }
          ]
        },
        {
          title: 'Lakukan/Express',
          children: [
            {
              icon: 'mdi-message-text',
              title: 'Grup Studi',
              to: '/grup-studi'
            },
            {
              icon: 'mdi-clock',
              title: 'Event',
              to: '/event'
            },
            {
              icon: 'mdi-home',
              title: 'Aktivitas',
              to: '/aktivitas'
            },
            {
              icon: 'mdi-chat',
              title: 'Doa-doa',
              to: '/doa'
            },
            {
              icon: 'mdi-music',
              title: 'Musik-lagu',
              to: '/musik'
            },
            {
              icon: 'mdi-script-text',
              title: 'Puisi-puisi',
              to: '/puisi'
            },
            {
              icon: 'mdi-charity',
              title: 'Lakukan',
              to: '/lakukan'
            },
            {
              icon: 'mdi-cart',
              title: 'Shop',
              href: 'https://www.tokopedia.com/youcat/'
            }
          ]
        },
        {
          title: 'Kenali',
          children: [
            {
              icon: 'mdi-home',
              title: 'Tentang',
              to: '/page/about'
            },
            {
              icon: 'mdi-badge-account',
              title: 'Personnel',
              to: '/team'
            },
            {
              icon: 'mdi-charity',
              title: 'Donasi',
              to: '/page/donasi'
            }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Centrum Ivan Merz - Kursus Teologi Katolik Keuskupan Surabaya - IMAVI'
    }
  },
  computed: {
    isDocat () {
      if (this.$vuetify.theme.currentTheme.primary === '#65b4e4') {
        // eslint-disable-next-line no-console
        // console.log(this.$vuetify.theme.currentTheme.primary)
        return true
      } else {
        return false
      }
    },
    isFullscreen () {
      if (this.$vuetify.theme.fullscreen) {
      // eslint-disable-next-line no-console
        // console.log(this.$vuetify.theme.fullscreen)
        return this.$vuetify.theme.fullscreen
      } else {
        return false
      }
    }
  },
  mounted () {
  }
}
</script>
