<template>
<div class="main">
  <h3>Table NOTES</h3>
<div class="form">

  <form class="form-inline" >
      <div class="form-group mb-2 ">
    <label  class="sr-only">Etudiant:</label>
    <input type="text"  v-model="etudiant" name="Etudiant"  class="form-control" placeholder="Etudiant" >
  </div>
    <div class="form-group mb-2">
    <label for="name" class="sr-only">Note:</label>
    <input type="number" v-model="note" name="Note"  class="form-control" id="name" placeholder="Note">
  </div>
  <div class="form-group mb-2 ">
    <label  class="sr-only">Mention:</label>
    <input type="text"  v-model="mention" name="mention"  class="form-control" placeholder="mention" >
  </div>
  <div class="form-group mb-2 ">
    <label  class="sr-only">Module:</label>
    <input type="text"  v-model="mod" name="module"  class="form-control" placeholder="module" >
  </div>
 
  <input  type="submit" id='save' class="btn btn-success mb-2" @click="createNOTE" value="Ajouter NOTE ">
  <input  type="submit" id='save' class="btn btn-primary mb-2" @click="updateNOTE" value="Modifier NOTE">

</form>
</div>
<div class="table">
  <!-- -------------------------------------------------------------------- -->
 <table class="table">
        
  <thead class="thead-dark">
    <tr>
      <th scope="col">Etudiant :</th>
      <th scope="col">Note :</th>
      <th scope="col">Mention :</th>
      <th scope="col">Module :</th>
      <th scope="col">Action :</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="note in notes" :key="note.id" >

      <td>{{note.etudiant}}</td>
      <td>{{note.note}}</td>
      <td>{{note.mention}}</td>
      <td>{{note.module}}</td>

      <td>
        <input type="submit"  @click="modify(note)" class="btn btn-primary" value="Edit">
        <input type="submit" @click="deleteNOTE(note.id)" class="btn btn-danger" value="Delete" >
      </td>

    </tr>
  </tbody>
</table>
</div>

  </div>

</template>




<script>

import axios from "axios"




export default{
name:"readstudent", 


data(){
  return{
    notes:Object,
    id:"",
    mod:"",
    note:"",
    mention:"",
    etudiant:""
  }
},

methods:{
  

  async deleteNOTE(id){
    const response = await axios.delete('admin/deletenote/'+id);
    console.log(response);
    this.$router.go(0);
  },


  modify(note){
    this.id=note.id;
    this.note=note.note;
    this.mod=note.module;
    this.mention=note.mention;
    this.etudiant=note.etudiant;
  },

  updateNOTE(e){
    e.preventDefault();
    
        const response =axios.post('admin/updatenote/'+this.id,{
            note:this.note,
            mention:this.mention,
        });

    console.log(response);

    window.setTimeout(() => {    //sleep for 3 seconds, then refresh page
        this.$router.go(0)
    }, 3000);
  },
 
},
 

 async created(){

  try{
    const response =await axios.get('admin/getnotes');
    console.log(response);
    this.notes=response.data;
   }
   catch(error){
     console.log(error);
   }}

 }













   
</script>

