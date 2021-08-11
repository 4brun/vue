<template>
  <div id="app">
    <div>
      <header>
        <div class="title">My personal costs</div>
      </header>
      <main>
        <button @click="showForm = !showForm">ADD NEW COAST +</button>
        <div class="content">
          <PaymentsDisplay :list="getPaymentsList" />
        </div>
      </main>
      <PaymentAdd v-if="showForm" :list="paymentsList" />
      <Pagination :list="paymentsList" />
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import PaymentAdd from "./components/PaymentAdd.vue";
import Pagination from "./components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    PaymentAdd,
    Pagination,
  },
  data() {
    return {
      paymentsList: [],
      showForm: false,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
  },
  created() {
    // this.paymentsList = this.fetchData();
    this.setPaymentsListData(this.fetchData());
    this.$store.dispatch("fetchData");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-size: 30px;
  font-weight: 600;
}
</style>
