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
import { ref, onBeforeMount, onUpdated, onMounted } from 'vue'

export default {
  name: 'Homepage',
  components: { Modal },
  setup() {
    const msg = ref('Welcome to Your Vue.js App')
    const header = ref('Do you want ot see the todos??')
    const showModal = ref(false)
    const toggleModal = async () => {
      showModal.value = !showModal.value
    }
    const root = ref(null)
    onBeforeMount(() => {
       console.log('Before mounted in the composition api!', root.value)
     })
    onUpdated(() => {
      console.log('updated in the composition api!')
    })
    onMounted(() => {
      console.log('mounted in the composition api!', this)
    })
    return {
      msg,
      header,
      showModal,
      toggleModal
    }
  },
  mounted() {
    console.log('mounteeeed', this, this.$el)
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
