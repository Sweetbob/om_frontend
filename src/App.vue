<template>
  <div id="app">
    <!--load login when user enter-->
    <Vlogin></Vlogin>
  </div>
</template>

<script>
  import Vlogin from './components/account/login'
export default {
  name: 'App',
  components:{
    Vlogin
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
