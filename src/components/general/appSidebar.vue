<template>
  <!-- <header> -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="/professor"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">{{user_name}}</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="/professor">
          <span>Mon Profile</span></a
        >
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Action</div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-book-open"></i>
          <span>Modules</span>
        </a>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
        
        </div>
      </li>

      <!-- Nav Items-->

      <li class="nav-item active">
        <a class="nav-link" >
          <i class="fas fa-fw fa-chart-area"></i>
          <span>PFE</span>
        </a>
      </li>

      <li class="nav-item active">
        <a class="nav-link">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Emploi de temps</span>
        </a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" >
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Notes des Etudiants</span>
        </a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button @click="changeId" class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>

  <!-- </header> -->
</template>

<script>
import axios from "axios"

export default{
  data(){
    return {
      prof:'Pr.Laachak Lotfi',
      divId:"c-app",
    }
  },
  props:{
    user_name:String,
  },
  
  methods:{
    changeId:function(){
      if(this.divId=="c-app"){
        this.divId="b-app";
      }
      else{
        this.divId="c-app";
      }
      this.$emit('changeId',this.divId);
    }

  },
  async created(){
    try{
        const module = await axios.get('professor/getmodules');
        this.modules=module.data;
        console.log(this.modules);
    }
    catch(error){
        console.log(error);
    }
   
 },

}
</script>


<style>


</style>

