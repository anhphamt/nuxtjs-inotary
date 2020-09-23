<template>
  <div class="relative text-gray-700">
    <section class="container mx-auto text-center mb-10 lg:mb-20">
      <h1
        class="text-orange pt-4 lg:pt-10 pb-4 font-light text-3xl lg:text-5xl"
      >
        Liên hệ với chúng tôi
      </h1>
      <p class="mb-6 font-light text-xl">
        Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất
      </p>
    </section>

    <section
      class="w-full lg:w-3/6 mx-auto mb-10 lg:mb-20 font-light bg-gray-100 rounded px-4 py-10 lg:px-10"
    >
      <p>
        Liên hệ <strong>Dùng thử miễn phí</strong> phần mềm quản lý văn phòng
        công chứng i-NOTARY qua:
      </p>
      <ul class="m-4 font-medium">
        <li class="py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="inline-block w-4 mr-2"
          >
            <path
              d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
            />
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
          Hotline: 094 584 3205 (Ms. Phương)
        </li>
        <li class="py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="inline-block w-4 mr-2"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Email: phanmemcongchung.vn@gmail.com
        </li>
      </ul>
      <p>
        Hoặc bạn còn bất cứ thắc mắc nào về phần mềm, đừng ngần ngại liên hệ
        ngay với chúng tôi ngay hôm nay để được hồi đáp trong thời gian sớm
        nhất.
      </p>
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
