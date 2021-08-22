<template>
  <div>
    <button v-for="(item, indx) in items" :key="indx">{{ item.text }}</button>
  </div>
</template>

<script>
export default {
  name: "ModalMenu",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    onShowCntx(items) {
      console.log(items);
    },
    // editItem() {},
    // deleteItem() {},
    onClose() {
      this.$context.close();
    },
  },
  mounted() {
    this.$context.EventBus.$on("show", this.OnShowCntx);
    this.$context.EventBus.$on("close", this.OnClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("show", this.OnShowCntx);
    this.$context.EventBus.$off("close", this.OnClose);
  },
};
</script>

<style>
</style>