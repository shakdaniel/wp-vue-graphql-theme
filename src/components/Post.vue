<template>
  <div class='container'>
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  props: {
    post: {
      type: Object,
      default: function () {
        return {
          id: '',
          title: ''
        }
      }
    }
  }
}
</script>
<style>
</style>
