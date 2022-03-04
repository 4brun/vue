<template>
  <div class="text-center">
    <v-pagination
      v-model="pageNumber"
      :length="pageCount"
      @input="newPage"
    ></v-pagination>
  </div>
</template>


<script>
export default {
  name: "Pagination",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    size: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      pageNumber: 1,
    };
  },
  methods: {
    newPage(pageNumber) {
      this.$emit("paginate", pageNumber);
    },
  },
  computed: {
    pageCount() {
      let l = this.list.length,
        s = this.size;
      return Math.ceil(l / s);
    },
  },
};
</script>

<style>
</style>