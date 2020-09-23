<template>
  <div class="relative text-gray-700">
    <section class="container mx-auto text-center mb-10 lg:mb-20">
      <h1
        class="text-orange pt-4 lg:pt-10 pb-4 font-light text-3xl lg:text-5xl"
      >
        Chính Sách & Điều Khoản Sử Dụng
      </h1>
      <p class="mb-6 font-light text-xl">
        Phần mềm quản lý văn phòng công chứng i-NOTARY
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
    const page = await $content('privacy').fetch()
    const data = {
      page,
    }

    return data
  },
  mounted() {},
}
</script>
