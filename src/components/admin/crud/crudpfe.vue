<template>
<div class="main">
  <h3>Table PFE</h3>
{{this.etudiant}}
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
    </tr>
  </thead>
  <tbody>
    <tr v-for="(pfe) in pfes" :key="pfe.id" >

      <td>{{pfe.sujet_pfe}}</td>
      <td>{{pfe.deadline_pfe}}</td>
      <td>{{pfe.commentaire_pfe}}</td>
      <td>{{ pfe.encadrant }}</td>
      <td>{{ pfe.etudiant }}</td>

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
    pfes:[],
    encadrant:[],
    etudiant:[],
    sujet:"",
    comment:"",
    deadline:"",
    index:0,
  }
},

methods:{
    increment(i){
        i++;
        return i;
    },


  async deletePFE(id){
    const response = await axios.delete('admin/delete-prof/'+id);
    console.log(id);
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
  modify(user){
    this.userId=user.id;
    this.name=user.name;
    this.email=user.email;
    this.password=user.password;
  },

  updatePFE(e){
    e.preventDefault();
 
    console.log(this.userId+" "+this.name+" "+this.email+" "+this.password);
   
        const response =axios.post('admin/update-prof/'+this.userId,{
            new_name:this.name,
            new_email:this.email,
            new_password:"rootroot"
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
    this.pfes=response.data;
   
    console.log(this.pfes);
        

    //const student =await axios.get('admin/getetud/'+this.pfes[0].etudiant_id);
    // (this.pfes).forEach(pfe => {
        
    //     window.setTimeout(() => {    //sleep for 3 seconds, then refresh page
    //     //get etudiant
    //     const student =axios.get('admin/getetud/'+pfe.etudiant_id);
    //     console.log(student.data);
    //     //this.etudiant.push(student.data);

    //     //get encadrant
    //     const prof =axios.get('admin/getprof/'+pfe.id_encadrant);
    //     console.log(prof.data);

    //     //this.encadrant.push(prof.data);
    // }, 1000);

    // });
    //console.log(student.data);
    

   }
   catch(error){
     console.log(error);
      // this.$router.go(0);
   }}
      

    
    
 }



// (this.pfes).forEach(pfe => {
    //     //get etudiant
    //     const student =axios.get('admin/getetud/'+pfe.etudiant_id);
    //     console.log(student);
    //     this.etudiant.push(student.data);

    //     //get encadrant
    //     const prof =axios.get('admin/getprof/'+pfe.id_encadrant);
    //     this.encadrant.push(prof.data);

    // });
    //console.log(this.etudiant);
    //console.log(this.encadrant);

    // (this.etudiant).forEach(pfe => {
    //     console.log(pfe);
    //     console.log('hello');
    
    // });
   
</script>

