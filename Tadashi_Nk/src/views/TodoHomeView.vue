<script setup>
import { onMounted, ref } from 'vue'
import { useTodoStore } from '../stores/todo'
import { RouterLink } from 'vue-router'


const todoStore = useTodoStore()
const todoText = ref('')
const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    await todoStore.loadTodos()
    isLoading.value = false

})

const addTodo = async (todoText) => {
    try {
        isLoading.value = true
        await todoStore.addTodo(todoText)
        isLoading.value = false
    } catch (error) {
        console.log('error', error)
    }
}

const editStatus = async (todoData, id) => {
    try {
        const updateData = {
            name: todoData.name,
            status: todoData.status
        }
        isLoading.value = true
        await todoStore.editTodo(updateData, id)
        isLoading.value = false
    } catch (error) {
        console.log('error', error)
    }

}

const deletetodo = async (id) => {
    try {
        isLoading.value = true
        await todoStore.removeTodo(id)
        await todoStore.loadTodos()
        isLoading.value = false
    } catch (error) {
        console.log('error', error)
    }
}

</script>

<template>
    <div>
        <div>
            <input type="text" v-model="todoText">
            <button @click="addTodo(todoText)">Add</button>
        </div>
        <div>
            <h2 v-if="isLoading"> Loading</h2>
        </div>
        <ol>
            <li v-for=" todo in todoStore.list">
                {{ todo.name }}
                <select v-model="todo.status" @change="editStatus(todo, todo.id)">
                    <option>Select status</option>
                    <option v-for="status in todoStore.status" :value="status">
                        {{ status }}
                    </option>
                </select>
                <RouterLink :to="{ name: 'todo-edit', params: { id: todo.id } }">
                    <button>Edit</button>
                </RouterLink>
                <button @click="deletetodo(todo.id)">Delete</button>
            </li>
        </ol>
    </div>
</template>