<template>
    <div class="row" v-for="pfe in pfes" :key="pfe.id">
       <div class="col">
            <div class="card " style="width: 18rem;">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                    <h3 class="card-title">{{pfe.sujet_pfe}}</h3>
                    <h4>Date limite : {{pfe.deadline_pfe}}</h4>
                    <h5>Commentaire d'encadrant : {{pfe.commentaire_pfe}}</h5>
                    <a href="#" class="btn btn-primary">Visit PFE</a>
                </div>
            </div>
       </div>
    </div>
</template>


<script>
import axios from "axios"

export default {
    name:"pfe",
    data(){
        return {
            pfes:Object
        }
    },
    
 async created(){
    try{
        const module = await axios.get('student/getpfes');
        
        this.pfes=module.data;

        if((this.pfes).length==0){
            console.log("NO PFE !!");
        }
        
        console.log(this.pfes);
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

