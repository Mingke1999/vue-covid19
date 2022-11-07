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
                    }
                }
            }
        }
    })
}

export default install