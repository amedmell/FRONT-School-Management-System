<template>
    <div class="notes">
        <h1>Mes Notes</h1>
        <table class="table">
            <thead class="thead-dark">
            <tr>

                <th scope="col">Module</th>
                <th scope="col">Note</th>
                <th scope="col">Mention</th>

            </tr>
            </thead>

            <tbody>

            <tr  v-for="note in notes" :key="note.id">
                <th scope="row">
                    {{note.module}}
                </th>
                <td>
                    {{note.note}}
                </td>
                <td>
                    {{note.mention}}
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
            notes:Object
        }
    },
    
 async created(){
    try{

        const response = await axios.get('student/getnotes');
        this.notes=response.data;
        console.log(this.notes);

    }
    catch(error){
        console.log(error);
        //this.$router.go(0);
    }
   
 },

    
}
</script>