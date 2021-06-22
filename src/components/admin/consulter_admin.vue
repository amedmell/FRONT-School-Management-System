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
                                                            <a id="card" href="">
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
                                                            <a id="card" href="">
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
                                                            <a id="card" href="">
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
            displayProf:"hidden"
        }
    },
    methods:{
        handleCrudEtud:function(){
            if(this.displayEtud=="visible"){
                this.displayEtud="hidden";
            }else{
                this.displayProf="hidden";
                this.displayEtud="visible";
            }
            this.$emit('handleCrudEtud',this.displayEtud,this.displayProf);
        },
        handleCrudProf:function(){
            if(this.displayProf=="visible"){
                this.displayProf="hidden";
            }else{
                this.displayEtud="hidden";
                this.displayProf="visible";
            }
            this.$emit('handleCrudProf',this.displayProf,this.displayEtud);
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
