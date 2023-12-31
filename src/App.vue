<!-- Run:- npm run serve -->

<template>
  <!-- 3. Display Message Output -->
  <div id="app"> 
    <todo-app></todo-app>
  </div>
</template>

<script> //1.import
import TodoApp from './components/TodoApp.vue'

export default {
  name: 'App',
  components: {  //2.Components Register Add
    TodoApp
  }
}
</script>

<style scoped>
/* Write CSS Code */
</style>

