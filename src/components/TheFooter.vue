<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h3>Pondok Christian</h3>
        <p>Destinasi liburan keluarga yang nyaman di Pantai Lumban Bul Bul, Toba.</p>
        <div class="contact-info">
          <p>Email:pondokchristian@gmail.com</p>
          <p>Telepon: +62 821-6017-1868</p>
        </div>
      </div>
      <div class="footer-section links">
        <h3>Tautan Cepat</h3>
        <ul>
          <li><router-link to="/">Beranda</router-link></li>
          <li><router-link to="/food">Makanan</router-link></li>
          <li><router-link to="/water-activities">Wahana Air</router-link></li>
          <li><router-link to="/lodging">Penginapan</router-link></li>
          <li><router-link to="/gallery">Galeri</router-link></li>
          <li><router-link to="/contact">Kontak</router-link></li>
        </ul>
      </div>
      <div class="footer-section social">
        <h3>Ikuti Kami</h3>
        <div class="social-links">
          <a href="https://www.instagram.com/homestay_christian/#" target="_blank"><img src="../assets/instagram-icon.png" alt="Instagram" /></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">© {{ currentYear }} Pondok Christian. Hak Cipta Dilindungi.</div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #2c3e50; /* Abu-abu gelap */
  color: white;
  padding: 40px 20px 20px;
  font-size: 0.95em;
  line-height: 1.8;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px; /* Jarak antar kolom */
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
}

.footer-section h3 {
  color: #ffc107;
  margin-bottom: 20px;
  font-size: 1.4em;
}

.footer-section p,
.footer-section ul {
  color: #ccc;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #fff;
}

.contact-info p {
  margin: 5px 0;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.social-links img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
  filter: invert(100%);
}

.social-links img:hover {
  transform: scale(1.1);
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #444;
  color: #aaa;
}
</style>
