<template>
  <div>
    <h1 v-if="loading">Loading...</h1>
    <ul>
      <li v-for="value in allPages" :key="value.node.id">
        <h1>{{ value.node.title }}</h1>
        <h2>{{ value.node.menuOrder }}</h2>
        <!-- <p><span v-html="rawHtml">{{ value.node.content }}</span></p> -->
        <p v-html="value.node.content"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { PAGE_QUERY } from '../graphql'

export default {
  name: 'Test',
  // Local state
  data () {
    return {
      allPages: [],
      loading: 0
    }
  },
  // Apollo GraphQL
  apollo: {
    allPages: {
      query: PAGE_QUERY,
      update (data) {
        return data.pages.edges
      }
    }
  }
}
</script>
<style>
  ul{
    list-style: none;
  }
</style>
