
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{

  state:() =>({
    firstname: 'test',
    lastname:'ir',
  }),

  getters:{
    fullname (state){
      return `${state.firstname} ${state.lastname}`
    }
  },
  actions:{
    changeName (formData){
      this.firstname = formData.firstname
      this.lastname = formData.lastname
    }
  }


  
})