<template>
    <div class="notes">
        <h1>Table NOTES</h1>
        <table class="table">
            <thead class="thead-dark">
            <tr  >
                <th scope="col">Nom Etudiant</th>
                <th scope="col" v-for="mod in modules" :key="mod.id">
                    {{mod.nom_module}}
                </th>
                <th scope="col">
                    Mention
                </th>
                <th scope="col">Action</th>
            </tr>
            </thead>

            <tbody>
            <tr  v-for="note in notes" :key="note.id">
                <th scope="row">
                    {{note.etudiant}}
                </th>
                <td>
                    {{note.valeur_note}}
                </td>
                <td>
                    {{note.mention}}
                </td>
                <td>
                    <button class="btn btn-primary" >Edit</button>
                    <button class="btn btn-danger" >Delete</button>
                </td>
            </tr>
              
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from "axios"

export default {
    name:"notes",
    data(){
        return {
            modules:Object,
            notes:Object
        }
    },
    
 async created(){
    try{
        const module = await axios.get('professor/getmodules');
        const note=await axios.get('professor/getnote');
        this.modules=module.data;
        this.notes=note.data;
        //console.log(this.modules);
        console.log(this.notes);
    }
    catch(error){
        console.log(error);
        //this.$router.go(0);
    }
    //console.log(this.modules);
   
 },

    
}
</script>