<template>
  <div class="home">
    <HeaderVue/>
    <CovidInfoVue/>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderVue from '@/components/Header.vue';
import CovidInfoVue from '@/components/CovidInfo.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderVue,
    CovidInfoVue
  }
}
</script>
