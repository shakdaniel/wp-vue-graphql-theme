<template>
  <div class="footer">
    <span v-if="loading">...</span>
    <nav>
      <a v-for="value in allPages" :key="value.node.id" :href="value.node.slug">{{ value.node.title }}</a>
    </nav>
  </div>
</template>

<script>
import { PAGE_QUERY } from '../graphql'
export default {
  name: 'Footer',
  data () {
    return {
      allPages: [],
      loading: 0
    }
  },
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
<style scoped>
  a{
    color: red;
  }
</style>
