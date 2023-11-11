<script setup>
import { onMounted, ref , watch} from 'vue'

import { RouterLink, useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'


const rounter = useRoute()
const useStore = useUserStore()


const isUpdate = ref(true)
const firstname = ref('')
const lastname = ref('')


const backToHome = () => {
    rounter.push({ name: 'home' })

}
onMounted(() => {
    firstname.value = useStore.firstname
    lastname.value = useStore.lastname

})

watch([firstname,lastname] , (newData)=>{
    if(newData[0] !== useStore.firstname || newData[1] !== useStore.lastname){
        isUpdate.value = false
    }
})

const updateProfile = () => {

    console.log(firstname.value)
    console.log(lastname.value)
    const formData = {
        firstname: firstname.value,
        lastname: lastname.value
    }
    useStore.changeName(formData)
    isUpdate.value = true
}
</script>

<template>
    <div>
        Profile update from store
        <div v-if="isUpdate" style="color: blue;">
            Profile up to date
        </div>
        <div>Firstname {{ useStore.firstname }}</div>
        <div>Lastname {{ useStore.lastname }}</div>
        <div>Fullname {{ useStore.fullname }}</div>


    </div>
    <div>
        Profile vue
        <div>Firstname <input type="text" v-model="firstname"></div>
        <div>Lastname <input type="text" v-model="lastname"></div>
        <div>
            <RouterLink to="/">
                <button>Back to Home</button>
            </RouterLink>

        </div>
        <button @click="updateProfile">Update Profile</button>
    </div>
</template>