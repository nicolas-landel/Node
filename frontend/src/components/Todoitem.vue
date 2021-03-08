<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}" @mouseover="underline" @mouseout="removeUnderline" ref="item">
    <p>
      <input type="checkbox" v-on:change="markComplete">
      {{ todo.title }}
      
      <button @click="$emit('del-todo', todo.id)"
      class="del">x</button>
    </p>

  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    markComplete () {
      this.todo.completed = !this.todo.completed
    },
    underline () {
      this.$refs.item.classList.add('underline')
    },
    removeUnderline () {
      this.$refs.item.classList.remove('underline')
    }
  }
}
</script>
<style scoped>

  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background-color: rgb(219, 17, 17);
    border-radius: 1em;
    color: wheat;
    float: right;
    border: 1px rgb(177, 112, 112) solid;
  }
  .del:hover {
    cursor: pointer;
    background-color: rgb(224, 54, 54);
  }
  .underline {
    text-decoration: underline;
  }

</style>
