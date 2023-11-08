<script setup>
import { reactive } from 'vue';


const gendersList = ['ชาย', 'หญิง', 'ไม่ระบุ']
const interestsList = ['หนังสือ', 'กีฬา', 'การเมือง']

const formData = reactive({
  interests : []
})


const submitForm = () =>{
console.log(formData)
}
</script>

<template>
  <div>
    <div>Firstname</div>
    <input type="text" name="firstname" v-model="formData.firstname">
  </div>
  <div>
    <div>Lactname</div>
    <input type="text" name="Lastname" v-model="formData.lastname">
  </div>

  <div>
    <div>Gender</div>
    <div v-for="Gender in gendersList" class="gender">
      <input type="radio" name="gender" :value="Gender" v-model="formData.gender">{{ Gender }}
    </div>
  </div>

  <div>
    <div>Interests</div>
    <div v-for="interest in interestsList">
      <input type="checkbox" name="interest" :value="interest" v-model="formData.interests"> {{ interest }}
    </div>
  </div>


  <div>
    <div>Description</div>
    <textarea></textarea>
  </div>

  <button @click="submitForm()">ส่ง Form</button>
</template>

<style>


</style>