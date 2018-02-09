<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">hi</router-link>
      <router-link :to="{name:'hi1',params:{username:'zy',id:'888'}}">hi1页面</router-link>
      <router-link to="/hi/hi2">hi2</router-link>
    </div>
    <p>{{ $route.name }}</p>
    <router-view name='left' style="float:left;width:50%;height:300px;background-color:#c2c;"></router-view>
    <router-view name='right' style="float:left;width:50%;height:300px;background-color:#ccc;"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
