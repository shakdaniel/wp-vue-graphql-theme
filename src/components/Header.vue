<template>
  <nav class="header">
    <!-- <router-link v-for="value in getData" :key="value.node.id" :to="url(value)" class="link" exact>{{ value.node.title }}</router-link> -->
    <router-link class="link" :to="{name: 'Home'}" exact>Home</router-link>
    <router-link class="link" :to="{name: 'Projects'}">Projects</router-link>
    <router-link class="link" :to="{name: 'About'}">About</router-link>
    <router-link class="link" :to="{name: 'Blog'}">Blog</router-link>
    <router-link class="link" :to="{name: 'Contact'}">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: ['getData']
}
</script>

<style>
  .router-link-exact-active{
    color: aqua
  }
</style>
