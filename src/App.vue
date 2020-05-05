<template>
  <div>
    <div class="menu">
      <router-link to="/about">About</router-link>
      <br />
      <router-link to="/products">Products</router-link>
    </div>
    <router-view></router-view>
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
import VueRouter from "vue-router";
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";
import Products from "./components/Products.vue";
import About from "./components/About.vue";
import AboutUs from "./components/AboutUs.vue";
import AboutYou from "./components/AboutYou.vue";
import AboutHome from "./components/AboutHome.vue";

export default {
  router: new VueRouter({
    routes: [
      {
        path: "/about",
        component: About,
        children: [
          { path: "", component: AboutHome },
          { path: "us", component: AboutUs },
          { path: "you", component: AboutYou }
        ]
      },
      // path to regexp
      { path: "/products/:id?", component: Products }
    ]
  }),
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