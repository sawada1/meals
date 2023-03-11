<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <navbar/>
  </nav>
  <router-view/>
</template>


<script>
import navbar from './components/navbar.vue'
export default {
  components:{
    navbar,
  }
}
</script>
<style lang="scss">

*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
:root{
  --maincolor:rgb(255, 181, 44);
  --main-shadow: 10px 10px 10px rgba(0, 0, 0, 0.468);
}
body{
  background-color: #ccc;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  // padding: 30px;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
