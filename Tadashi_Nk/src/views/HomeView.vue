<script setup>
import { RouterLink } from 'vue-router'; 

import {useUserStore} from '../stores/user'

const useStore = useUserStore()


</script>

<template>
  <div> RouterView</div>
  <div>
    Hello home
  </div>
  <div>
       Your profile
        <div>Firstname {{ useStore.firstname }}</div>
        <div>Lastname {{ useStore.lastname }}</div>
        <div>Fullname {{ useStore.fullname }}</div>
    </div>
</template>
