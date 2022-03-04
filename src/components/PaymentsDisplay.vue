<template>
  <v-container class="container">
    <v-row>
      <h4>Totoal Value: {{ getFullvalue }}</h4>
    </v-row>
    <v-row class="font-weight-bold">
      <v-col cols="1">#</v-col>
      <v-col cols="3">Date</v-col>
      <v-col cols="5">Category</v-col>
      <v-col>Value</v-col>
    </v-row>

    <v-row v-for="(item, index) in list" :key="index">
      <v-col cols="1">{{ item.id }}</v-col>
      <v-col cols="3">{{ item.date }}</v-col>
      <v-col cols="5">{{ item.category }}</v-col>
      <v-col cols="2">{{ item.value }}</v-col>
      <v-menu min-width="350" offset-y close-on-content-click>
        <template v-slot:activator="{ on }">
          <v-col cols="1" v-on="on">
            <v-icon right class="edit">mdi-pencil</v-icon>
          </v-col>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-btn plain v-on="on"> Редактировать </v-btn>
                </template>
                <v-card>
                  <payment-form
                    :list="item"
                    @close="dialog = false"
                    :header="header"
                  />
                </v-card>
              </v-dialog>
            </v-list-item-title>
            <v-list-item-title>
              <v-btn plain @click="deletePayment(item.id)">Удалить</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
import PaymentForm from "./PaymentForm.vue";

export default {
  components: { PaymentForm },
  name: "PaymentsDisplay",
  data() {
    return {
      dialog: false,
      header: "Edit Payment Form",
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deletePayment(id) {
      this.$store.commit("deletePayment", id);
    },
  },
  computed: {
    getFullvalue() {
      return this.$store.getters.getFullPaymentValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
}
.edit {
  cursor: pointer;
  &:hover {
    color: black;
  }
}
</style>