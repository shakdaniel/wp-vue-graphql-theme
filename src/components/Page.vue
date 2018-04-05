<template>
  <div>
    <!-- <span v-for="value in getData" :key="value.node.id">{{ value.node.slug }}</span> -->
    <span>{{ getData }}</span>
    <!-- {{ getData }} -->
    <!-- <ul>
      <li v-for="value in getData" :key="value.node.id">
        <h1>{{ value.node.title }}</h1>
        <div v-html="value.node.content"></div>
        <span>{{ slug }}</span> -->
        <!-- <span>{{ post }}</span> -->
      <!-- </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: ['getData'],
  data () {
    return {
      slug: this.$route.params.slug
    }
  }
}
</script>
<style>
  ul{
    list-style: none;
  }
</style>
