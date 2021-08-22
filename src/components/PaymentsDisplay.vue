<template>
  <div class="list">
    <div>Totoal Value: {{ getFullvalue }}</div>
    <div class="itemHead">
      <span>#</span>
      <span>Date</span>
      <span>Category</span>
      <span>Value</span>
    </div>

    <div class="item" v-for="(item, index) in list" :key="index">
      <span>{{ index + 1 }}</span>
      <span>{{ item.date }}</span>
      <span>{{ item.category }}</span>
      <span>{{ item.value }}</span>
      <span @click="modalMenu()">...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    modalMenu() {
      const items = [
        {
          text: "Редактировать",
          action: () => {
            console.log("edit");
          },
        },
        {
          text: "Удалить",
          action: () => {
            console.log("delete");
          },
        },
      ];
      this.$context.show({ items });
    },
  },
  computed: {
    getFullvalue() {
      return this.$store.getters.getFullPaymentValue;
    },
  },
};
</script>

<style>
.list {
  display: grid;
}
.item {
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr 1fr 0.25fr;
  margin: 10px 0;
  border-bottom: 1px solid rgb(194, 194, 194);
}
.itemHead {
  display: grid;
  font-weight: 600;
  grid-template-columns: 0.25fr 1fr 1fr 1fr 0.25fr;
}
</style>