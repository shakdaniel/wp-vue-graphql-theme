<template>
  <div id="app">
    <h4 v-if="loading">Loading...</h4>
    <app-header :getData="getData"/>
    <router-view :getData="getData"/>
    <!-- <app-content :getData="getData"/> -->
    <!-- <app-footer :getData="getData"/> -->
  </div>
</template>

<script>
import { PAGE_QUERY } from './graphql'
import Header from './components/Header'
import Footer from './components/Footer'
import Page from './components/Page'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-page': Page
  },
  // Local state
  data () {
    return {
      getData: [],
      loading: 0
    }
  },
  // Apollo GraphQL
  apollo: {
    getData: {
      query: PAGE_QUERY,
      update (data) {
        return data.pages.edges
      }
    }
  },
  methods: {
    url: function (value) {
      return value.node.slug === 'home' ? '/' : value.node.slug
    },
    mapTest: function (value) {
      return value.map()
    }
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
