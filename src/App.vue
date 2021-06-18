<template>


<!-- <div id="app" >
  <router-link to="/test">test</router-link>  
  <router-link to="/login">login</router-link>
  
  <h1></h1>

</div> -->
    <!-- <router-link to="/NOTE">login</router-link>   -->
<!-- <div class="big"> -->
      <div v-bind:id=divId>
  
          <webapp-sidebar  @changeId="changedId" /> 
<!-- -----------------------NOITHING IN HERE ------------------------------------------->

        <div id="content" >
                <webapp-header />
      
       
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
        <webapp-footer />

     </div>
     
   
    

  </div>

  </div>



</template>


<script>

import axios from "axios"
import appSidebar from "./components/appSidebar.vue";
import appFooter from "./components/appFooter.vue";
import appHeader from "./components/appHeader.vue";
// import test from "./components/test.vue";


export default{
name:"app", 

components:{
  'webapp-sidebar':appSidebar,
    'webapp-footer':appFooter,
    'webapp-header':appHeader,

},
methods:{
    changedId:function(value){
      this.divId=value;
  },
},

data(){
  return {
    name:"",
    email:"",
    divId:"c-app"
  }
},
 

 async created(){
    const response = await axios.get('user-profile');
    this.name=response.data.name;
    this.email=response.data.email;
    console.log(response);
    

 }}

</script>



<style scoped>



*, ::after, ::before {
    box-sizing: border-box;
}
#c-app{
  display: grid;
  grid-template-columns: 224px calc(100% - 224px);
  /* grid-gap: 0; */
}

#b-app{
  display: grid;
  grid-template-columns: 104px calc(100% - 104px);
  /* grid-gap: 0; */
}

#content{
  margin-left: 0;
  padding-left:0;
} 

 
#c-app #content{
  width: 100%;
}


</style>





<style lang="scss">
 

 

</style>
