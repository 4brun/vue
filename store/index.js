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
         state.paymentsList = [...payload, ...state.paymentsList]
      },
      addDataToPaymentsList(state, payload) {
         state.paymentsList.push(payload)
      },
      setCatigories(state, payload) {
         if (!Array.isArray(payload)) {
            payload = [payload]
         }
         state.categoryList.push(...payload)
      },
      editPayment(state, payload) {
         state.paymentsList = state.paymentsList.map(o => {
            if (o.id === payload.id) {
               return payload
            }
            return o;
         })
      },
      deletePayment(state, id) {
         state.paymentsList = state.paymentsList.filter(x => x.id !== id)
         console.log(id);
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
                     id: 1
                  },
                  {
                     date: '24.03.2020',
                     category: 'Transport',
                     value: 360,
                     id: 2
                  },
                  {
                     date: '24.03.2020',
                     category: 'Food',
                     value: 532,
                     id: 3
                  },
               ])
            }, 0)
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