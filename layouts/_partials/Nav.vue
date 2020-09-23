<template>
  <div class="container mx-auto">
    <nav class="flex items-center justify-between flex-wrap p-4">
      <div class="flex items-center w-2/5 md:w-1/6 lg:w-1/6">
        <nuxt-link to="/"><img src="/img/logo.png" alt="i-NOTARY" /></nuxt-link>
      </div>
      <div class="block lg:hidden md:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-orange border-orange hover:text-white hover:bg-orange focus:bg-orange focus:outline-none"
          @click="toggleMenu(true)"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :id="$device.isMobile ? `nav-mobile` : `nav-desktop`"
        :class="
          (showNav ? `show ` : ``) +
          (!$device.isMobile ? ` hidden ` : ``) +
          `w-full lg:flex lg:items-center lg:w-auto md:flex md:items-center md:w-auto lg:block md:block`
        "
      >
        <div class="text-sm md:text-xs lg:text-sm justify-end text-center">
          <nuxt-link
            v-if="$device.isMobile"
            to="/"
            class="block w-3/6 md:w-2/5 mx-auto py-2 my-2"
            ><img src="/img/logo.png" alt="i-NOTARY"
          /></nuxt-link>
          <nuxt-link
            v-for="(item, index) in menu"
            :key="index"
            class="block mt-4 lg:inline-block lg:mt-0 md:inline-block md:mt-0 text-gray-600 hover:text-orange md:mr-3 lg:mr-8 uppercase"
            :to="item.path"
            prefetch
            >{{ item.title }}</nuxt-link
          >
        </div>
        <button
          v-if="$device.isMobile"
          class="closeNav text-gray-600"
          aria-label="Close"
          @click="toggleMenu(false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="text-center">
        <nuxt-link
          class="demo inline-block text-sm md:text-xs lg:text-sm px-6 md:px-3 py-3 leading-none rounded-full text-white bg-orange uppercase"
          to="/lien-he"
          prefetch
          >Dùng thử</nuxt-link
        >
      </div>
    </nav>
  </div>
</template>

<style>
.navigation {
  position: sticky;
  display: flex;
  top: 0;
  background-color: white;
  transition: box-shadow 0.15s ease-in-out 0s;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  z-index: 1;
}
</style>

<script>
export default {
  props: {
    menu: { default: null, type: Array },
    toggleNav: { default: false, type: Boolean },
  },
  computed: {
    showNav: {
      get() {
        return this.toggleNav
      },
      set(val) {
        return val
      },
    },
  },
  methods: {
    toggleMenu(status) {
      this.$emit('toggleMenu', {
        showNav: status,
      })
      this.showNav = status
    },
  },
}
</script>
