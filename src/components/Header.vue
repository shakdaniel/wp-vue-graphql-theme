<template>
  <div class="header">
    <span v-if="loading">...</span>
    <nav>
      <!-- className={currentPage === page.slug ? "active" : ""} -->
      <a v-for="value in allPages" :key="value.node.id" :href="url(value)">{{ value.node.title }}</a>
    </nav>
  </div>
</template>

<script>
import { PAGE_QUERY } from '../graphql'
export default {
  name: 'Header',
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
  },
  methods: {
    url (value) {
      return value.node.slug === 'home' ? '/' : value.node.slug
    }
  }
}
</script>
<style>
</style>
