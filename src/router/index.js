import { createRouter, createWebHistory } from "vue-router";
// Pastikan nama import ini (misal: HomePage) sama persis dengan nama 'name' di script komponen Vue Anda
// Dan pastikan nama file di views/ juga sesuai (misal: HomePage.vue)
import HomePage from "../views/HomePage.vue";
import FoodPage from "../views/FoodPage.vue";
import WaterActivitiesPage from "../views/WaterActivitiesPage.vue";
import LodgingPage from "../views/LodgingPage.vue";
import GalleryPage from "../views/GalleryPage.vue";
import ContactPage from "../views/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "Home", // Nama rute ini bisa tetap singkat
    component: HomePage, // Ini harus sesuai dengan nama yang diimpor di atas
  },
  {
    path: "/food",
    name: "Food",
    component: FoodPage,
  },
  {
    path: "/water-activities",
    name: "WaterActivities",
    component: WaterActivitiesPage,
  },
  {
    path: "/lodging",
    name: "Lodging",
    component: LodgingPage,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: GalleryPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(_to, _from, _savedPosition) {
    // Selalu scroll ke atas saat berpindah halaman
    // Variabel _to, _from, _savedPosition diberi underscore (_)
    // dan baris di atasnya diberi komentar eslint-disable-next-line
    // untuk menghindari error 'defined but never used' dari linter
    return { top: 0 };
  },
});

export default router;
