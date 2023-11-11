import { defineStore } from 'pinia'



export const useBookStore = defineStore('book', {
    state: () => ({
        books: [{
            name : 'Nont',
            author : 'K'
        }]
    }),
    actions: {
        addBook(bookData) {
            this.books.push(bookData)
        },
        removeBook(bookIndex) {
            this.books.splice(bookIndex, 1)
        },
        editeBook(bookData, bookIndex) {
            this.books.splice(bookIndex, 1, bookData)
        }
    }
})