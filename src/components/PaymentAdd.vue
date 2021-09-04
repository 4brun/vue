<template>
  <v-card class="text-left pa-8">
    <v-select v-model="category" label="category" :items="options" />
    <v-text-field type="number" v-model.number="value" label="value" />
    <v-text-field type="date" v-model="date" label="date" />
    <v-btn color="teal" dark @click="addItem">ADD +</v-btn>
  </v-card>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "PaymentAdd",
  // props: {
  //   list: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },
  data: () => ({
    category: "",
    value: "",
    date: "",
    id: "",
  }),

  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    options() {
      return this.$store.getters.getCategoryList;
    },
  },

  methods: {
    ...mapMutations(["addDataToPaymentsList"]),
    ...mapActions(["fetchCategoryList"]),
    addItem() {
      const newItem = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: Number(this.value),
        id: this.$store.getters.getPaymentsList.length + 1,
      };
      // console.log(this.list);
      this.addDataToPaymentsList(newItem);
    },
  },
  async created() {
    await this.fetchCategoryList();
    if (this.$route.params?.category) {
      const userItem = {
        date: this.getCurrentDate,
        category: this.$route.params.category,
        value: Number(this.$route.query.value) || 0,
      };
      (this.category = userItem.category), (this.value = userItem.value);
      this.addDataToPaymentsList(userItem);
      this.$router.push("/");
      // console.log(userItem);
    }
  },
};
</script>

<style>
</style>