<template>
  <div>
    <TodoInput @submit="addTodo" />
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :data="todo"
        @click.native="removeTodo(index)"
      >{{ todo }}</TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  data() {
    return {
      todos: []
    };
  },
  components: {
    TodoInput,
    TodoItem
  },
  methods: {
    addTodo(text) {
      this.todos.push(text);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style>
</style>