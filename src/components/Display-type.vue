<template>
  <div class="display">
    {{ value }}
  </div>
</template>

<script>
export default {
  name:'Display-type',
props: {
  value: {
    type:String,
    default:'0'
  }
}
}
</script>

<style>
.display {
    grid-column: span 4;
    background-color: #0004;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    font-size: 2.1em;
    overflow:hidden;
}
</style>