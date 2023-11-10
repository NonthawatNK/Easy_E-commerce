<script setup>


import { ref  ,defineProps} from 'vue';

const count = ref(0)


const increaseCounter = () =>{
    count.value = count.value + 1
}


defineProps({
    messageText : String,
    changeMassage : Function
})
</script>
<template>

    <div>Hello {{ messageText }}</div>
    <div> 
        <input type="text" v-model="message">
        <button @click="changeMassage(message)">changeMassage from counter</button>
    </div>
<button @click="increaseCounter">Click {{ count }}</button>
</template>