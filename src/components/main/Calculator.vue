<template>
  <div class="container">
    <div class="row">
      <label class="col-xs-12">{{resultsStr}}</label>
      <button class="btn btn-default col-xs-3" @click="cleanUp">AC</button>
      <button class="btn btn-default col-xs-3" @click="theNot">+/-</button>
      <button class="btn btn-default col-xs-3" @click="percent">%</button>

      <button class="btn btn-default col-xs-3" @click="calculationAction">÷</button>

      <button class="btn btn-default col-xs-3" @click="numAction">7</button>
      <button class="btn btn-default col-xs-3" @click="numAction" >8</button>
      <button class="btn btn-default col-xs-3" @click="numAction" >9</button>

      <button class="btn btn-default col-xs-3" @click="calculationAction">x</button>

      <button class="btn btn-default col-xs-3" @click="numAction" >4</button>
      <button class="btn btn-default col-xs-3" @click="numAction" >5</button>
      <button class="btn btn-default col-xs-3" @click="numAction" >6</button>

      <button class="btn btn-default col-xs-3" @click="calculationAction">-</button>

      <button class="btn btn-default col-xs-3" @click="numAction" >1</button>
      <button class="btn btn-default col-xs-3" @click="numAction" >2</button>
      <button class="btn btn-default col-xs-3" @click="numAction" >3</button>

      <button class="btn btn-default col-xs-3" @click="calculationAction">+</button>

      <button class="btn btn-default col-xs-3" @click="numAction" >0</button>
      <button class="btn btn-default col-xs-3" @click="deleteAction" ><span class="glyphicon glyphicon-remove"></span></button>
      <button class="btn btn-default col-xs-3" @click="pointAction" >.</button>

      <button class="btn btn-default col-xs-3" @click="equalAction">=</button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'calculator',
  data: function () {
    return {
      operatStr: '0',
      tmpOperatStr: '0',
      calculationStr: '',
      resultsStr: '0'
    }
  },
  computed: {

  },
  methods: {
    numAction: function (event) {
      let text = event.target.innerHTML

      if (parseInt(this.operatStr) === 0) {
        this.operatStr = ''
      }
      this.operatStr += text

      this.resultsStr = this.operatStr
    },
    calculationAction: function (event) {
      this.equalAction()

      this.tmpoperatStr = this.operatStr
      this.operatStr = 0

      this.calculationStr = event.target.innerHTML
    },
    equalAction: function () {
      let num = parseInt(this.tmpoperatStr)
      this.operatStr = parseInt(this.operatStr)

      if (this.calculationStr === '') {

      } else if (this.calculationStr === '+') {
        num += this.operatStr
      } else if (this.calculationStr === '-') {
        num -= this.operatStr
      } else if (this.calculationStr === 'x') {
        num *= this.operatStr
      } else if (this.calculationStr === '÷') {
        num /= this.operatStr
      }
      this.operatStr = '' + num
      this.resultsStr = this.operatStr

      this.tmpoperatStr = '0'
    },
    cleanUp: function () {
      this.operatStr = '0'
      this.calculationStr = ''
      this.tmpoperatStr = '0'
      this.resultsStr = '0'

    },
    theNot: function () {
      this.operatStr = -this.operatStr
    },
    percent: function () {
      this.operatStr /= 100
    },
    deleteAction: function () {
      if (this.operatStr.length === 1) {
        this.operatStr = '0'
      }else {
        this.operatStr = this.operatStr.substr(0,this.operatStr.length-1)
      }
    },
    pointAction: function (event) {
      if (this.operatStr.indexOf('.') === -1){
        this.operatStr += event.target.innerHTML

      }
    }
  }
}
</script>

<style scoped>
  button {
    height: 50px;
  }
  label {
    text-align: right;
    font-size: 20px;
  }
</style>
