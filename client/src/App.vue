<template>
  <div>
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'

export default {
  name: 'App',
  components: {
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
