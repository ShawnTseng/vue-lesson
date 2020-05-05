<template>
  <div>
    <h1>Products</h1>
    <h2>{{id}}</h2>
    <h3>{{queryStringId}}</h3>
  </div>
</template>

<script>
// const products = {
//   18: "Shoes",
//   26: "T-Shirts",
//   37: "Pants"
// };

export default {
  props: ["id"],
  computed: {
    // showId() {
    //   return products[this.id];
    // },
    queryStringId() {
      return this.$route.query.id;
    }
  }
};
</script>