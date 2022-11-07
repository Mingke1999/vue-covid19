<template>
  <div>
    <div class="map" id="map"></div>
  </div>
</template>

<script>
export default {
  name: 'ShowMap',
  mounted(){
    this.$charts.chinamap("map")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map{
  width:100%;
  height: 400px;
}
</style>
