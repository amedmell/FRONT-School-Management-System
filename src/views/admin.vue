<template>
    <div v-bind:id=divId>

        <webapp-sidebar  @changeId="changedId" :user_name="user['name']" /> 
<!-- -----------------------NOITHING IN HERE ------------------------------------------->
        <div id="content" >

            <webapp-header :user_name="user.name" :user_email="user.email" />  

            <div class="container-fluid">
            <h2>Bienvenue Mr.{{user.name}}</h2>
            <hr>
                <consulter-admin
                @handleCrudEtud="handleCrudEtud" 
                @handleCrudProf="handleCrudProf"
                :action_mod="action" /> 
                <hr>
                <div :class=visEtud >
                    <crudstudent  />
                    <hr>
                </div> 

                <div :class=visProf >
                    <crudprof  />
                    <hr>
                </div> 

<div class="consult">
    <calendarStudent /> 
</div>

                <!-- <pfeStudent :pfesujet_tache="tache"/>    -->
            </div>
            
        </div>

    </div>
    
</template>




<script>

import axios from "axios"
import appSidebar from "../components/general/appSidebar.vue";
import appHeader from "../components/general/appHeader.vue";
import consulter_admin from "../components/admin/consulter_admin.vue";
import calendarStudent from "../components/student/calendar_etudiant.vue";
import crudstudent from "../components/admin/crud/crudstudent.vue";
import crudprof from "../components/admin/crud/crudprof.vue";

// import pfe_student from "../components/student/pfe_student.vue";



export default{
name:"etudiant", 

components:{
  'webapp-sidebar':appSidebar,
    'webapp-header':appHeader,
    'consulter-admin':consulter_admin,
    'calendarStudent':calendarStudent,
    'crudstudent':crudstudent,
    'crudprof':crudprof

    // 'pfeStudent':pfe_student,


},
methods:{
    changedId:function(value){
      this.divId=value;
  },

  handleCrudEtud:function(value,value2){
    console.log("visetud: "+value);
        console.log("visprof: "+value2);

      this.visEtud=value;
      this.visProf=value2;
  },
  handleCrudProf:function(value,value2){
      console.log("visprof: "+value);
        console.log("visetud: "+value2);

      this.visProf=value;
      this.visEtud=value2;
  }

},

data(){
  return {
    user:"",
    visEtud:"hidden",
    visProf:"hidden",
    divId:"c-app",
    action:"CRUD",
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


.visible{
    display:block;
}
.hidden{
    display:none;
}

</style>





<style lang="scss">
 

 

</style>
