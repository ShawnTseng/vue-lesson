<template>
  <div>
    <h1>About</h1>
    <router-link :to="{ name:'us' }">Us</router-link>
    <br />
    <router-link to="/about/you">You</router-link>
    <br />
    <router-link to="/products/18">Shoes</router-link>
    <br />
    <router-link :to="{name:'prod', params:{id:37}}">Pants</router-link>
    <br />
    <router-view></router-view>
  </div>
</template>