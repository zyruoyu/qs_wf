<template>
  <div id="app">
      <count-dowm/>
      <count-foots/>
  </div>
</template>

<script>
import CountDowm from './components/CountDown'
import CountFoote from './components/CountFoote'
import HellowWorld from './components/HellowWorld'
export default {
    name:'app',
  components: {
      CountDowm,
      CountFoots
  }
}
</script>

<style lang="stylus">
@import "../styl/style.styl"
</style>
