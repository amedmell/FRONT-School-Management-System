<template>
    <div v-bind:id=divId>

        <webapp-sidebar  @changeId="changedId" :user_name="user['name']" /> 
<!-- -----------------------NOITHING IN HERE ------------------------------------------->
        <div id="content" >

            <webapp-header :user_name="user.name" :user_email="user.email" />  

            <div class="container-fluid">
            <h2>Bienvenue {{user.name}}</h2>
            <hr>
                <consulter-options
                @handleModule="handleModule"
                @handlePfe="handlePfe"

                 :action_mod="action" />  

                <div :class=modules>
                  <modules />
                </div>
                <div :class=pfes>
                  <pfes />
                </div>
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
import consulter from "../components/student/consulter_student.vue";
import calendarStudent from "../components/student/calendar_etudiant.vue";
import pfe_student from "../components/student/pfe_student.vue";
import modules from "../components/student/modules.vue";

import pfes from "../components/student/pfe.vue";


export default{
name:"etudiant", 

components:{
  'webapp-sidebar':appSidebar,
    'webapp-header':appHeader,
    'consulter-options':consulter,
    'calendarStudent':calendarStudent,
    'pfeStudent':pfe_student,
    'modules':modules,
    'pfes':pfes


},
methods:{
    changedId:function(value){
      this.divId=value;
  },

   handleModule:function(value,hidden){
    this.modules=value;
    this.pfes=hidden;
    console.log("modules : "+value+"\n"+"Pfes : "+hidden);
  },
  handlePfe:function(value,hidden){
    this.pfes=value;
    this.modules=hidden;
    console.log("PFES : "+value+"\n"+"Modules : "+hidden);

  }
},

data(){
  return {
    user:"",
    divId:"c-app",
    action:"Consulter",
    modules:"hidden",
    pfes:"hidden",
    tache:[
        [
            "prof John",
            "java EE - 14:00"
    ],
    [
            "prof achak",
            "Web dev - 10:00"
    ],
    [
            "prof zili",
            "Android - 16:00"
    ],

        
    ]
  }
},
 

 async created(){
  //  set
try{
      const response =await axios.get('auth/user-profile');
      this.user=response.data;
      console.log(response.data);
   }
   catch(error){
      this.$router.go(0);
   }}
      

    
    
 }

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
