<template>
<div class="card shadow mb-4">
                                <!-- Card Header - Dropdown -->
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
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
                                        <!-- <div id="calendar" style="width: 100%; height: 100%;"></div> -->
        <div class="card" ref="cal"></div>

  <!-- <FullCalendar  /> -->
                                    </div>
                                </div>
                            </div>
    
</template>

<script>

// import { ref,defineComponent, onMounted} from 'vue';
// import {Calendar} from '@fullcalendar/core'


// export default defineComponent({
// name:'tryc',
// setup(){
//     const cal = ref(null);
    
//     onMounted(()=>{
//         const Tcalendar = new Calendar(cal.value, {
//         initialView: 'dayGridWeek',
//             height:'100%',
//             headerToolbar:false,
//             dayHeaderFormat:{ weekday: 'long' },

//             slotMinTime:'08:00:00',
//             slotMaxTime:'18:00:00',
//             hiddenDays: [0,7], // hide Saturday and Sunday
//             expandRows:true,
//         });
//         Tcalendar.render();
//     })
//     return {
//         cal,
        
//     }
//     }
// })
</script>