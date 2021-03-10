<template>
<div>
  <Header />
  <AddTodo v-on:add-todo="addTodo" />
  <div class="todo">
      <div v-bind:key="todo.id" v-for="todo in todos">
        <TodoItem v-bind:todo="todo" v-on:del-todo="deleteTodo" v-on:mark-complete="markComplete" />
      </div>
  </div>
</div>
</template>

<script>
// import { ref } from 'vue'
import TodoItem from './Todoitem.vue'
import Header from './layout/Header.vue'
import AddTodo from './AddTodo.vue'
import axios from 'axios'

export default {
  name: 'todo',
  components: {
    TodoItem,
    Header,
    AddTodo
  },
  data () {
    return {
      todos: null
    }
  },
  methods: {
    deleteTodo (id) {
      axios.delete('http://localhost:3000/todos', { id: id })
        .then(response => {
          this.todos = response.data.todos
        })
        .catch(err => console.log(err))
    },
    addTodo (newTodo) {
      axios.post('http://localhost:3000/todos', { title: newTodo.title })
        .then(response => {
          this.todos = response.data.todos
        })
        .catch(err => console.log(err))
    },
    markComplete (id, complete) {
      

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

// export default {
//   name: 'todo',
//   components: {
//     TodoItem,
//     Header,
//     AddTodo
//   },
//   setup () {
//     const todos = ref(null)
//     const getTodos = () => {
//       axios.get('http://localhost:3000/todos')
//         .then(response => {
//               todos.value = response.data
//               console.log("Rep", todos.value)
//             })
//         .catch(err => console.log(err))
//     }
//     return {
//       todos,
//       getTodos
//     }
//   },
//   mounted () {
//     this.getTodos()
//   }
// }
</script>
<style scoped>

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
