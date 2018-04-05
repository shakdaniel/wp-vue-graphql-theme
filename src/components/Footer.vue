<template>
  <nav class="footer">
    <a v-for="value in getData" :key="value.node.id" :href="$parent.url(value)">
      {{ value.node.title }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'Footer',
  props: ['getData']
}
</script>
<style scoped>
  a{
    color: red;
  }
</style>
