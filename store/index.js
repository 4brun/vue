import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      paymentsList: [],
      categoryList: []
   },
   mutations: {
      setPaymentsListData(state, payload) {
         // Vue.set(state.paymentsList, 0, payload)

         state.paymentsList = payload
      },
      addDataToPaymentsList(state, payload) {
         state.paymentsList.push(payload)
      },
      setCatigories(state, payload) {
         if (!Array.isArray(payload)) {
            payload = [payload]
         }
         state.categoryList.push(...payload)
      }
   },
   getters: {
      getPaymentsList: state => state.paymentsList,
      getFullPaymentValue: state => state.paymentsList.reduce((res, cur) => res + cur.value, 0),
      getCategoryList: state => state.categoryList
   },
   actions: {
      fetchData({ commit }) {
         return new Promise((resolve) => {

            setTimeout(() => {
               resolve([
                  {
                     date: '28.03.2020',
                     category: 'Food',
                     value: 169,
                  },
                  {
                     date: '24.03.2020',
                     category: 'Transport',
                     value: 360,
                  },
                  {
                     date: '24.03.2020',
                     category: 'Food',
                     value: 532,
                  },
               ])
            }, 1000)
         })
            .then(res => {
               commit('setPaymentsListData', res)
            })
      },
      fetchCategoryList({ commit }) {
         return new Promise((resolve) => {

            setTimeout(() => {
               resolve(['Food', 'Transport', 'Education', 'Entertainment'])
            }, 1000)
         })
            .then(res => {
               commit('setCatigories', res)
            })
      },
   }
})