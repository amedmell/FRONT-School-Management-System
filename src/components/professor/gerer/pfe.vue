<template>
<div class="pfes" v-for="pfe in pfes" :key="pfe.id">
        <div  class="card" style="width: 18rem;">
            <img class="card-img-top" src="" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">{{pfe.sujet_pfe}}</h4>
                <h5 class="card-text">
                    <strong>
                        {{pfe.etudiant}}
                    </strong>
                </h5>
                <p>
                    Deadline : {{pfe.deadline_pfe}}
                </p>
                <p>
                    Mes commentaires : {{pfe.commentaire_pfe}}
                </p>
                <a href="#" class="btn btn-primary">Statistique PFE</a>
            </div>  
        </div>
</div>
   
</template>


<script>
import axios from "axios"

export default {
    name:"pfes",
    data(){
        return {
            pfes:Object
        }
    },
    
 async created(){
    try{
        const response = await axios.get('professor/getpfes');
        this.pfes=response.data;
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
