<template>
    <div v-bind:id=divId>

        <webapp-sidebar  @changeId="changedId" :user_name="user['name']" /> 
<!-- -----------------------NOITHING IN HERE ------------------------------------------->
        <div id="content" >

            <webapp-header :user_name="user.name" :user_email="user.email" />  

            <div class="container-fluid">
            <h2>Bienvenue {{user.name}}</h2>
            <hr>
                <consulter-admin

                @handleCrudEtud="handleCrudEtud" 
                @handleCrudProf="handleCrudProf"
                @handleCrudPfe="handleCrudPfe"
                @handleCrudMod="handleCrudMod"
                @handleCrudNote="handleCrudNote"

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

                <div :class=visPfe>
                  <crudpfe />
                  <hr>
                </div>

                <div :class=visMod>
                    <crudmodule />
                    <hr>
                </div>

                <div :class=visNote>
                    <crudnote />
                    <hr>
                </div>

                <div class="consult">
                    <calendarStudent /> 
                </div>

            </div>
            
        </div>

    </div>
    
</template>




<script>

import axios from "axios";
import appSidebar from "../components/general/appSidebar.vue";
import appHeader from "../components/general/appHeader.vue";
import consulter_admin from "../components/admin/consulter_admin.vue";
import calendarStudent from "../components/student/calendar_etudiant.vue";
import crudstudent from "../components/admin/crud/crudstudent.vue";
import crudprof from "../components/admin/crud/crudprof.vue";
import crudpfe from "../components/admin/crud/crudpfe.vue";
import crudmodule from "../components/admin/crud/crudmodule.vue";
import crudnote from "../components/admin/crud/crudnote.vue";

// import pfe_student from "../components/student/pfe_student.vue";



export default{
name:"etudiant", 

components:{
    'webapp-sidebar':appSidebar,
    'webapp-header':appHeader,
    'consulter-admin':consulter_admin,
    'calendarStudent':calendarStudent,
    'crudstudent':crudstudent,
    'crudprof':crudprof,
    'crudpfe':crudpfe,
    'crudmodule':crudmodule,
    'crudnote':crudnote


},
methods:{
    changedId:function(value){
      this.divId=value;
  },

  handleCrudEtud:function(value,value2,value3,value4,value5){
      this.visEtud=value;  //correct
      this.visProf=value2;
      this.visPfe=value3;
      this.visMod=value4;
      this.visNote=value5;
  },
  handleCrudProf:function(value,value2,value3,value4,value5){
      this.visProf=value;  //correct
      this.visEtud=value2;
      this.visPfe=value3;
      this.visMod=value4;
      this.visNote=value5;

  },
  handleCrudPfe:function(value,value2,value3,value4,value5){
      this.visPfe=value;  //correct
      this.visEtud=value2;
      this.visProf=value3;
      this.visMod=value4;
      this.visNote=value5;

  },
  handleCrudMod:function(value,value2,value3,value4,value5){
      this.visMod=value;   //correct
      this.visPfe=value4;  
      this.visEtud=value2;
      this.visProf=value3;
      this.visNote=value5;

  },
   handleCrudNote:function(value,value2,value3,value4,value5){
      this.visNote=value;   //correct
      this.visEtud=value2;
      this.visProf=value3;
      this.visPfe=value4;  
      this.visMod=value5;
  }





},

data(){
  return {
    user:"",
    visEtud:"hidden",
    visProf:"hidden",
    visPfe:"hidden",
    visMod:"hidden",
    visNote:"hidden",

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
