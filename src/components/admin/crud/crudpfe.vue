<template>
<div class="main">
  <h3>Table PFE</h3>
<div class="form">
  <form class="form-inline" >
    <div class="form-group mb-2">
    <label for="name" class="sr-only">Sujet:</label>
    <input type="text" v-model="sujet" name="sujet"  class="form-control" id="name" placeholder="Sujet PFE">
  </div>
  <div class="form-group mb-2">
    <label  class="sr-only">Deadline:</label>
    <input type="datetime" v-model="deadline" name="deadline"  class="form-control" placeholder="Dealdline" >
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label  class="sr-only">comment:</label>
    <input type="text" v-model="comment" name="comment" class="form-control"  placeholder="comments">
  </div>

  <input  type="submit" id='save' class="btn btn-success mb-2" @click="createPFE" value="Creer PFE ">
  <input  type="submit" id='save' class="btn btn-primary mb-2" @click="updatePFE" value="Modifier PFE">

</form>
</div>
<div class="table">
  <!-- -------------------------------------------------------------------- -->
 <table class="table">
        
  <thead class="thead-dark">
    <tr>
      <th scope="col">Sujet PFE :</th>
      <th scope="col">Deadline :</th>
      <th scope="col">Comment Par Encadrant :</th>
      <th scope="col">Encadrant :</th>
      <th scope="col">Etudiant :</th>
      <th scope="col">Action :</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="pfe in pfes" :key="pfe.id" >

      <td>{{pfe.sujet_pfe}}</td>
      <td>{{pfe.deadline_pfe}}</td>
      <td>{{pfe.commentaire_pfe}}</td>
      <td>{{pfe.encadrant}}</td>
      <td>{{pfe.etudiant}}</td>

      <td>
        <input type="submit"  @click="modify(pfe)" class="btn btn-primary" value="Edit">
        <input type="submit" @click="deletePFE(pfe.id)" class="btn btn-danger" value="Delete" >
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
    pfes:Object,

    id:"",
    sujet:"",
    comment:"",
    deadline:"",
  }
},

methods:{
  

  async deletePFE(id){
    const response = await axios.delete('admin/deletepfe/'+id);
    console.log(response);
    this.$router.go(0);
  },

createPFE(e){
        e.preventDefault();

        const response =  axios.post('admin/create-user',{
          name:this.name,
          email:this.email,
          password:this.password,
          password_confirmation:this.password_confirmation,
          user_type:"professor"
        });
        console.log(response);

        window.setTimeout(() => {    //sleep for 3 seconds, then refresh page
          this.$router.go(0)
        }, 3000);

  },

  modify(pfe){
    this.id=pfe.id;
    this.sujet=pfe.sujet_pfe;
    this.deadline=pfe.deadline_pfe;
    this.comment=pfe.commentaire_pfe;
    console.log(this.id+" "+this.sujet+" "+this.deadline+" "+this.comment);

  },

  updatePFE(e){
    e.preventDefault();
 
    console.log(this.id+" "+this.sujet+" "+this.deadline+" "+this.comment);
   
        const response =axios.post('admin/updatepfe/'+this.id,{
            sujet_pfe:this.sujet,
            deadline_pfe:this.deadline,
            commentaire_pfe:this.comment
        });

    console.log(response);

    window.setTimeout(() => {    //sleep for 3 seconds, then refresh page
        this.$router.go(0)
    }, 3000);
  },
 
},
 

 async created(){

  try{
    const response =await axios.get('admin/getpfes');
    console.log(response);
    this.pfes=response.data;
   }
   catch(error){
     console.log(error);
   }}

 }




   
</script>

