import echarts from 'echarts';

const install = function(Vue){
    Object.defineProperties(Vue.prototype,{
        $charts:{
            get(){
                return{
                    line:function(id){
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                              },
                              yAxis: {
                                type: 'value'
                              },
                              series: [
                                {
                                  data: [150, 230, 224, 218, 135, 147, 260],
                                  type: 'line'
                                }
                              ]
                        }
                        myChart.setOption(option);
                    },
                    chinamap:function(id){
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                            tooltip: {
                                trigger: 'item',
                                formatter: '{b}<br/>{c} (p / km2)'
                              }, 
                              visualMap: {
                                min: 800,
                                max: 50000,
                                text: ['High', 'Low'],
                                realtime: false,
                                calculable: true,
                                inRange: {
                                  color: ['lightskyblue', 'yellow', 'orangered']
                                }
                              },
                              series:[{
                                name:'province',
                                type:'map',
                                map:'china',
                                roam:false, //no zoom in or zoom out
                              }]
                        }
                        myChart.setOption(option);
                    }
                }
            }
        }
    })
}

export default install