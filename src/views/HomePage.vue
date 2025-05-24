<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>Selamat Datang di Pondok Christian</h1>
      <p>Temukan Surga Tersembunyi di Tepi Danau Toba!</p>
      <p>
        Siapkan diri Anda untuk liburan penuh aksi dan ketenangan di Pondok Christian! Dari serunya banana boat, tur kapal keliling danau, lezatnya makanan & minuman hingga kenyamanan menginap di tempat kami. Setiap momen di sini dirancang
        untuk kebahagiaan anda. Ajak keluarga dan teman, mari jelajahi keajaiban Danau Toba bersama kami. Kami Tunggu kedatangan Anda!
      </p>
      <router-link to="/contact" class="btn-primary">Hubungi Kami</router-link>
    </div>

    <section class="page-section about-summary">
      <h2>Tentang Kami</h2>
      <p class="description">
        Kami menawarkan pengalaman liburan yang tak terlupakan di tepi Danau Toba. Dengan suasana yang tenang, pemandangan Danau Toba yang memukau, dan fasilitas lengkap, kami siap melayani kebutuhan Anda untuk rekreasi dan relaksasi.
      </p>
      <router-link to="/contact" class="btn-secondary">Lihat Lebih Lanjut</router-link>
    </section>

    <section class="page-section services-summary">
      <h2>Layanan Kami</h2>
      <div class="services-grid">
        <div class="service-item">
          <img src="../assets/food-icon.png" alt="Makanan Icon" />
          <h3>Kuliner Lokal</h3>
          <p>Habis berenang bikin perut jadi lapar? Tenang ada warung nya yang menjual berbagai macam makanan dan minuman yang bisa menghilangkan laparmu.</p>
          <router-link to="/food" class="link-more">Lihat Menu</router-link>
        </div>
        <div class="service-item">
          <img src="../assets/water-activities-icon.png" alt="Wahana Air Icon" />
          <h3>Wahana Air</h3>
          <p>Rasakan adrenalin dengan banana boat, kapal keliling,kayak dan ban renang yang sangat seru dan pastinya harganya ramah di kantong.</p>
          <router-link to="/water-activities" class="link-more">Info Wahana</router-link>
        </div>
        <div class="service-item">
          <img src="../assets/lodging-icon.png" alt="Penginapan Icon" />
          <h3>Penginapan Nyaman</h3>
          <p>Bersantai di kamar kami yang bersih dan nyaman dengan pemandangan area sekitar yang dekat langsung dengan danau toba yang indah.</p>
          <router-link to="/lodging" class="link-more">Pesan Kamar</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  /* Tidak perlu background-color lagi di sini, karena hero-section yang akan punya */
  /* min-height disesuaikan di App.vue main */
}

.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/hero-bg.jpg") no-repeat center center; /* Ganti nama file gambar Anda */
  background-size: cover;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
}

.hero-section h1 {
  font-size: 3.5em;
  margin-bottom: 20px;
}

.hero-section p {
  font-size: 1.4em;
  max-width: 800px;
  margin-bottom: 30px;
  line-height: 1.5;
}

.btn-primary {
  background-color: rgb(255, 255, 255);
  color: #3f51b5;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background-color: rgb(255, 255, 255);
  transform: translateY(-2px);
}

.about-summary {
  background-color: #f8f8f8;
  color: #2c3e50;
}

.about-summary h2 {
  color: #3f51b5;
}

.btn-secondary {
  background-color: transparent;
  color: #3f51b5;
  border: 2px solid #3f51b5;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-top: 20px;
  display: inline-block;
}

.btn-secondary:hover {
  background-color: #3f51b5;
  color: white;
}

.services-summary {
  background-color: white;
  padding-bottom: 60px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 40px auto;
}

.service-item {
  background-color: #e8eaf6; /* Biru muda */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
}

.service-item img {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
}

.service-item h3 {
  color: #3f51b5;
  font-size: 1.6em;
  margin-bottom: 15px;
}

.service-item p {
  color: #666;
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 20px;
}

.link-more {
  color: #3f51b5;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.link-more:hover {
  color: rgb(255, 255, 255);
}

/* Media Queries untuk responsif */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5em;
  }
  .hero-section p {
    font-size: 1.1em;
  }
  .btn-primary {
    padding: 10px 20px;
    font-size: 1em;
  }
  .page-section h2 {
    font-size: 2em;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
