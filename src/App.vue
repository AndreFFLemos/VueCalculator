<template>
 <div id="App">
   <h1>Calculadora</h1>
    <CalculatorAppVue />
 </div>
 
</template>


//aqui o ts
<script>
import CalculatorAppVue from './main/Calculator-App.vue'

export default {
name: 'App',
components: {
    CalculatorAppVue 
}
}
</script>


//aqui o css
<style>
@font-face {
    font-family: "RobotoMono-Thin.ttf";
    src:url("./fonts/RobotoMono-Thin.ttf")
}
*{
    font-family: "RobotoMono", monospace;
}

body{
    margin: 0;
}

#app {
    display:flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color:black;
    background:  linear-gradient(45deg, rgba(168, 224, 99, 1), rgba(86, 171, 47, 0.8), rgba(34, 139, 34, 0.6));
}
</style>