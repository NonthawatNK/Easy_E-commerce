<script setup>
import { onMounted, ref } from 'vue';
import { useTodoStore } from '../stores/todo'
import { useRoute, RouterLink } from 'vue-router'



const todoStore = useTodoStore()
const route = useRoute()
const todoId = ref(-1)
const isLoaded = ref(false)
const isEdit = ref(false)
const isLoading = ref(false)
onMounted(async () => {
    await todoStore.loadTodo(route.params.id)
    isLoaded.value = true
    todoId.value = parseInt(route.params.id)

})


const editeTodo = async (todoData) => {
    try {
        isLoading.value = true
        const bodyData = {
            name: todoData.name,
            status: todoData.status
        }
        await todoStore.editTodo(bodyData, todoId.value)
        isLoading.value = false
        isEdit.value = true
        alert('edit complete !')
    } catch (error) {
        console.log('error', error)
    }
}
</script>


<template>
    <div>
        Edite
        <div>
            <h2 v-if="isLoading"> Loading...</h2>
        </div>
        <div v-if="isLoaded">
            Id {{ todoId }}
            <div>
                <input type="text" v-model="todoStore.selecedTodo.name">
            </div>
            <div>
                Status
                <div>
                    <select v-model="todoStore.selecedTodo.status">
                        <option>Select status</option>
                        <option v-for="status in todoStore.status" :value="status">
                            {{ status }}
                        </option>
                    </select>
                </div>
                <button @click="editeTodo(todoStore.selecedTodo)">Edit</button>

            </div>
        </div>
        <div v-else>
            <h2>Loading ...</h2>
        </div>
        <div v-if="isEdit">
            <RouterLink :to="{ name: 'todo-list' }">
                <button @click="!isEdit">Back</button>
            </RouterLink>
        </div>
    </div>
</template>