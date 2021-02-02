<template>
  <div>
    <form class="add-todo-form centered-form" @submit="addTodo">
      <input type="text" v-model="title"  name="title" placeholder="Add todo">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addTodo (e) {
      e.preventDefault()
      const newTodo = {
        title: this.title, // Use 'this' because we said v-model="title" in the DOM
        completed: false
      }
      this.$emit('add-todo', newTodo)

      this.title = ''
    }
  }
}
</script>
