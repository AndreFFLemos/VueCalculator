<template>
  <div class="calculator">
     <!-- no vue os elementos têm que estar dentro de uma div-->
    <DisplayTypeVue :value="displayValue"/>
    <ButtonTypeVue label="AC" triple @onCalcButtonClick="clearMemory"/>
    <ButtonTypeVue label="/" operation @onCalcButtonClick="setOperation"/>
    <ButtonTypeVue label="7" @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="8" @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="9" @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="*" operation @onCalcButtonClick="setOperation"> </ButtonTypeVue>
    <ButtonTypeVue label="4" @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="5" @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="6" @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="-" operation @onCalcButtonClick="setOperation"></ButtonTypeVue>
    <ButtonTypeVue label="1" @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="2" @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="3" @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="+" operation @onCalcButtonClick="setOperation"></ButtonTypeVue>
    <ButtonTypeVue label="0" @onCalcButtonClick="addDigit" double></ButtonTypeVue>
    <ButtonTypeVue label="." @onCalcButtonClick="addDigit"></ButtonTypeVue>
    <ButtonTypeVue label="=" @onCalcButtonClick="setOperation"></ButtonTypeVue>


    
  </div>
</template>

<script>
import ButtonTypeVue from '../components/Button-type.vue';
import DisplayTypeVue from '../components/Display-type.vue';

export default {
    name:'Calculator-App',

    components: {
        ButtonTypeVue,
        DisplayTypeVue
    },

    data(){
        return {
            displayValue:"0",
            firstOperand: null,
      operator: null,
      waitingForSecondOperand: false
        }
    },
    
    methods: {
        clearMemory() {
           this.displayValue = '0';
      this.firstOperand = null;
      this.operator = null;
      this.waitingForSecondOperand = false;
      console.log('Memória limpa');
        },

        setOperation (operator) {

            //se o operador for = então vai calcular o resultado
            if (operator === '=') {
        this.calculateResult();
        return;
      }
      //se o primeiro operando não existir, o valor da tela é-lhe atribuido
      if (this.firstOperand === null) {
        this.firstOperand = parseFloat(this.displayValue);
      } else if (this.operator) {
        this.calculate();
      }
      this.operator = operator;
      this.waitingForSecondOperand = true;
      console.log('Operação definida:', operator);
    },

    addDigit(digit)
    {
        //se estiver À espera do segundo digito, o display value mostra o clicado
        if (this.waitingForSecondOperand) 
        {
        this.displayValue = digit === '.' ? '0.' : digit;
        this.waitingForSecondOperand = false;
      } else 
      
      {
        if (digit === '.' && this.displayValue.includes('.'))
         {
          return;
        }
        //caso contrario adiciona o digito ao display value, permitindo apenas um '.'
        this.displayValue = this.displayValue === '0' && digit !== '.' ? digit : this.displayValue + digit;
      }
      console.log('Número adicionado:', digit);
    },

    //se já existir o primeiro valor e uma operação, chama o calculate
    calculateResult() {
      if (this.operator && this.firstOperand !== null) {
        this.calculate();
        this.operator = null;
        console.log('Resultado calculado:', this.displayValue);
      }
    },
    //só é chamada se já existir o primeiro valor e o operador
    calculate() {
      const secondOperand = parseFloat(this.displayValue);
      let result = 0;

      switch(this.operator) {
        case '+':
          result = this.firstOperand + secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '/':
          result = secondOperand !== 0 ? this.firstOperand / secondOperand : 'Erro';
          break;
        default:
          return;
      }

      this.displayValue = result.toString();
      this.firstOperand = result !== 'Erro' ? result : null;
      this.waitingForSecondOperand = false;
    }
}
}
</script>

<style scoped>
.calculator {
    height: 420px;
    width: 235px;
    border-radius:10px;
    overflow:hidden;
    padding: 10px;

    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 60px repeat(5,60px);
    background: #1e1e1e;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

}
</style>