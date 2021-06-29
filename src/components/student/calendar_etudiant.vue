<template>
<div class="card shadow mb-4" >
                                    <!--                                                    
                              :on-event-create="onEventCreate"
                                :cell-click-hold="false"
                                                    :drag-to-create-event="false"
 -->                    <!-- Card Header - Dropdown -->
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Emploi De Temps</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body">
                                    <div class="chart-area">
                                        <div style="width: 100%; height: 100%;">
                                               
                                               

                                                  <VueCal 
                                                  small                                                
                                                    hide-view-selector
                                                    hide-title-bar
                                                    :events="events"
                                                  
                                                    :time-from="8 * 60" 
                                                    :time-to="19 * 60" 
                                                    :time-step="60" 
                                                    :hide-weekdays="[7]"
                                                    active-view="week"
                                                    :disable-views="['years', 'year','month','day']"
                                                    style="height: 100%"
                                                  />


                                        </div>

                                    </div>
                                </div>
                            </div>
    
</template>



<script>
import axios from "axios"
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'


export default {
  components: { VueCal },
  data(){
    return {
      events: []
   } 
  },

  async created(){
   try{
    const eventsData = await axios.get('student/getevents');

    //adds the events to calendar once logged in
    (eventsData.data).forEach(event => {

          this.events.push({
          start:(event.start_time).replace('T',' ').replace('.000Z',''),
          end:(event.end_time).replace('T',' ').replace('.000Z',''),
          title:event.event_name,

        });
      
    });
    
    console.log(eventsData.data);
  

   }
   catch(error){
     console.log(error);
   }
   
 }
 
}

</script>