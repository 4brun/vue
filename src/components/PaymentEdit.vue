<template>
  <div>
    <select v-model="category">
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
    <input type="number" placeholder="Payment amount" v-model.number="value" />
    <input type="date" placeholder="Payment date" v-model="date" />
    <button @click="editItem">Edit</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "PaymentEdit",
  props: {
    list: {
      type: Object,
    },
  },
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
    ...mapMutations(["editPayment"]),
    ...mapActions(["fetchCategoryList"]),
    editItem() {
      const newItem = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: Number(this.value),
        id: this.id,
      };
      // this.list.push(newItem);
      this.editPayment(newItem);
    },
  },
  created() {
    if (this.list) {
      const userItem = {
        date: this.list.date || this.getCurrentDate,
        category: this.list.category,
        value: Number(this.list.value) || 0,
        id: this.list.id,
      };
      (this.category = userItem.category),
        (this.value = userItem.value),
        (this.id = userItem.id);
    }
  },
};
</script>

<style>
</style>