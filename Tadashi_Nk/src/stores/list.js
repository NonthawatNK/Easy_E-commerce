import { defineStore } from 'pinia'

export const useListStore = defineStore('list', {
    state: () => ({
        lists: [{
            name : 'กินข้าว',
            status : false
        }]
    }),
    actions: {
        addList(ListData) {
            this.lists.push(ListData)
        },
        removeList(listIndex) {
            this.lists.splice(listIndex, 1)
        },
        editeList(listData, listIndex) {
            this.lists.splice(listIndex, 1, listData)
        }
    }
})