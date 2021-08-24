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
      <span>{{ item.id }}</span>
      <span>{{ item.date }}</span>
      <span>{{ item.category }}</span>
      <span>{{ item.value }}</span>
      <span @click="modalMenu($event, item)">...</span>
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
    modalMenu(event, item) {
      const items = [
        {
          text: "Редактировать",
          action: () => {
            this.$modal.show("PaymentEdit", {
              header: "Edit Form",
              list: item,
            });
          },
        },
        {
          text: "Удалить",
          action: () => {
            this.$store.commit("deletePayment", item.id);
          },
        },
      ];
      this.$context.show({ event, items });
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