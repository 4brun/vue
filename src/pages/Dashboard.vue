<template>
  <div>
    <main>
      <button @click="showForm = !showForm">ADD NEW COAST +</button>
      <div class="content">
        <PaymentsDisplay :list="newPaymentList" />
      </div>
    </main>

    <PaymentAdd v-if="showForm" :list="paymentsList" />

    <Pagination
      :count="countPage"
      :size="size"
      :list="paymentsList"
      @paginate="onChangePage"
    />
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import PaymentAdd from "../components/PaymentAdd.vue";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    PaymentAdd,
    Pagination,
  },
  data() {
    return {
      showForm: false,
      countPage: 1,
      size: 5,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    fetchData() {
      return [
        //   {
        //     date: "28.03.2020",
        //     category: "Food",
        //     value: 169,
        //   },
        //   {
        //     date: "24.03.2020",
        //     category: "Transport",
        //     value: 360,
        //   },
        //   {
        //     date: "24.03.2020",
        //     category: "Food",
        //     value: 532,
        //   },
      ];
    },
    onChangePage(page) {
      this.countPage = page;
    },
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentsList",
    }),
    newPaymentList() {
      const { size, countPage } = this;
      return this.paymentsList.slice(
        size * (countPage - 1),
        size * (countPage - 1) + size
      );
    },
  },
  async created() {
    // this.paymentsList = this.fetchData();
    await this.setPaymentsListData(this.fetchData());
    this.$store.dispatch("fetchData");
    if (this.$route.params?.page) {
      this.onChangePage(this.$route.params.page);
    }
  },
};
</script>

<style>
</style>