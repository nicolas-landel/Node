<template>
  <div class="hello">
    <h1>Hello</h1>
    <div v-if="showModal">
      <Modal :header="header" @close="toggleModal" theme="green" />
    </div>
    <button @click="toggleModal">Go todos</button>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'Homepage',
  components: { Modal },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      header: 'Do you want to see the todos?',
      showModal: false,
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .hello {
    width: 100%;
    height: 680px;
  }
</style>
