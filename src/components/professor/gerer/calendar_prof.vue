<template>
<!-- ------------------------------------------------------------------------------------------ -->
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Add Event
</button>


<vue-cal ref="vuecal"
         small
     
         hide-view-selector
         hide-title-bar
         editable-events
         :events="events"
         :cell-click-hold="false"
         :drag-to-create-event="false"
         :on-event-create="onEventCreate"

         :time-from="8 * 60" 
         :time-to="19 * 60" 
          :time-step="60" 
          :hide-weekdays="[7]"
          active-view="week"
          :disable-views="['years', 'year','month','day']"
          style="height: 100%"
>

</vue-cal>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
            <label>Start Time</label>
            <input type="text" placeholder="Start Time " v-model="starttime" > <br><br>
            <label>Title</label>
            <input type="text" placeholder="Event Title" v-model="title" ><br><br>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="customEventCreation">Create Event</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios"
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'



export default{
  components: { VueCal },
   
  data(){
    return {
      user:Object,
      event:Object,
      myEvents:Object,
      starttime:"",
      endtime:"",
      title:"",
      events: [],
    }
    
  
  },

  methods: {
 onEventCreate (event, deleteEventFunction) { 
      this.selectedEvent = event
      this.showEventCreationDialog = true
      this.deleteEventFunction = deleteEventFunction

    //adding the event to DB
    const response =axios.post('professor/addevent',{
      event_name:event.title,
      start_time:event.start,
      end_time:event.end
    });
    

    this.event=response.data;
    console.log(this.event);
    
    this.events.push({
      start:event.start,
      end:event.end,
      title:event.title,
    })
   
    },
    cancelEventCreation () {
      this.closeCreationDialog()
      this.deleteEventFunction()
    },
    closeCreationDialog () {
      this.showEventCreationDialog = false
      this.selectedEvent = {}
    },
    customEventCreation (e) {
      e.preventDefault();
    
    
        // Check if date format is correct before creating event.
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(this.starttime)) {
          this.$refs.vuecal.createEvent(
            // Formatted start date and time or JavaScript Date object.
            this.starttime,
            // Event duration in minutes (Integer).
            120,
            // Custom event props (optional).
            { title: this.title, content: 'Salle E22', class: 'blue-event' }
          )
        } else if (this.starttime) alert('Wrong date format.')
      }
   
},
  



async created(){
   try{
    const response = await axios.get('auth/user-profile');
    const eventsData = await axios.get('professor/getevents');

    this.myEvents=eventsData.data;
    this.user=response.data;

    console.log(this.myEvents);

    //adds the events to calendar once logged in
    (this.myEvents).forEach(event => {

          this.events.push({
          start:(event.start_time).replace('T',' ').replace('.000Z',''),
          end:(event.end_time).replace('T',' ').replace('.000Z',''),
          title:event.event_name,
        })
      
    });
    
  

   }
   catch(error){
     console.log(error);
   }
   
 }}

</script>
