<template>
<div class="main">
    <div class="row" >
        <div class="col"  v-for="pfe in pfes" :key="pfe.id" style="width: 100px;">
            <div  class="card" style="width: 18rem;">
                <!-- <img class="card-img-top" :src="image" alt="Card image cap"> -->
                <div class="card-body">
                    <h4 class="card-title">
                        <strong>
                            {{pfe.commentaire_pfe}}
                        </strong>
                    </h4>
                    <h5 class="card-text">
                        Etudiant :
                        <strong>
                            {{pfe.etudiant}}
                        </strong>
                    </h5>
                    <p>
                        Deadline : 
                        <strong>
                            {{pfe.deadline_pfe}}                        
                        </strong>
                    </p>
                    <p>
                        Mes commentaires : 
                        <strong>
                            {{pfe.commentaire_pfe}}                        
                        </strong>
                    </p>
                    <a href="#" class="btn btn-primary">Statistique PFE</a>
                </div>  
            </div>
        </div>
    </div>
</div>
   
</template>


<script>
import axios from "axios"
import image from "../../../assets/pfe.jpg"

export default {
    name:"pfes",
    data(){
        return {
            pfes:Object,
            image: image

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


<style scoped>
/* .main{
    display:flex;
    justify-content:center;
    align-items:center;
} */

strong{
    color:rgb(91, 91, 201);
}
</style>