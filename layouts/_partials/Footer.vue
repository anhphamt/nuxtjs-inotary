<template>
  <footer class="bg-gray-100 py-10">
    <div class="container mx-auto">
      <div class="divide-y divide-gray-400">
        <div
          class="grid grid-cols-2 lg:grid-cols-5 divide-x divide-gray-400 py-6"
        >
          <div
            v-for="(item, index) in menu"
            :key="index"
            class="text-center py-2"
          >
            <nuxt-link
              class="text-gray-600 hover:text-orange font-light"
              :to="item.path"
              prefetch
              >{{ item.title }}</nuxt-link
            >
          </div>
        </div>
        <div class="footpage py-6 text-gray-600 font-light text-center">
          <p>
            © 2020 - Bản quyền thuộc về Công ty TNHH Phát Triển Công Nghệ HZ –
            <a class="text-orange" href="https://hz.com.vn">Hz.com.vn</a>
          </p>
          <p>
            <nuxt-link
              class="hover:text-orange"
              to="/chinh-sach-va-dieu-khoan-su-dung"
              prefetch
              >Chính Sách & Điều Khoản Sử Dụng</nuxt-link
            >|
            <a
              href="https://www.facebook.com/Phanmemcongchung.vn"
              target="_blank"
              rel="nofollow"
              >Facebook</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    menu: { default: null, type: Array },
  },
}
</script>
