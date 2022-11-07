import echarts from 'echarts';

const install = function(Vue){
    Object.defineProperties(Vue.prototype,{
        $charts:{
            get(){
                return{
                    chinamap:function(id,data){
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                           tooltip:{
                              triggerOn:"click",
                              enterable:true,
                              formatter(data){
                                return data.name + '<br> case: ' + data.value
                              },
                           },
                           series:[{
                            name:'chinamap',
                            type:'map',
                            map:'china',
                            roam:false, //no zoom in or zoom out,
                            zoom: 1.2,
                            label:{
                              normal:{
                                show:true,
                                textStyle:{
                                  fontSize:8
                                }
                              }
                            },
                            itemStyle:{
                              normal:{
                                areaColor:"rgba(0,255,236,0)",
                                borderColor:'rgba(0,0,0,0.2)',
                              },
                              emphasis:{
                                areaColor:'rgba(255,180,0,0.8)',
                                shadowOffsetX:0,
                                shadowOffsetY:0,
                                shadowBlur:20,
                                borderWidth:0
                              }
                            },
                            data
                           }],
                           visualMap:[{
                            orient:'vertical',
                            type:'piecewise',
                            pieces:[
                              {
                                min:0,
                                max:0,
                                color:'#fff'
                              },
                              {
                                min:1,
                                max:10,
                                color:'#fdfdcf'
                              },
                              {
                                min:11,
                                max:100,
                                color:'#fe9e83'
                              },
                              {
                                min:101,
                                max:1000,
                                color:'#e55a4e'
                              },
                              {
                                min:1001,
                                max:10000,
                                color:'#4f070d'
                              },
                            ]
                           }],
                           
                        }
                        myChart.setOption(option);
                    },
                    
                }
            }
        }
    })
}

export default install