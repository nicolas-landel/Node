<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}" @mouseover="underline" @mouseout="removeUnderline" ref="item">
    <p>
      <input type="checkbox" v-on:change="$emit('mark-complete')">
      {{ todo.title }}
      
      <button @click="$emit('del-todo')"
      class="del">x</button>
    </p>

  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'TodoItem',
  props: {
    todo: Object
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
