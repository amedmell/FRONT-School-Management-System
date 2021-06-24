<template>
    <div class="row" v-for="mod in modules" :key="mod.id">
       <div class="modules">
            <div class="card " style="width: 18rem;">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{mod.nom_module}}</h5>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    <a href="#" class="btn btn-primary">Visit Module</a>
                </div>
            </div>
       </div>
    </div>
</template>


<script>
import axios from "axios"

export default {
    name:"modules",
    data(){
        return {
            modules:Object
        }
    },
    
 async created(){
    try{
        const module = await axios.get('professor/getmodules');
        this.modules=module.data;
        console.log(this.modules);
    }
    catch(error){
        console.log(error);
        //this.$router.go(0);
    }
    //console.log(this.modules);
   
 },

    
}
</script>


<style scoped>
.modules{
    display:grid;
    grid-template-columns: repeat(2,1fr);
}
</style>

