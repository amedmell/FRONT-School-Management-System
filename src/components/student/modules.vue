<template>
    <div class="row" >
       <div class="col" v-for="mod in modules" :key="mod.id">
            <div class="card " style="width: 18rem;">
                <img class="card-img-top" :src="image" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">
                        <strong>
                            {{mod.nom_module}}
                        </strong>
                    </h5>
                </div>
            </div>
       </div>
    </div>
</template>


<script>
import axios from "axios"
import image from "../../assets/image1.jpg"

export default {
    name:"modules",
    
    data(){
        return {
            modules:Object,
            image:image
        }
    },
    
 async created(){
    try{
        const module = await axios.get('student/getmodules');
        this.modules=module.data;
        console.log(this.modules);
    }
    catch(error){
        console.log(error);
    }
   
 },

    
}
</script>


<style scoped>


strong{
    color:rgb(91, 91, 201);
}
</style>

