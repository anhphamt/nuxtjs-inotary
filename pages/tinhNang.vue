<template>
  <div class="relative text-gray-700">
    <section class="container mx-auto text-center mb-10 lg:mb-20">
      <h1
        class="text-orange pt-4 lg:pt-10 pb-4 font-light text-3xl lg:text-5xl"
      >
        Tính năng phần mềm
      </h1>
      <p class="mb-6 font-light text-xl">
        Khám phá hơn 50 tính năng hữu ích của
        <strong>phần mềm quản lý văn phòng công chứng</strong> i-NOTARY
      </p>
      <nuxt-link
        class="px-10 py-4 focus:outline-none leading-none rounded-full text-white bg-orange mt-4 lg:mt-0 uppercase shadow hover:bg-red-600"
        to="/lien-he"
        prefetch
        >Dùng thử miễn phí</nuxt-link
      >
    </section>

    <section
      class="w-full lg:w-4/5 mx-auto grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10 lg:mb-20"
    >
      <div class="px-4">
        <h3 class="text-orange">Tăng tốc</h3>
        <p class="leading-snug text-gray-600 font-light">
          Tăng tốc độ làm việc của toàn bộ phòng ban theo quy trình định sẵn.
        </p>
      </div>
      <div class="px-4">
        <h3 class="text-orange">Kiểm soát</h3>
        <p class="leading-snug text-gray-600 font-light">
          Kiểm soát dữ liệu hồ sơ. Bảo đảm dữ liệu luôn được đồng bộ.
        </p>
      </div>
      <div class="px-4">
        <h3 class="text-orange">Tùy chỉnh</h3>
        <p class="leading-snug text-gray-600 font-light">
          Phần mềm có thể được tùy chỉnh theo nhu cầu sử dụng của từng văn phòng
          công chứng
        </p>
      </div>
    </section>

    <section class="bg-gray-100">
      <div class="container mx-auto lg:px-4 py-10 lg:py-20 text-center">
        <h2 class="text-orange text-3xl lg:text-5xl mb-1 font-light mb-6">
          Tính năng nổi bật
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div
            v-for="(item, index) in feature"
            :key="index"
            class="lg:p-4 hover:text-orange"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-10 text-gray mx-auto"
            >
              <path v-if="item.iconex" :d="item.iconex" />
              <path fill-rule="evenodd" :d="item.icon" clip-rule="evenodd" />
            </svg>
            <h5 class="py-2 lg:py-4 text-lg">{{ item.title }}</h5>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white font-light">
      <div class="container mx-auto lg:px-4 py-10 lg:py-20 text-center">
        <h2 class="text-orange px-4 lg:px-0 text-2xl lg:text-5xl mb-1 mb-6">
          i–NOTARY quản lý tất cả chức năng của Phòng Công Chứng
        </h2>
        <p class="italic mb-10 lg:mb-20 px-4 lg:px-0">
          “Chúng tôi giúp quá trình làm việc của Văn Phòng hiệu quả hơn.”
        </p>
        <div class="divide-y divide-gray-400">
          <div
            v-for="(feature, index) in featureGroup"
            :key="index"
            class="py-2 inline-flex w-full bg-white odd:bg-gray-100"
          >
            <div
              class="flex-initial px-4 lg:px-6 w-2/6 lg:w-1/4 text-left py-2 text-orange"
            >
              {{ index }}
            </div>
            <div class="flex-initial px-4 w-4/6 lg:w-3/4 inline-flex flex-wrap">
              <div
                v-for="(item, id) in feature"
                :key="id"
                class="flex-initial w-full md:w-3/6 lg:w-2/6 text-gray-700 text-left py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="inline-block w-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
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

<script>
import Hotline from '~/components/Hotline.vue'
export default {
  components: {
    Hotline,
  },
  async asyncData({ $content }) {
    const feature = await $content('feature').fetch()
    const featureGroup = await $content('feature_group').fetch()
    const data = {
      feature: feature.data,
      featureGroup: featureGroup.data,
    }

    return data
  },
  mounted() {},
}
</script>
