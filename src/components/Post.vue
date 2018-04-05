<template>
  <div>
    <ul>
      <li v-for="value in getData" :key="value.node.id">
        <h1>{{ value.node.title }}</h1>
        <div v-html="value.node.content"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: ['getData'],
  methods: {
    content (value) {
      return value.node.slug === 'home' ? '/' : value.node.slug
    }
  }
}
</script>
<style>
  ul{
    list-style: none;
  }
</style>
