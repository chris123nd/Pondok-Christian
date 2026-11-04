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
#app { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; }
.page-section { padding: clamp(4rem, 9vw, 7rem) clamp(1.25rem, 5vw, 5rem); }
.page-section h2 { color: var(--color-ink); font-family: Georgia, serif; font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 400; margin: 0 0 1rem; letter-spacing: -0.04em; }
.page-section p.description { max-width: 720px; margin: 0 auto 2.5rem; color: var(--color-muted); font-size: 1.05rem; line-height: 1.8; }
</style>
