<template>
  <div>
      <p>{{message}}-{{$route.params.username}}-{{$route.params.id}}</p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'hi',
    data(){
        return{
            message: 'I am zy'
        }
    }
}
</script>

<style>

</style>
