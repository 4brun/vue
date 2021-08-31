<template>
  <div class="pagination">
    <button @click="newPage(count - 1)">Prev</button>
    <button v-for="p in pageCount" :key="p" @click="newPage(p)">{{ p }}</button>
    <button @click="newPage(count + 1)">Next</button>
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
    count: Number,
  },
  data() {
    return {
      pageNumber: 0,
    };
  },
  methods: {
    // nextPage() {
    //   this.pageNumber++;
    // },
    // prevPage() {
    //   this.pageNumber--;
    // },
    newPage(page) {
      if (page < 1 || page > this.pageCount || page === this.count) {
        return;
      }
      this.$emit("paginate", page);
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