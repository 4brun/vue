<template>
  <div class="pagination">
    <button @click="prevPage">Prev</button>
    <button v-for="p in pageCount" :key="p">{{ p }}</button>
    <button @click="nextPage">Next</button>
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
      pageNumber: 0,
    };
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
  },
  computed: {
    pageCount() {
      let l = this.list.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    getButtons() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.list.slice(start, end);
    },
  },
};
</script>

<style>
</style>