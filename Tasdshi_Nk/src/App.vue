<script setup>
import { computed, ref, onMounted, watch } from 'vue';




const isLoading = ref(false)
const isUpdated = ref(false)
const isValid = ref(false)

const Firstname = ref('')
const Lastname = ref('')
const email = ref('')
const errors = ref({})


const validateName = (name) => {
    const re = /\d/
    return !re.test(name)
}

const validateEmail = (email) => {
    return email.includes('@')
}

const Fullname = computed(() => {
    return `${Firstname.value}  ${Lastname.value}`
})

const upDtaeProfile = async () => {
    isLoading.value = true
    await (new Promise(resolve => setTimeout(resolve, 2000)))
    isLoading.value = false
    isUpdated.value = true

}

watch([Firstname, Lastname, email], () => {
    isValid.value = true
    isUpdated.value = false
    errors.value = {}

    if (!validateName(Firstname.value)) {
        isValid.value = false
        errors.value.Firstname = 'Firstname should not contain numbers'
    }

    if (!validateName(Lastname.value)) {
        isValid.value = false
        errors.value.Lastname = 'Last name should not contain numbers'
    }

    if (!validateEmail(email.value)) {
        isValid.value = false
        errors.value.email = 'Email is not valid'
    }
})


onMounted(() => {
    Firstname.value = 'test',
    Lastname.value = 'นามสกุล',
    email.value = 'test@email.com'
})
</script>
<template>
    <div class="container">
        <div>
            <div>Fullname : {{ Fullname }}</div>
            <div>email : {{ email }}</div>
        </div>
        <div>
            <div>Firstname: </div>
            <input type="text" v-model="Firstname">
            <div class="error">{{ errors.Firstname }}</div>

        </div>
        <div>
            <div>Lastname: </div>
            <input type="text" v-model="Lastname">
            <div class="error">{{ errors.Lastname }}</div>

        </div>
        <div>
            <div>Email:</div>
            <input type="text" v-model="email">
            <div class="error">{{ errors.email }}</div>
        </div>
        <div class="loading" v-if="isLoading">
            Loading..
        </div>
        <button :disabled="!isValid" class="button" @click="upDtaeProfile()">Update profile</button>
        <div v-if="isUpdated">
            is Updated
        </div>
    </div>
</template>
<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 320px;
    margin: 0 auto;
}

.container>div {
    width: 100%;
}

.button {
    width: 100%;
    height: 24px;
    margin-top: 20px;
}

.loading {
    background-color: azure;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    margin: 10px 0;
}

.error {
    color: red;
}

input {
    width: 100%;
}
</style>