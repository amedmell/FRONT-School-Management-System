<template>
    <div v-bind:id=divId>
        <webapp-sidebar  @changeId="changedId" :user_name="user.name" :email="user.email"/> 
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
                  :action_mod="action_mod"
                  />  
                  
                  <hr>

                  <div :class=modules>
                    <modules/>
                  </div>

                  <div :class=pfes>
                    <pfes/>
                  </div>

                  <div :class=note>
                    <notes/>
                  </div>            <hr>
                        
                  <calendarProf />   <hr>
                      
              </div>
        </div>
    </div>
</template>




<script>

import axios from "axios"
import appSidebar from "../components/professor/sidebar.vue";
import appHeader from "../components/general/appHeader.vue";
import consulter from "../components/student/consulter.vue";
import calendarProf from "../components/professor/gerer/calendar_prof.vue";  
import modules from "../components/professor/gerer/module.vue";   
import pfes from "../components/professor/gerer/pfe.vue";   
import notes from "../components/professor/gerer/notes.vue";


export default{
name:"professor", 

components:{
  'webapp-sidebar':appSidebar,
    'webapp-header':appHeader,
    'consulter-options':consulter,
    'calendarProf':calendarProf,
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
    this.note=hidden2;
  },
  handlePfe:function(value,hidden,hidden2){
    this.pfes=value;
    this.modules=hidden;
    this.note=hidden2;
  },
   handleNote:function(value,hidden,hidden2){
    this.note=value;
    this.modules=hidden;
    this.pfes=hidden2;
  }

},

data(){
  return {
    user:"",
    divId:"c-app",
    action_mod:"Consulter",
    tache:[['ahmed MELLOUK',"Jeu Android"],
    ["Nora youssefi","Site web Ecommerce ASP"],
    ["john wick","kill people"]],
    modules:"hidden",
    pfes:"hidden",
    note:"hidden"

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
 .hidden{
   display:none;
 }

 .visible{
   display:block;
 }

</style>




