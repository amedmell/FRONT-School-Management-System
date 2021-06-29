<template>
         <div class="row">
                                <div class="col">
                                    <div class="card border-left-primary shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        <h5>
                                                            <a @click="handleModule"> <strong>{{action_mod}} Modules</strong> </a>
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
                                                            <a @click="handlePfe">
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

                                <!-- <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-info shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1"><h5>
                                                        <a href="">
                                                            <strong>{{action_mod}} Emploi</strong>
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
                                </div> -->

                                <div class="col">
                                    <div class="card border-left-warning shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        <h5>
                                                            <a @click="handleNote">
                                                            <strong>
                                                                {{action_mod}} Notes
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
export default {
    name:"app", 
    props:{
        action_mod: String,
    },
    data(){
        return{
            displayMod:"hidden",
            displayPfe:"hidden",
            displayNote:"hidden",

        }
    },
    methods:{
        handleModule:function(){
            if(this.displayMod=="visible"){
                this.displayMod="hidden";
            }
            else{
                this.displayMod="visible";
                this.displayPfe="hidden";
                this.displayNote="hidden";
            }
            this.$emit("handleModule",this.displayMod,this.displayPfe,this.displayNote);
        },
        handlePfe:function(){
            if(this.displayPfe=="visible"){
                this.displayPfe="hidden";
            }
            else{
                this.displayPfe="visible";
                this.displayMod="hidden";
                this.displayNote="hidden";


            }
            this.$emit("handlePfe",this.displayPfe,this.displayMod,this.displayNote);
        },
        handleNote:function(){
            if(this.displayNote=="visible"){
                this.displayNote="hidden";
            }
            else{
                this.displayNote="visible";
                this.displayPfe="hidden";
                this.displayMod="hidden";

            }
            this.$emit("handleNote",this.displayNote,this.displayPfe,this.displayMod);
        }
    }
}
</script>


<style scoped>
strong{
    cursor: pointer;
}
</style>
