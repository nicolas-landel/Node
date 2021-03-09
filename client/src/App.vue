<template>
  <div>
    <Navbar></Navbar>
    <Homepage></Homepage>
    <router-view/>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'
import Navbar from './components/layout/Navbar.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#homepage-img {
  width: 150px;
}

</style>
