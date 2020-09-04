<template>
  <div class="home">
    <Landmark msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landmark from '@/components/Landmark.vue'

export default {
  name: 'Home',
  components: {
    Landmark
  }
}
</script>
