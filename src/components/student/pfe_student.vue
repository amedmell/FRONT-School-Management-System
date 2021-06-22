<template>
<div class="whole">
                 <!-- Content Row -->
                     <!-- Content Column -->
                        <div class="card1" >
                                 <!-- Project Card Example -->
                            <div class="card shadow ">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Projet de Fin d'etude</h6>
                                </div>
                                <div class="card-body sujet" v-for="name in pfesujet_tache"  :key="name">
                                  
                          <div class="badge badge-pill badge-primary" style="width:100%">
                            <h4 class="small font-weight-bold" style=" font-size: 0.9em;">{{name[0]}}
                                      <span class="float-right" style="color: #36b9cc; font-size: 1.5em;" >{{name[1]}}</span>
                                    </h4>
                          </div>

                                    
                               
                                </div>


                            </div>

                       


                        </div>
                    <!-- --------------------------------- -->
                        <div class="card2" >

                            <!-- Illustrations -->
                            <div class="card shadow ">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Tache d'aujoudhui</h6>
                                </div>
                                <div class="card-body">
                                
                                    <div class="list-group">
                                          <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1" style="color:#1cc88a;">Seance java</h5>
                                            <small class="text-muted" style="color:#4e73df;">salle E17</small>
                                            <small class="text-muted">12:00 PM</small>

                                          </div>
                                            <br>

                                          <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1" style="color:#1cc88a;">Seance Web Dev</h5>
                                            <small class="text-muted" style="color:#4e73df;">salle E22</small>
                                            <small class="text-muted">14:00 PM</small>

                                          </div>
                                           <br>

                                         
                                          <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1" style="color:#1cc88a;">Seance Theorie de graphes</h5>
                                            <small class="text-muted" style="color:#4e73df;">salle E20</small>
                                            <small class="text">16:00 PM</small>
                                          </div>

                                        </div>
                   
                                </div>
                            </div>


                      </div>
</div>
    
</template>


<script>
export default {
    name:"pfe_student",
    props:{
      pfesujet_tache:Array,
      // pfe_sujets:Array
    }
    
}
</script>

<style scoped>
.whole{
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: 250px;
grid-gap:10px;
}

/* .sujet{
  back

} */
</style>