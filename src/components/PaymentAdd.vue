<template>
  <div>
    <select v-model="category">
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
    <!-- <input type="text" placeholder="Payment description" v-model="category" /> -->
    <input type="number" placeholder="Payment amount" v-model.number="value" />
    <input type="date" placeholder="Payment date" v-model="date" />
    <button @click="addItem">ADD +</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "PaymentAdd",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    category: "",
    value: "",
    date: "",
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
        value: this.value,
      };
      // this.list.push(newItem);
      this.addDataToPaymentsList(newItem);
    },
  },
  created() {
    if (this.$route.params?.category) {
      const userItem = {
        date: this.getCurrentDate,
        category: this.$route.params.category,
        value: Number(this.$route.query.value) || 0,
      };
      (this.category = userItem.category), (this.value = userItem.value);
      this.addDataToPaymentsList(userItem);
      this.$router.push("/");
      console.log(userItem);
    }
  },
};
</script>

<style>
</style>