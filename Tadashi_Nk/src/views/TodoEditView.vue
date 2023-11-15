<script setup>
import { onMounted, ref } from 'vue';
import { useTodoStore } from '../stores/todo'
import { useRoute, RouterLink } from 'vue-router'
import Loading from '../components/Loding.vue'


const todoStore = useTodoStore()
const route = useRoute()
const todoId = ref(-1)
const isLoaded = ref(false)
const isEdit = ref(false)
const isLoading = ref(false)
const isUpdated = ref(false)
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
        isUpdated.value = true
        setTimeout(()=>{
            isUpdated.value = false
        },3000)
    } catch (error) {
        console.log('error', error)
    }
}
</script>


<template>
    <div class="w-1/2 mx-auto">
        <div  class="toast toast-top toast-start my-10">
            <div v-if="isUpdated" class="alert alert-success">
                <span>Update successful.</span>
            </div>
        </div>
        Edite
        <div>
            <div v-if="isLoading">
                <Loading></Loading>
            </div>
        </div>

        <div v-if="isLoaded">
            Id <div class="badge badge-secondary">{{ todoId }}</div>
            <div class="form-control w-full ">
                <label class="label">
                    <span class="label-text">Name</span>
                </label>
                <input type="text" placeholder="Type name todo" class="input input-bordered w-full "
                    v-model="todoStore.selecedTodo.name" />
                <label class="label">
                </label>
            </div>
            <div class="form-control w-full ">
                <label class="label">
                    <span class="label-text">Status</span>
                </label>
                <select class="select select-bordered" v-model="todoStore.selecedTodo.status">
                    <option>Select status</option>
                    <option v-for="status in todoStore.status" :value="status">
                        {{ status }}
                    </option>
                </select>
                <label class="label">
                </label>
            </div>
            <div class="flex">
                <button class="btn btn-primary w-full mt-4" @click="editeTodo(todoStore.selecedTodo)">Edit</button>
            </div>
        </div>
        <div v-else>
            <Loading></Loading>
        </div>
        <div v-if="isEdit">
            <RouterLink :to="{ name: 'todo-list' }">
                <button class="btn btn-primary w-full mt-4" @click="!isEdit">Back</button>
            </RouterLink>
        </div>
    </div>
</template>