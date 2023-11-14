import { defineStore } from 'pinia'
import axios from "axios";

const BASE_URL = 'https://6550d7967d203ab6626e3bde.mockapi.io'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    list: [],
    selecedTodo: {},
    status: ['Pending', 'Doing', 'Done']
  }),
  actions: {
    async loadTodos() {
      try {
        const response = await axios.get(`${BASE_URL}/todos`)
        this.list = response.data
        console.log('load todo list complete')
      } catch (error) {
        console.log("Massage error", error)
      }
    },
    async loadTodo(id) {
      try {
        const response = await axios.get(`${BASE_URL}/todos/${id}`)
        this.selecedTodo = response.data
        console.log(this.selecedTodo)
        console.log('load todo by id complete')
      } catch (error) {
        console.log("Massage error", error)
      }
    },
    async addTodo(todoText) {
      const bodyData = {
        name: todoText,
        status: 'Pending'
      }
      try {
        const response = await axios.post(`${BASE_URL}/todos`, bodyData)
        this.list.push(response.data)
        console.log('add todo complete')
      } catch (error) {
        console.log("Massage error", error)
      }
    },

    async editTodo(todoData, id) {
      try {
        const response = await axios.put(`${BASE_URL}/todos/${id}`, todoData)
        console.log('edit todo complete')
      } catch (error) {
        console.log("Massage error", error)
      }
    },
    async removeTodo(id) {
      try {
        const response = await axios.delete(`${BASE_URL}/todos/${id}`)
        console.log('delete todo complete')
      } catch (error) {
        console.log("Massage error", error)
      }
    }
  }
})