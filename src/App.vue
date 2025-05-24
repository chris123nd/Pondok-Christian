<template>
  <div id="app">
    <TheNavbar />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue"; // Diubah namanya
import TheFooter from "./components/TheFooter.vue"; // Diubah namanya

export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<style>
/* Styling dasar global untuk seluruh aplikasi */
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Pastikan aplikasi mengisi tinggi layar */
}

main {
  flex: 1; /* Pastikan konten utama mengisi ruang yang tersedia */
}

/* Styling umum untuk semua halaman konten */
.page-section {
  padding: 50px 20px;
  text-align: center;
}

.page-section h2 {
  color: #3f51b5;
  font-size: 2.5em;
  margin-bottom: 20px;
  border-bottom: 3px solid #ffc107;
  display: inline-block;
  padding-bottom: 10px;
}

.page-section p.description {
  max-width: 800px;
  margin: 0 auto 40px auto;
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
}
</style>
