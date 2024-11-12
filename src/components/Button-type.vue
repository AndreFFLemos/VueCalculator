<template>
  <!--quando se clicar no botão vai ser chamada a função onCalcButtonClick com o label como argumento-->
  <button class="button" 
  @click="$emit('onCalcButtonClick',label)" 
          :class="{double,triple,operation}">      <!-- condicional, se for verdadeiro em cada uma das classes, então apresenta-as-->
          {{label }}
    </button>
</template>

<script>
export default {
  name:'Button-type',
props: {
  
  label: {
    type: String,
    required: true
  },
  operation: {
    type:Boolean,
    default: false
  },
  double: {
    type: Boolean,
    default: false
  },
  triple: { 
    type: Boolean,
    default: false
  }
}
}
</script>

<style scoped>

.button {
  font-size: 1.4em;
  background-color: white;
  border:none;
  border-right: solid 1px grey;
  border-bottom: solid 1px grey;
}
.button:active {
  background-color: #c0c0c0;
}

.button:hover {
  background-color: #d5d5d5;
}

.button.double { 
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}

.button.operation {
  background-color: #fa8231;
  color: white
}

.button.operation:active {
  background-color: #fa8231cc;
}

.button.operation:hover {
  background-color: #e67e22;
}
</style>