<template>
  <div id="app">
    <Header/>
    <!-- <router-view/> -->
    <Test/>
    <Footer/>
  </div>
</template>

<script>
import Test from '@/components/Test'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Test,
    Header,
    Footer
  }
}
</script>

<style>
html {
  background: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  text-decoration: none;
  font-size: 2em;
  color:royalblue;
  padding: 0 20px
}
</style>
