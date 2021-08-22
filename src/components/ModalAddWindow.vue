<template>
  <div class="wrapper">
    <div class="header">{{ modalSettings.header }}</div>

    <component :is="modalSettings.name" />

    <div class="footer">
      <button @click="closeOnclick">Close</button>
    </div>
  </div>
</template>

<script>
import PaymentAdd from "./PaymentAdd.vue";
import Autorisation from "./Autorisation.vue";

export default {
  components: {
    PaymentAdd,
    Autorisation,
  },
  props: {
    modalSettings: Object,
  },
  methods: {
    closeOnclick() {
      this.$modal.hide();
    },
  },
};
</script>

<style>
.wrapper {
  position: absolute;
  top: 40%;
  left: 40%;
  background-color: lightslategrey;
  padding: 20px;
}
</style>