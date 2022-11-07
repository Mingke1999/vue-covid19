<template>
  <div>
    <p class="title"><i></i>Cases Distribution</p>
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
    width: 375px;
    height: 400px;
}

#worldMap {
    width: 375px;
    height: 400px;
}
.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}
.title::before {
    content: "";
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
}

</style>
