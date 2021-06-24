import { createRouter, createWebHistory } from "vue-router";
import login from "../components/login.vue";
import admin from "../views/admin.vue";
import etudiant from "../views/etudiant.vue";
import professor from "../views/professor.vue";

import consulter from "../components/student/consulter.vue";
import crudstudent from "../components/admin/crud/crudstudent.vue";
import crudprof from "../components/admin/crud/crudprof.vue";
import crudpfe from "../components/admin/crud/crudpfe.vue";
import crudmodule from "../components/admin/crud/crudmodule.vue";
import crudnote from "../components/admin/crud/crudnote.vue";

import appHeader from "../components/general/appHeader.vue";
import pfe_student from "../components/student/pfe_student.vue";

import calendar from "../components/try_calendar.vue";
import modules from "../components/professor/gerer/module.vue";
import pfe from "../components/student/pfe.vue";

import notes from "../components/professor/gerer/notes.vue";

import modulesetud from "../components/student/modules.vue";

const routes = [
 
  {
    path: "/pfe_student",
    name: "pfe_student",
    component: pfe_student,
  },
  {
    path: "/module",
    name: "module",
    component: modules,
  },
  {
    path: "/modulestudent",
    name: "module",
    component: modulesetud,
  },
  {
    path: "/notes",
    name: "notes",
    component: notes,
  },
  {
    path: "/pfe",
    name: "pfe",
    component: pfe,
  },

  {
    path: "/consulter",
    name: consulter,
    component: consulter,
  },
  {
    path: "/calendar",
    name: calendar,
    component: calendar,
  },
  {
    path: "/crudstudent",
    name: crudstudent,
    component: crudstudent,
  },
  {
    path: "/crudprof",
    name: crudprof,
    component: crudprof,
  },
  {
    path: "/crudnote",
    name: crudnote,
    component: crudnote,
  },
  {
    path: "/crudmodule",
    name: crudmodule,
    component: crudmodule,
  },
  {
    path: "/crudpfe",
    name: crudpfe,
    component: crudpfe,
  },
  {
    path: "/etudiant",
    name: "etudiant",
    component: etudiant,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
  },
  {
    path: "/professor",
    name: "professor",
    component: professor,
  },
   {
    path: "/",
    name: "login",
    component: login,
  },

  
  {
    path: "/appHeader",
    name: "appHeader",
    component: appHeader,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
