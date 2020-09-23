<template>
  <div class="relative text-gray-700">
    <section class="container mx-auto text-center mb-10 lg:mb-20">
      <h1
        class="text-orange pt-4 lg:pt-10 pb-4 font-light text-3xl lg:text-5xl"
      >
        Hỏi & Đáp
      </h1>
      <p class="mb-6 font-light text-xl">
        Những câu hỏi thường gặp khi sử dụng
        <strong>phần mềm quản lý văn phòng công chứng</strong> i-NOTARY
      </p>
    </section>

    <section class="w-full lg:w-4/6 mx-auto mb-10 lg:mb-20 font-light">
      <div
        v-for="(item, index) in faq"
        :key="index"
        class="mb-6 relative z-10 overflow-hidden"
      >
        <button
          :class="
            (item.active ? `active text-orange ` : `text-gray-700 `) +
            `bg-gray-100 accordion focus:outline-none hover:text-orange border-b text-left w-full p-6 relative z-10`
          "
          @click="setActiveItem(index)"
        >
          {{ item.title }}
        </button>
        <div
          :class="
            (item.active ? `show ` : ``) +
            `bg-gray-100 qa-content px-6 py-4 transition duration-300 ease-in-out`
          "
          v-html="item.content"
        ></div>
      </div>
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

<style>
.accordion::after {
  content: '\002B';
  font-weight: bold;
  float: right;
  margin-left: 5px;
}
.accordion.active::after {
  content: '\2212';
}
.qa-content {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  transform: translateY(-100%);
  z-index: -1;
}
.qa-content.show {
  visibility: visible;
  position: relative;
  transform: translateY(0);
  z-index: 1;
}
.qa-content p {
  margin: 10px 0;
  line-height: 1.75;
}
</style>

<script>
import Hotline from '~/components/Hotline.vue'
export default {
  components: {
    Hotline,
  },
  async asyncData({ $content }) {
    const faq = await $content('faq').fetch()
    const data = {
      faq: faq.data,
    }

    return data
  },
  methods: {
    setActiveItem(index) {
      const item = this.qa[index]
      item.active = item.active ? 0 : 1
    },
  },
  jsonld() {
    const items = this.faq.map((item, index) => ({
      '@type': 'Question',
      name: item.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.content,
      },
    }))
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items,
    }
  },
}
</script>
