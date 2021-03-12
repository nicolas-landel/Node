<template>
  <div>
    <p class="alert-message" v-if=message >{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: String,
    timer: Number,
  },
  methods: {

  }
}
</script>

<style scoped>

.alert-message {
  background-color: green;
  color: grey;
}

</style>