<template>
  <div class="relative text-gray-700">
    <section class="container mx-auto text-center mb-10 lg:mb-20">
      <h1
        class="text-orange pt-4 lg:pt-10 pb-4 font-light text-3xl lg:text-5xl"
      >
        Hướng dẫn sử dụng phần mềm i-NOTARY
      </h1>
      <p class="mb-6 font-light text-xl">
        Cập nhật tính năng mới & Hướng dẫn sử dụng
        <strong>phần mềm quản lý văn phòng công chứng</strong> i-NOTARY
      </p>
    </section>

    <section class="w-full lg:w-4/6 mx-auto mb-10 lg:mb-20 px-4">
      <nuxt-content :document="page" />
    </section>

    <section class="bg-gray-100">
      <div
        class="container mx-auto px-4 py-10 text-orange text-center text-xl italic"
      >
        <p>“Hơn 50 tính năng và vẫn tiếp tục cập nhật ...”</p>
      </div>
    </section>
    <Hotline />
  </div>
</template>

<script>
import Hotline from '~/components/Hotline.vue'
export default {
  components: {
    Hotline,
  },
  async asyncData({ $content }) {
    const page = await $content('user_guide').fetch()
    const data = {
      page,
    }

    return data
  },
  head() {
    return {
      title: 'Hướng dẫn sử dụng phần mềm công chứng | i-NOTARY User Guide',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Cập nhật tính năng mới & Hướng dẫn sử dụng phần mềm quản lý văn phòng công chứng i-NOTARY. Hơn 50 tính năng chuyên biệt và vẫn tiếp tục cập nhật.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Hướng dẫn sử dụng phần mềm công chứng | i-NOTARY User Guide',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Cập nhật tính năng mới & Hướng dẫn sử dụng phần mềm quản lý văn phòng công chứng i-NOTARY. Hơn 50 tính năng chuyên biệt và vẫn tiếp tục cập nhật.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.BASE_URL + '/img/logo.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.BASE_URL + '/huong-dan',
        },
      ],
    }
  },
}
</script>
