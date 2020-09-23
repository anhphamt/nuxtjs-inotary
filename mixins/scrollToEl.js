export default {
  methods: {
    scrollToEl(block) {
      this.$emit('scrollToEl', {
        el: block,
      })
    },
  },
}
