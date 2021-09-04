<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {},
    options: {},
  }),
  mounted() {
    const list = this.$store.getters.getPaymentsList;
    const category = list.map((i) => i.category);
    const uniqCat = [...new Set(category)];
    const res = [];

    for (let i = 0; i <= uniqCat.length; i++) {
      const resilt = list.reduce((total, cat) => {
        if (uniqCat[i] === cat.category) {
          total += cat.value;
        }
        return total;
      }, 0);
      res.push(resilt);
    }

    // const value = list.map((i) => {
    //   return category.reduce((total, cat) => {
    //     if (i.category === cat) {
    //       total += i.value;
    //     }
    //     return total;
    //   }, 0);
    // });

    // const value = list.reduce((acc, item) => {
    //   if (acc.hasOwnProperty(item.category)) {
    //     acc[item.category] += item.value;
    //   } else {
    //     acc[item.category] = item.value;
    //   }
    //   return acc;
    // }, {});

    this.chartdata = {
      labels: uniqCat,
      datasets: [
        {
          label: "Данные",
          data: res,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    this.renderChart(this.chartdata, this.options);
  },
};
</script>