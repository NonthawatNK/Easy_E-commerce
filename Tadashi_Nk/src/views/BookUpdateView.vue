<script setup >
import { ref, reactive, onMounted , computed} from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'

import { useBookStore } from '../stores/book'

const route = useRoute()
const router = useRouter()
const bookStore = useBookStore()


const mode = ref('create')
const bookIndex = ref(-1)

const bookData = reactive({
    name: '',
    author: ''

})

onMounted(() => {
    if (route.name === 'book-edit') {
        mode.value = 'update'
        bookIndex.value = parseInt(route.params.id)

        const cBookStore = bookStore.books[bookIndex.value]
        bookData.name = cBookStore.name
        bookData.author = cBookStore.author
    }
})


const addBook = () => {

    if(mode.value === 'update'){
        bookStore.editeBook(bookData , bookIndex.value)
    }else{
    bookStore.addBook(bookData)

    }
    router.push({ name: "book-list" })
}

const displayButton = computed(()=>{
    if(mode.value === 'create'){
        return 'Add'
    }else{
        return 'Update'
    }
})
</script>

<template>
    Book Update View
    <div>
        <div>
            Book name
            <input type="text" v-model="bookData.name">
        </div>
        <div>
            Book author
            <input type="text" v-model="bookData.author">
        </div>
        <button @click="addBook">{{mode}} book</button>
        <RouterLink :to="{ name: 'book-list' }">back To booklist</RouterLink>
    </div>
</template>