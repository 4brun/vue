<template>
  <v-container>
    <!-- <div>Totoal Value: {{ getFullvalue }}</div> -->
    <v-row class="font-weight-bold item">
      <v-col cols="1">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="5">Category</v-col>
      <v-col cols="2">Value</v-col>
    </v-row>

    <v-row v-for="item in list" :key="item.id" class="item">
      <v-col cols="1">{{ item.id }}</v-col>
      <v-col cols="4">{{ item.date }}</v-col>
      <v-col cols="5">{{ item.category }}</v-col>
      <v-col cols="2">{{ item.value }}</v-col>
      <!-- <v-col @click="modalMenu($event, item)">...</v-col> -->
    </v-row>
  </v-container>
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
/* .list {
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
} */
.item {
  border-bottom: 1px solid #a3a3a3;
}
</style>