<template>
<div class="demo">
  <button v-for="tab in tabs" v-bind:key="tab" v-bind:class="['tab-button', { active: currentTab === tab }]"
  v-on:click="currentTab = tab">
    {{ tab }}
  </button>

  <component v-bind:is="currentTabComponent" class="tab"></component>

</div>
</template>

<script>
import { ref, provide, reactive } from 'vue'
import Todos from './Todos.vue'
import CompletedTodos from './CompletedTodos.vue'

export default {
  name: 'Tab',
  components: {
  },
  setup() {
    const currentTab = reactive('Todos')
    const tabs = ref(['Todos', 'CompletedTodos'])
    
    function currentTabComponent() {
      if (currentTab.value.toLowerCase() == 'todos') {
        return Todos
      } else {
        return CompletedTodos
      }
    }
    provide('tab', currentTab.value)
    
    return {
      currentTab,
      tabs,
      currentTabComponent,
    }
  }
}

</script>
<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
