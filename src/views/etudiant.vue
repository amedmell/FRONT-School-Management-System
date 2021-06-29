<template>
    <div v-bind:id=divId>

        <webapp-sidebar  @changeId="changedId" :user_name="user['name']" :email="user.email" /> 
<!-- -----------------------NOITHING IN HERE ------------------------------------------->
        <div id="content" >

            <webapp-header :user_name="user.name" :user_email="user.email" />  

            <div class="container-fluid">
            <h2>Bienvenue {{user.name}}</h2>
            <hr>
                <consulter-options
                @handleModule="handleModule"
                @handlePfe="handlePfe"
                @handleNote="handleNote"

                 :action_mod="action" />  
<hr>
                <div :class=modules>
                  <modules />
                </div>

                <div :class=pfes>
                  <pfes />
                </div>

                <div :class=notes>
                  <notes />
                </div>

                
                <calendarStudent /> 


                <!-- <pfeStudent :pfesujet_tache="tache"/>    -->
            </div>
        </div>

    </div>
</template>




<script>

import axios from "axios"
import appSidebar from "../components/student/sidebar.vue";
import appHeader from "../components/general/appHeader.vue";
import consulter from "../components/student/consulter_student.vue";
import calendarStudent from "../components/student/calendar_etudiant.vue";
import modules from "../components/student/modules.vue";
import notes from "../components/student/note.vue";
import pfes from "../components/student/pfe.vue";


export default{
name:"etudiant", 

components:{
  'webapp-sidebar':appSidebar,
    'webapp-header':appHeader,
    'consulter-options':consulter,
    'calendarStudent':calendarStudent,
    'modules':modules,
    'pfes':pfes,
    'notes':notes,

},
methods:{
    changedId:function(value){
      this.divId=value;
  },

   handleModule:function(value,hidden,hidden2){
    this.modules=value;
    this.pfes=hidden;
    this.notes=hidden2;

  },
  handlePfe:function(value,hidden,hidden2){
    this.pfes=value;
    this.modules=hidden;
    this.notes=hidden2;


  },
  handleNote:function(value,hidden,hidden2){
    this.notes=value;
    this.modules=hidden;
    this.pfes=hidden2;

    

  }
},

data(){
  return {
    user:"",
    divId:"c-app",
    action:"Consulter",
    modules:"hidden",
    pfes:"hidden",
    notes:"hidden",
  }
},
 

async created(){
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

.hidden{
  display:none;
}

.visible{
  display:block;
}
</style>






