<template>
  <div class="calc">
    <div>
      <input type="number" placeholder="number 1" v-model.number="num1" />
      <input type="number" placeholder="number 2" v-model.number="num2" />
      Результат: {{ result }}
      <div class="alarm" v-if="alarm">{{ alarm }}</div>
      <div class="keyboard">
        <button @click="sum">+</button>
        <button @click="sub">-</button>
        <button @click="multi">*</button>
        <button @click="div">/</button>
        <button @click="pov">^</button>
        <button @click="divIn">%</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: () => ({
    num1: "",
    num2: "",
    result: 0,
    alarm: "",
  }),
  methods: {
    sum() {
      this.result = this.num1 + this.num2;
    },
    sub() {
      this.result = this.num1 - this.num2;
    },
    multi() {
      this.result = this.num1 * this.num2;
    },
    div() {
      if (this.num2 === 0) {
        this.alarm = "На 0 делить нельзя.";
      }
      this.result = this.num1 / this.num2;
    },
    pov() {
      this.result = Math.pow(this.num1, this.num2);
    },
    divIn() {
      if (this.num2 === 0) {
        this.alarm = "На 0 делить нельзя.";
      }
      this.result = this.num1 % this.num2;
    },
  },
};
</script>

<style scoped>
.alarm {
  color: red;
}
</style>