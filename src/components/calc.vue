<template>
  <div class="calc">
    <div>
      <input type="number" placeholder="number 1" v-model.number="num1" />
      <input type="number" placeholder="number 2" v-model.number="num2" />
      Результат: {{ result }}
      <div class="alarm" v-if="alarm">{{ alarm }}</div>
      <div class="keyboard">
        <button
          v-for="operation in operations"
          v-bind:key="operation"
          v-bind:title="operation"
          @click="calclulate(operation)"
        >
          {{ operation }}
        </button>
        <br />
        <input type="checkbox" id="checkbox" v-model="check" />
        <label for="checkbox">Отобразить экранную клавитатуру</label>
        <div v-if="check">
          <button
            v-for="number in numbers"
            v-bind:key="number"
            v-bind:title="number"
            @click="getNumber(number)"
          >
            {{ number }}
          </button>
          <button @click="deleteNumber">⌫</button>
          <br />
          <input type="radio" id="number 1" value="num1" v-model="btnNumber" />
          <label for="number 1">number 1</label>
          <input type="radio" id="number 2" value="num2" v-model="btnNumber" />
          <label for="number 2">number 2</label>
        </div>
      </div>
      <!-- <div class="logs">
        {{ logs }}
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: () => ({
    num1: "",
    num2: "",
    btnNumber: "",
    result: 0,
    alarm: "",
    operations: ["+", "-", "*", "/", "^", "%"],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    logs: {},
    check: false,
  }),
  methods: {
    calclulate(operation) {
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.sub();
          break;
        case "*":
          this.multi();
          break;
        case "/":
          this.div();
          break;
        case "^":
          this.pov();
          break;
        case "%":
          this.divIn();
          break;
      }

      this.logs[
        Date.now()
      ] = `${this.num1} ${operation} ${this.num2} = ${this.result}`;
    },
    deleteNumber() {
      this[this.btnNumber] = +String(this[this.btnNumber]).slice(0, -1);
      // удаляем последенее символ
    },
    getNumber(number) {
      this[this.btnNumber] = +(this[this.btnNumber] += String(number));
    },
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
button {
  margin: 5px;
}
</style>