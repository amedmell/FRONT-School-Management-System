<template>
<div class="main">
  <h3>Table MODULES</h3>
<div class="form">
  <form class="form-inline" >
    <div class="form-group mb-2">
    <label for="name" class="sr-only">Modules:</label>
    <input type="text" v-model="mod" name="sujet"  class="form-control" id="name" placeholder="Sujet PFE">
  </div>
  <div class="form-group mb-2 ">
    <label  class="sr-only">Professeur:</label>
    <input type="text"  v-model="prof" name="deadline"  class="form-control" placeholder="Dealdline" >
  </div>

  <input  type="submit" id='save' class="btn btn-success mb-2" @click="createMOD" value="Creer MODULE ">
  <input  type="submit" id='save' class="btn btn-primary mb-2" @click="updateMOD" value="Modifier MODULE">

</form>
</div>
<div class="table">
  <!-- -------------------------------------------------------------------- -->
 <table class="table">
        
  <thead class="thead-dark">
    <tr>
      <th scope="col">Professeur :</th>
      <th scope="col">Modules :</th>
      <th scope="col">Action :</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="mod in modules" :key="mod.id" >

      <td>{{mod.nom_module}}</td>
      <td>{{mod.prof}}</td>

      <td>
        <input type="submit"  @click="modify(mod)" class="btn btn-primary" value="Edit">
        <input type="submit" @click="deleteMOD(mod.id)" class="btn btn-danger" value="Delete" >
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
    modules:Object,
    id:"",
    mod:"",
    prof:"",
  }
},

methods:{
  

  async deleteMOD(id){
    const response = await axios.delete('admin/deletemod/'+id);
    console.log(response);
    this.$router.go(0);
  },


  modify(mod){
    this.id=mod.id;
    this.mod=mod.nom_module;
    this.prof=mod.prof;
    console.log(this.id+" "+this.mod+" "+this.prof);
  },

  updateMOD(e){
    e.preventDefault();
    
        const response =axios.post('admin/updatemod/'+this.id,{
            nom_module:this.mod,
        });

    console.log(response);

    window.setTimeout(() => {    //sleep for 3 seconds, then refresh page
        this.$router.go(0)
    }, 3000);
  },
 
},
 

 async created(){

  try{
    const response =await axios.get('admin/getmodules');
    console.log(response);
    this.modules=response.data;
   }
   catch(error){
     console.log(error);
   }}

 }




   
</script>

