<template>
  <div>
    <input type="text" placeholder="Payment description" v-model="category" />
    <input type="number" placeholder="Payment amount" v-model="value" />
    <input type="date" placeholder="Payment date" v-model="date" />
    <button @click="addItem">ADD +</button>
  </div>
</template>

<script>
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
  methods: {
    addItem() {
      const newItem = {
        date: this.date,
        category: this.category,
        value: this.value,
      };
      this.list.push(newItem);
    },
  },
};
</script>

<style>
</style>