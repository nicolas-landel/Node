<template>
<div>
  <Header />  
  <div class="todo">
      <div v-bind:key="todo.id" v-for="todo in todos">
        <TodoItem v-if="todo.completed" v-bind:todo="todo" v-on:del-todo="deleteTodo" v-on:mark-complete="markComplete(todo._id)" />
      </div>
  </div>
</div>
</template>

<script>
import TodoItem from './Todoitem.vue'
import Header from './layout/Header.vue'
import axios from 'axios'

export default {
  name: 'todo',
  components: {
    TodoItem,
    Header,
  },
  data () {
    return {
      todos: null,
    }
  },
  methods: {
    deleteTodo (id) {
      console.log("iiii", id)
      axios.delete('http://localhost:3000/todos', { id: id })
        .then(response => {
          this.todos = response.data.todos
        })
        .catch(err => console.log(err))
    },
    markComplete (id) {
      console.log("ehoh", id)
      axios.post('http://localhost:3000/todos', { 'completed': id })
        .then(response => {
          this.message = response.data.message
          setTimeout(function() {
            console.log("timeout")
            this.message = ""
          }, 5000)
        })
        .catch(err => console.log(err))
    }
  },
  async mounted () {
    axios.get('http://localhost:3000/todos')
      .then(response => {
        this.todos = response.data
      })
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>

.todo {
  margin-top: 50px;
}

  .todo-item {
    background: #c2c0f8;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    color: rgb(3, 3, 3);
    margin: auto;
    margin-bottom: 20px;
    border-radius: 0.5em;
    width: 50%;
    text-align: center;
  }

</style>
