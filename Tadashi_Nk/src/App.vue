<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <div class="navbar bg-base-100 ">
      <div class="navbar-center hidden lg:flex mx-auto">
        <ul class="menu menu-horizontal px-1 ">
          <li><a>
              <RouterLink to="/">Home</RouterLink>
            </a></li>
          <li><a>
              <RouterLink to="/profile"> Profile</RouterLink>
            </a></li>
          <li><a>
              <RouterLink to="/booklist"> Booklist</RouterLink>
            </a></li>
          <li><a>
              <RouterLink to="/book/create"> BookCreate</RouterLink>
            </a></li>
          <li><a>
              <RouterLink to="/todo"> Todolist</RouterLink>
            </a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="max-w-3xl mx-auto my-2">
    <RouterView />
  </div>
</template>
<style></style>