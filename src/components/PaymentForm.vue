<template>
  <v-card class="pa-8">
    <v-card-title>{{ header }}</v-card-title>
    <v-select v-model="category" label="category" :items="options" />
    <v-text-field
      type="number"
      placeholder="Payment amount"
      v-model.number="value"
    />
    <v-text-field type="date" v-model="date" />
    <div v-if="header == 'Add Payment Form'">
      <v-btn color="teal" dark @click="addItem">
        ADD
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <div v-else-if="header == 'Edit Payment Form'">
      <v-btn color="teal" dark @click="editItem">
        EDIT
        <v-icon right>mdi-pencil</v-icon>
      </v-btn>
    </div>
  </v-card>
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
    header: {
      type: String,
      default: "Header",
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
    dateFormat() {
      return this.date.split("-").reverse().join(".");
    },
    options() {
      return this.$store.getters.getCategoryList;
    },
  },

  methods: {
    ...mapMutations(["addDataToPaymentsList"]),
    ...mapMutations(["editPayment"]),
    ...mapActions(["fetchCategoryList"]),
    addItem() {
      const newItem = {
        date: this.dateFormat || this.getCurrentDate,
        category: this.category || "No category",
        value: Number(this.value) || 0,
        id: this.$store.getters.getPaymentsList.length + 1,
      };
      this.addDataToPaymentsList(newItem);
      this.category = "";
      this.value = "";
      this.$emit("close");
    },
    editItem() {
      const newItem = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: Number(this.value),
        id: this.id,
      };
      this.editPayment(newItem);
      this.$emit("close");
    },
  },
  async created() {
    await this.fetchCategoryList();
    if (this.list) {
      const userItem = {
        date: this.dateFormat || this.getCurrentDate,
        category: this.list.category,
        value: Number(this.list.value),
        id: this.list.id,
      };
      (this.category = userItem.category),
        (this.value = userItem.value),
        (this.id = userItem.id);
    }

    if (this.$route.params?.category) {
      const userItem = {
        date: this.getCurrentDate,
        category: this.$route.params.category,
        value: Number(this.$route.query.value) || 0,
      };
      (this.category = userItem.category), (this.value = userItem.value);
      this.addDataToPaymentsList(userItem);
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>