import echarts from 'echarts';

const install = function(Vue){
    Object.defineProperties(Vue.prototype,{
        $charts:{
            get(){
                return{
                    chinamap:function(id){
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                           tooltip:{
                              triggerOn:"click",
                              enterable:true,
                              formatter(data){
                                console.log(data)
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
                            }
                           }]

                           
                        }
                        myChart.setOption(option);
                    },
                    
                }
            }
        }
    })
}

export default install