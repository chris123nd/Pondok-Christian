<template>
  <nav class="navbar" aria-label="Navigasi utama">
    <router-link to="/" class="brand"><img src="../assets/logo-pondok-christian.png" alt="Pondok Christian" /></router-link>
    <ul :class="['navbar-links', { 'is-active': showMobileMenu }]">
      <li v-for="item in links" :key="item.to"><router-link :to="item.to" @click="closeMobileMenu">{{ item.label }}</router-link></li>
    </ul>
    <button class="navbar-burger" type="button" :aria-expanded="showMobileMenu" aria-label="Buka menu navigasi" @click="toggleMobileMenu"><span></span><span></span><span></span></button>
  </nav>
</template>
<script>
export default { name: "TheNavbar", data() { return { showMobileMenu: false, links: [{ label: "Beranda", to: "/" }, { label: "Penginapan", to: "/lodging" }, { label: "Makanan", to: "/food" }, { label: "Wahana Air", to: "/water-activities" }, { label: "Galeri", to: "/gallery" }, { label: "Kontak", to: "/contact" }] }; }, methods: { toggleMobileMenu() { this.showMobileMenu = !this.showMobileMenu; }, closeMobileMenu() { this.showMobileMenu = false; } } };
</script>
<style scoped>
.navbar { position: sticky; top: 0; z-index: 10; height: 78px; padding: .75rem clamp(1.25rem, 5vw, 5rem); display: flex; align-items: center; justify-content: space-between; background: rgba(255,253,248,.88); backdrop-filter: blur(16px); border-bottom: 1px solid var(--color-line); }.brand img { display: block; max-width: 145px; max-height: 48px; object-fit: contain; }.navbar-links { display: flex; align-items: center; gap: 1.8rem; list-style: none; padding: 0; margin: 0; }.navbar-links a { color: var(--color-muted); text-decoration: none; font-size: .88rem; transition: color .2s; }.navbar-links a:hover, .navbar-links a.router-link-exact-active { color: var(--color-ink); }.navbar-links a.router-link-exact-active { font-weight: 700; }.navbar-burger { display: none; border: 0; background: none; padding: .5rem; cursor: pointer; }.navbar-burger span { display: block; width: 24px; height: 2px; margin: 5px; background: var(--color-ink); }@media (max-width: 760px) { .navbar-burger { display: block; }.navbar-links { position: absolute; left: 0; right: 0; top: 78px; display: none; flex-direction: column; align-items: stretch; gap: 0; padding: .75rem 1.25rem 1rem; background: var(--color-surface); box-shadow: var(--shadow-soft); }.navbar-links.is-active { display: flex; }.navbar-links a { display: block; padding: .8rem 0; } }
</style>
