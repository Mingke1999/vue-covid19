<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="line" id="line">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    this.$charts.line("line")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line{
  width:100%;
  height: 400px;
}
</style>
