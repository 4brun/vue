<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="8">
          <div class="text-h5 text-sm-h3 mb-8">My personal coast</div>
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on }">
              <v-btn dark color="teal" v-on="on" @click="dialog = !dialog"
                >ADD NEW COAST <v-icon>mdi-plus</v-icon></v-btn
              >
            </template>
            <v-card>
              <payment-add @close="dialog = false" />
            </v-card>
          </v-dialog>

          <PaymentsDisplay :list="newPaymentList" />
          <!-- <button @click="showAutorisation">Autorisation</button> -->
          <v-pagination class="my-4" v-model="countPage" :length="size" />
        </v-col>
        <v-col cols="4">
          <Doughnut />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import PaymentAdd from "../components/PaymentAdd.vue";
// import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";
import Doughnut from "../components/Doughnut.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    // Pagination,
    PaymentAdd,
    Doughnut,
  },
  data() {
    return {
      countPage: 1,
      size: 5,
      dialog: false,
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
    showAutorisation() {
      this.$modal.show("Autorisation", {
        header: "Autorisation",
      });
    },
    showModalAddWindow() {
      this.$modal.show("PaymentAdd", {
        header: "Add Payment Form",
      });
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