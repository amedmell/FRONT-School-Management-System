<template>
<div class="main">
  <h3>Table Etudiant</h3>

<div class="form">
  <form class="form-inline" >
    <div class="form-group mb-2">
    <label for="name" class="sr-only">Nom Complet:</label>
    <input type="text" v-model="name" name="name"  class="form-control" id="name" >
  </div>
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" v-model="email" name="email"  class="form-control" id="staticEmail2" >
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" v-model="password" name="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="cinputPassword2" class="sr-only">Confirmer Mot de passe</label>
    <input type="password" v-model="password_confirmation" name="password_confirmation" class="form-control" id="cinputPassword2" placeholder="Confirm Password">
  </div>

  <input  type="submit" id='save' class="btn btn-success mb-2" @click="createStudent" value="Creer Etudiant ">
  <input  type="submit" id='save' class="btn btn-primary mb-2" @click="updateUser" value="Modifier Etudiant ">

</form>
</div>
<div class="table">
  <!-- -------------------------------------------------------------------- -->
 <table class="table">
        
  <thead class="thead-dark">
    <tr>
      <th scope="col">Nom Complet:</th>
      <th scope="col">Email :</th>
      <th scope="col">Semestre:</th>
      <th scope="col"> Action </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id" >
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>S1</td>
      <td>
        <input type="submit"  @click="modify(user)" class="btn btn-primary" value="Edit">
        <input type="submit" @click="deleteUser(user.id)" class="btn btn-danger" value="Delete" >
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
    users:Object,
    name:"",
    email:"",
    password:"",
    userId:"",
    password_confirmation:"",
  }
},

methods:{


  async deleteUser(id){
    const response = await axios.delete('admin/delete-etud/'+id);
    console.log(id);
    console.log(response);
      this.$router.go(0);
  },

  createStudent(e){
        e.preventDefault();

        const response =  axios.post('admin/create-user',{
          name:this.name,
          email:this.email,
          password:this.password,
          password_confirmation:this.password_confirmation,
          user_type:"student"
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

  updateUser(e){
    e.preventDefault();
 
    console.log(this.userId+" "+this.name+" "+this.email+" "+this.password);
   
        const response =axios.post('admin/update-etud/'+this.userId,{
            new_name:this.name,
            new_email:this.email,
            new_password:"rootroot"
        });

    console.log(response);

    window.setTimeout(() => {    //sleep for 3 seconds, then refresh page
        this.$router.go(0)
    }, 3000);


    
    
        


  }
},
 

 async created(){

  try{
      const response =await axios.get('admin/getalletud');
      this.users=response.data;
      console.log(this.users);
   }
   catch(error){
     console.log(error);
      // this.$router.go(0);
   }}
      

    
    
 }

</script>

