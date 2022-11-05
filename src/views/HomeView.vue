<template>
  <div class="home">
    <HeaderVue/>
    <CovidInfoVue :records="records"/>
    <CaseNum :cases="cases"/>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderVue from '@/components/Header.vue';
import CovidInfoVue from '@/components/CovidInfo.vue';
import CaseNum from '@/components/CaseNum.vue';
import api from '@/api';

export default {
  name: 'HomeView',
  components: {
    HeaderVue,
    CovidInfoVue,
    CaseNum,
  },
  data(){
    return{
      records:{},
      cases:{},
    }
  },
  mounted(){
        api.getNcov({
            key:'62e34ad34025d5d5127135efa58d4ca8'
        }).then(res=>{
            console.log(res.data)
            if(res.status===200){
                this.records = {
                    new1:res.data.newslist[0].news[0].summary,
                    new2:res.data.newslist[0].news[1].summary,
                    new3:res.data.newslist[0].news[2].summary,
                    new4:res.data.newslist[0].news[3].summary,
                    new5:res.data.newslist[0].news[4].summary,
                }
                this.cases ={
                  currentConfirmedCount:res.data.newslist[0].desc.currentConfirmedCount,
                  confirmedCount:res.data.newslist[0].desc.confirmedCount,
                  suspectedCount:res.data.newslist[0].desc.suspectedCount,
                  curedCount:res.data.newslist[0].desc.curedCount,
                  deadCount:res.data.newslist[0].desc.deadCount,
                  seriousCount:res.data.newslist[0].desc.seriousCount,
                  suspectedIncr:res.data.newslist[0].desc.suspectedIncr,
                  currentConfirmedIncr:res.data.newslist[0].desc.currentConfirmedIncr,
                  confirmedIncr:res.data.newslist[0].desc.confirmedIncr,
                  curedIncr:res.data.newslist[0].desc.curedIncr,
                  deadIncr:res.data.newslist[0].desc.deadIncr,
                  seriousIncr:res.data.newslist[0].desc.seriousIncr
                }
            }
        }).catch(error=>{
            console.log(error)
        })
    }
}
</script>
