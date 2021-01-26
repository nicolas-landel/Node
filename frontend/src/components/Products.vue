<template>
    <div>
      <h1>Stuff</h1>
        <h4>list of the objects</h4>
        <div id="products">
          {{ products }}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import ProductsServices from '@/services/ProductsServices'

export default {
  data () {
    return {
      products: {}
    }
  },
  mounted () {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        console.log('TESST', response.data)
        this.products = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>
