<template>
  <div class="relative">
    <Banner @scrollToEl="scrollToEl" />
    <TopFeature />
    <Feature />
    <ContactForm ref="contactForm" />
    <Slogan />
    <Hotline />
  </div>
</template>

<script>
import Banner from '~/components/Home/Banner.vue'
import TopFeature from '~/components/Home/TopFeature.vue'
import Feature from '~/components/Home/Feature.vue'
import ContactForm from '~/components/Home/ContactForm.vue'
import Slogan from '~/components/Home/Slogan.vue'
import Hotline from '~/components/Hotline.vue'

export default {
  components: {
    Banner,
    TopFeature,
    Feature,
    ContactForm,
    Slogan,
    Hotline,
  },
  mounted() {},
  methods: {
    scrollToEl(event) {
      const container = this.$refs[event.el]
      if (typeof container === 'undefined') return false
      const contactForm = container.$el.querySelector('#contactForm')
      contactForm.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: 'cms-index-index mobile cms-home',
      },
      title: 'Phần mềm quản lý văn phòng công chứng i-NOTARY',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'i – NOTARY được thiết kế dành riêng cho từng Văn phòng công chứng với những tính năng tùy chỉnh. Soạn Thảo Hồ Sơ, Tính Phí & Thù lao, Thống Kê & Báo Cáo và hơn 50 tính năng khác.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Phần mềm quản lý văn phòng công chứng i-NOTARY',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'i – NOTARY được thiết kế dành riêng cho từng Văn phòng công chứng với những tính năng tùy chỉnh. Soạn Thảo Hồ Sơ, Tính Phí & Thù lao, Thống Kê & Báo Cáo và hơn 50 tính năng khác.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.BASE_URL + '/img/banner.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.BASE_URL,
        },
      ],
      noscript: [
        {
          innerHTML:
            'Có lỗi xảy ra. Vui lòng cài đặt javascript để tiếp tục sử dụng !',
          body: true,
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: this.$config.BASE_URL,
      logo: this.$config.BASE_URL + '/img/logo.png',
    }
  },
}
</script>
