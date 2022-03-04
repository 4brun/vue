<template>
  <v-container>
    <h2 class="mb-4">My personal coasts</h2>
    <v-row>
      <v-col cols="8">
        <main>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn color="teal" v-on="on" dark>
                ADD NEW COAST
                <v-icon right>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <payment-form @close="dialog = false" v-bind:header="header"/>
            </v-card>
          </v-dialog>
          <PaymentsDisplay :list="newPaymentList" />
        </main>

        <Pagination
          :size="size"
          :list="paymentsList"
          @paginate="onChangePage"
        />
      </v-col>
      <v-col cols="4"> chart </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters } from "vuex";
import PaymentForm from "../components/PaymentForm.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Pagination,
    PaymentForm,
  },
  data() {
    return {
      countPage: 1,
      size: 5,
      dialog: false,
      header: "Add Payment Form",
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),

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
    this.$store.dispatch("fetchData");
    await this.setPaymentsListData();
    if (this.$route.params?.page) {
      this.onChangePage(this.$route.params.page);
    }
  },
};
</script>

<style>
</style>