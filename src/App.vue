<template>


<router-view/>



</template>


<script>


export default{
name:"etudiant", 

components:{

},
methods:{
    changedId:function(value){
      this.divId=value;
  },
},

data(){
  return {
    divId:"c-app"
  }
},
 

}

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
