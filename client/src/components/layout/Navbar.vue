<template>
  <div class="row">
    <div class="col-12">
        <div id="nav">
            <router-link to="{ name: 'Homepage' }">Home</router-link> |
            <router-link to="/Todos">Todos</router-link>
        </div>
    </div>

    <div class="col-12 bg-light">
        <router-view />
    </div>
</div>
</template>

<script>

export default {
  name: 'Navbar', 
}
</script>

<style>

</style>