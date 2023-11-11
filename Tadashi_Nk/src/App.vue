<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    Page:
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/profile"> Profile</RouterLink>
    <RouterLink to="/booklist"> Booklist</RouterLink>
    <RouterLink to="/book/create">  BookCreate</RouterLink>
    <RouterLink to="/todolist"> Todolist</RouterLink>
    <RouterView />
  </div>
</template>
<style></style>