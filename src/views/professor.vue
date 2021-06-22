<template>
    <div v-bind:id=divId>

        <webapp-sidebar  @changeId="changedId" :user_name="user.name"/> 
<!-- -----------------------NOITHING IN HERE ------------------------------------------->
        <div id="content" >

            <webapp-header :user_name="user.name" :user_email="user.email" />  

            <div class="container-fluid">
            <h2>Bienvenue Pr.{{user.name}}</h2>
            <hr>
                <consulter-options :action_mod="action_mod" />  

                <calendarStudent /> 

                <pfeStudent :pfesujet_tache="tache"/>   
            </div>
        </div>

    </div>
</template>




<script>

import axios from "axios"
import appSidebar from "../components/general/appSidebar.vue";
import appHeader from "../components/general/appHeader.vue";
import consulter from "../components/student/consulter.vue";
import calendarStudent from "../components/student/calendar_etudiant.vue";  //to calendatProf later!!
import pfe_student from "../components/student/pfe_student.vue";   //same + add comment !!



export default{
name:"professor", 

components:{
  'webapp-sidebar':appSidebar,
    'webapp-header':appHeader,
    'consulter-options':consulter,
    'calendarStudent':calendarStudent,
    'pfeStudent':pfe_student,


},
methods:{
  changedId:function(value){
      this.divId=value;
  },
  sleep:function(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
},

data(){
  return {
    user:"",
    divId:"c-app",
    action_mod:"Gerer",
    tache:[['ahmed MELLOUK',"Jeu Android"],
    ["Nora youssefi","Site web Ecommerce ASP"],
    ["john wick","kill people"]]

  }
},



 async created(){
   try{
    const response = await axios.get('auth/user-profile');
    console.log(response.data);
    this.user=response.data;

   }
   catch(error){
      this.$router.go(0);
   }
   
 }}

</script>



<style scoped>
#c-app{
  display: grid;
  grid-template-columns: 224px calc(100% - 224px);
}

#b-app{
  display: grid;
  grid-template-columns: 104px calc(100% - 104px);

}
</style>





<style lang="scss">
 

 

</style>
