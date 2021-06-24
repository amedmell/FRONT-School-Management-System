<template>
         <div class="row">
                                <div class="col ">
                                    <div class="card border-left-primary shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        <h5>
                                                            <a  @click="handleCrudProf"> <strong>{{action_mod}} PROFESSEUR</strong> </a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-book-open fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card border-left-primary shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        <h5>
                                                            <a @click="handleCrudEtud" > <strong>{{action_mod}} ETUDIANT</strong> </a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-book-open fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card border-left-success shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        <h5>
                                                            <a @click="handleCrudPfe">
                                                            <strong>{{action_mod}} PFE</strong> </a>
                                                        </h5></div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-project-diagram fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card border-left-success shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        <h5>
                                                            <a @click="handleCrudMod">
                                                            <strong>{{action_mod}} MODULES</strong> </a>
                                                        </h5></div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-project-diagram fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card border-left-info shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1"><h5>
                                                        <a href="">
                                                            <strong>{{action_mod}} EMPLOI</strong>
                                                        </a>
                                                    </h5>
                                                    </div>
                                            
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card border-left-warning shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        <h5>
                                                            <a @click="handleCrudNote">
                                                            <strong>
                                                                {{action_mod}} NOTES
                                                            </strong> </a>
                                                        </h5></div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fas fa-user-graduate fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

</template>


<script>
export default{
    name:"consulter_admin", 
    props:{
        action_mod: String,
    },
    data(){
        return {
            displayEtud:"hidden",
            displayProf:"hidden",
            displayPfe:"hidden",
            displayMod:"hidden",
            displayNote:"hidden",
            

        }
    },
    methods:{
        handleCrudEtud:function(){
            if(this.displayEtud=="visible"){
                this.displayEtud="hidden";
            }else{
                this.displayEtud="visible";
                this.displayProf="hidden";
                this.displayPfe="hidden";
                this.displayMod="hidden";
                this.displayNote="hidden";
            }
            this.$emit('handleCrudEtud',this.displayEtud,this.displayProf,this.displayPfe,this.displayMod,this.displayNote);
        },
        handleCrudProf:function(){
            if(this.displayProf=="visible"){
                this.displayProf="hidden";
            }else{
                this.displayProf="visible";
                this.displayEtud="hidden";
                this.displayPfe="hidden";
                this.displayMod="hidden";
                this.displayNote="hidden";
            }
            this.$emit('handleCrudProf',this.displayProf,this.displayEtud,this.displayPfe,this.displayMod,this.displayNote);
        },
        handleCrudPfe:function(){
            if(this.displayPfe=="visible"){
                this.displayPfe="hidden";
            }else{
                this.displayPfe="visible";
                this.displayProf="hidden";
                this.displayEtud="hidden";
                this.displayMod="hidden";
                this.displayNote="hidden";

            }
            this.$emit('handleCrudPfe',this.displayPfe,this.displayProf,this.displayEtud,this.displayMod,this.displayNote);
        },
        handleCrudMod:function(){
            if(this.displayMod=="visible"){
                this.displayMod="hidden";
            }else{
                this.displayMod="visible";
                this.displayPfe="hidden";
                this.displayProf="hidden";
                this.displayEtud="hidden"; 
                this.displayNote="hidden";  
            }
            this.$emit('handleCrudMod',this.displayMod,this.displayPfe,this.displayProf,this.displayEtud,this.displayNote);
        },
        handleCrudNote:function(){
       if(this.displayNote=="visible"){
                this.displayNote="hidden";
            }else{
                this.displayNote="visible";
                this.displayPfe="hidden";
                this.displayProf="hidden";
                this.displayEtud="hidden"; 
                this.displayMod="hidden";  
            }
            this.$emit('handleCrudNote',this.displayNote,this.displayMod,this.displayPfe,this.displayProf,this.displayEtud);
        }
    }
}
</script>


<style scoped>
/* .roww{
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-gap: 10px;
    margin-bottom: 5px;


}  */

a:hover{
cursor:pointer;
}
</style>
