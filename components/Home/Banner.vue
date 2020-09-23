<template>
  <section class="relative mb-10">
    <div class="container mx-auto">
      <div class="flex flex-wrap lg:py-8 px-4 items-center">
        <div class="px-3 lg:flex-1 md:flex-1 lg:max-w-lg md:max-w-sm">
          <h1 class="text-orange my-4 text-xl lg:text-3xl">
            #phanmemcongchung
          </h1>
          <h2 class="text-gray-600 my-4 text-xl uppercase font-light">
            Phần mềm quản lý Văn phòng CÔNG CHỨNG
          </h2>
          <p class="mt-4 mb-8 text-gray-700 font-semibold">
            Trải nghiệm tất cả tính năng của i-NOTARY để nâng cao hiệu suất làm
            việc.
          </p>
          <button
            class="w-full block px-6 py-4 focus:outline-none leading-none rounded-full text-white bg-orange mt-4 lg:mt-0 uppercase shadow hover:bg-red-600"
            @click="scrollToEl('contactForm')"
          >
            Liên hệ ngay
          </button>
        </div>
        <div v-if="!$device.isMobile" class="lg:flex-grow md:flex-grow">
          <div class="wpimg">
            <picture>
              <source srcset="/img/banner.webp" type="image/webp" />
              <source srcset="/img/banner.png" type="image/png" />
              <img src="/img/banner.png" alt="văn phòng công chứng" />
            </picture>
          </div>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 100 20" class="mbg">
      <defs>
        <linearGradient id="gradient1" x1="0" x2="0" y1="0" y2="1">
          <stop stop-color="#F3F5FA" offset="0%"></stop>
          <stop stop-color="white" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        d="M -10 10 q 60 -20 120 0 L 100 20 L 0 20"
        fill="url(#gradient1)"
      ></path>
    </svg>
  </section>
</template>

<style>
h1 {
  line-height: 3.5rem;
  font-weight: 600;
  font-size: 3em;
}
.wpimg {
  display: block;
  position: relative;
  width: 100%;
}
.wpimg::before {
  content: '';
  width: 100%;
  padding-top: 48.9%;
  position: relative;
  display: block;
}
.wpimg img {
  width: auto;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mbg {
  position: absolute;
  top: 70%;
  z-index: -1;
}
</style>

<script>
import scrollToEl from '~/mixins/scrollToEl.js'

export default {
  mixins: [scrollToEl],
}
</script>
