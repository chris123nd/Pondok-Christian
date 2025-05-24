<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/">
        <img src="../assets/logo-pondok-christian.png" alt="Logo Pondok Christian" class="brand-logo" />
      </router-link>
    </div>
    <ul :class="['navbar-links', { 'is-active': showMobileMenu }]">
      <li><router-link to="/" @click="closeMobileMenu">Beranda</router-link></li>
      <li><router-link to="/lodging" @click="closeMobileMenu">Penginapan</router-link></li>
      <li><router-link to="/food" @click="closeMobileMenu">Makanan</router-link></li>
      <li><router-link to="/water-activities" @click="closeMobileMenu">Wahana Air</router-link></li>
      <li><router-link to="/gallery" @click="closeMobileMenu">Galeri</router-link></li>
      <li><router-link to="/contact" @click="closeMobileMenu">Kontak</router-link></li>
    </ul>
    <div class="navbar-burger" @click="toggleMobileMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    closeMobileMenu() {
      this.showMobileMenu = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(245, 255, 255);
  padding: 15px 60px;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 70px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  height: 100%;
}

.navbar-brand a {
  font-size: 0;
  color: white;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
  display: flex;
  align-items: center;
}

.brand-logo {
  max-height: 50px;
  width: auto;
  display: block;
}

.navbar-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
}

.navbar-links li {
  margin-left: 30px;
}

.navbar-links a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 1.3em;
  transition: color 0.3s ease;
  padding: 5px 0;
}

.navbar-links a:hover,
.navbar-links a.router-link-exact-active {
  color: #3f51b5;
}

.navbar-burger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 1001;
}

.navbar-burger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

/* Responsif untuk layar kecil */
@media (max-width: 768px) {
  .navbar {
    padding: 10px 20px;
    height: 60px;
  }

  .navbar-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #6dd5ed;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .navbar-links.is-active {
    height: auto;
    padding-bottom: 15px;
  }

  .navbar-links li {
    margin: 0;
    padding: 10px 20px;
    text-align: center;
  }

  .navbar-links a {
    display: block;
  }

  .navbar-burger {
    display: flex;
  }
}
</style>
