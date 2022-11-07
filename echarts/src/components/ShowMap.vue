<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="line" id="line"></div>
    <div class="china" id="china"></div>
  </div>
</template>

<script>
export default {
  name: 'ShowMap',
  props: {
    msg: String
  },
  mounted(){
    this.$charts.line("line"),
    this.$charts.chinamap("china")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line{
  width:100%;
  height: 400px;
}
.china{
  width:100%;
  height: 400px;
}
</style>
