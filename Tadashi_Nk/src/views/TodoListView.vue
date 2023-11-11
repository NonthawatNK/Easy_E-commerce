<script setup>

import { onMounted, reactive, ref } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { useListStore } from '../stores/list'


const listStore = useListStore()
const route = useRoute()
const router = useRouter()
const editStatus = ref(false)
const listIndex = ref(-1)

const listData = reactive({
    name: '',
    status: false
})

onMounted(() => {
    if (route.name === 'todolist-edit') {
        listIndex.value = parseInt(route.params.id)
        console.log("index List", listIndex.value)

        const cListStore = listStore.lists[listIndex.value]
        listData.name = cListStore.name
        console.log(cListStore)
    }

})

const crateList = () => {
    listStore.addList(listData)
}


const editeList = async () => {
    editStatus.value = true
    listStore.editeList(listData.name, listIndex.value)

    await (new Promise(resolve => setTimeout(resolve, 2000)))

    editStatus.value = false
    router.push({ name: 'todolist' })

}
</script>
<template>
    <div>
        TodoLists
        <div>
            <input type="text" v-model="listData.name">
            <button @click="crateList">Add</button>
        </div>
        <div>
            <ol>
                <li v-for="(list, index) in listStore.lists">
                    {{ list.name }}
                    <RouterLink :to="{ name: 'todolist-edit', params: { id: index } }">
                        <div v-if="editStatus">
                            <input type="text">rrr
                        </div>
                        <button @click="editeList">Edit</button>
                    </RouterLink>
                    <button>Done</button>
                    <button>Delete</button>
                </li>
            </ol>

        </div>
    </div>
</template>