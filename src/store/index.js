import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: [
      {
        id: 1,
        title: 'Majalah Ekonomi',
        location: 'Jakarta Pusat',
        seri: 'Product ID-AD-0004',
        price: 9620,
        total: 200,
        time: '02:00',
        vertified: 1,
        status: 1,
        agen: 1,
        wishlist: 1
      },
      {
        id: 2,
        title: 'Komik',
        location: 'Bekasi',
        seri: 'Product ID-B-0004',
        price: 4620,
        total: 150,
        time: '12:00',
        vertified: 0,
        status: 0,
        agen: 0,
        wishlist: 0
      }
    ],
    inWish: []
  },
  getters: {
    product: state => state.product,
    inWish: state => state.inWish
  },
  mutations: {
    ADD_TO_WISH (state, id) {
      state.inWish.push(id)
    }
  },
  actions: {
    addToWish (context, id) {
      context.commit('ADD_TO_WISH', id)
    }
  },
  modules: {
  }
})
