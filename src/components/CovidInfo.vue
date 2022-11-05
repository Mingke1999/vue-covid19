<template>
  <div class="info">
    <p class="title">
        <i></i>
        Virus Info
    </p>
    <div class="content">
        <p>{{records.new1}}</p>
        <p>{{records.new2}}</p>
        <p>{{records.new3}}</p>
        <p>{{records.new4}}</p>
        <p>{{records.new5}}</p>
    </div>  
  </div>
</template>

<script>
import api from '@/api';
export default {
    data(){
        return{
            records:{}
        }
    },
    mounted(){
        api.getNcov({
            key:'62e34ad34025d5d5127135efa58d4ca8'
        }).then(res=>{
            //console.log(res.data)
            if(res.status===200){
                this.records = {
                    new1:res.data.newslist[0].news[0].summary,
                    new2:res.data.newslist[0].news[1].summary,
                    new3:res.data.newslist[0].news[2].summary,
                    new4:res.data.newslist[0].news[3].summary,
                    new5:res.data.newslist[0].news[4].summary,


                }
            }
        }).catch(error=>{
            console.log(error)
        })
    }
}
</script>

<style scoped>
.info{
    padding: 0.16rem;
    background: white;
    border-bottom: 1px solid #f1f1f1;
}
.title{
    font-size: 0.17rem;
}
.title i{
    display: inline-block;
    width:0.04rem;
    height: 0.16rem;
    margin-top: 0.03rem;
    vertical-align: middle;
    background: #4169e2;
}
.content{
    padding: 0.06rem 0.16rem;
}
.content p{
    font-size:13px;
    margin: 5px 0;
}
</style>

