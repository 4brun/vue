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

         state.paymentsList = [...payload, ...state.paymentsList]
      },
      addDataToPaymentsList(state, payload) {
         state.paymentsList.push(payload)
      },
      setCatigories(state, payload) {
         state.categoryList = [...state.categoryList, ...payload]
      },
      editPayment(state, payload) {
         //const itemId = state.paymentsList.find(item => item.id === payload.id).id - 1 // находим id - 1 -- это индекс в массиве
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
                     category: 'Education',
                     value: 532,
                     id: 3
                  },
                  {
                     date: '28.03.2020',
                     category: 'Food',
                     value: 169,
                     id: 4
                  },
                  {
                     date: '24.03.2020',
                     category: 'Transport',
                     value: 360,
                     id: 5
                  },
                  {
                     date: '24.03.2020',
                     category: 'Other',
                     value: 532,
                     id: 6
                  },
                  {
                     date: '28.03.2020',
                     category: 'Education',
                     value: 169,
                     id: 7
                  },
                  {
                     date: '24.03.2020',
                     category: 'Education',
                     value: 360,
                     id: 8
                  },
                  {
                     date: '24.03.2020',
                     category: 'Food',
                     value: 532,
                     id: 9
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
               resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Other'])
            }, 1000)
         })
            .then(res => {
               commit('setCatigories', res)
            })
      },
   }
})