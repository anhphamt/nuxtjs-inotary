export const state = () => ({
  menu: [
    {
      title: 'Tính năng i-NOTARY',
      path: '/tinh-nang-i-notary',
    },
    {
      title: 'Bảng giá',
      path: '/bang-gia',
    },
    {
      title: 'Hướng dẫn',
      path: '/huong-dan',
    },
    {
      title: 'Hỏi đáp',
      path: '/hoi-dap',
    },
    {
      title: 'Liên hệ',
      path: '/lien-he',
    },
  ],
})

export const mutations = {
  setData(state, menu) {
    state.menu = menu
  },
}

export const getters = {
  get(state) {
    return state.menu
  },
}
