<template>
  <div class="page-section contact-page">
    <h2>Hubungi Kami</h2>
    <p class="description">Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan, ingin melakukan reservasi, atau membutuhkan informasi lebih lanjut mengenai Pondok Christian.</p>

    <div class="contact-info-grid">
      <div class="contact-item">
        <img src="../assets/location-icon.png" alt="Lokasi Icon" />
        <h3>Lokasi Kami</h3>
        <p>Jl.Sibolahotaang, Lumban Bul Bul, Kec. Balige, Kabupaten Toba Samosir, Sumatera Utara 22386</p>
        <a href="https://maps.app.goo.gl/dVtqsQEVm9AJ6uAb7" target="_blank" class="link-more">Lihat di Peta Google</a>
      </div>
      <div class="contact-item">
        <img src="../assets/phone-icon.png" alt="Telepon Icon" />
        <h3>Telepon</h3>
        <p>Telepon 1: +62 821-6017-1868</p>
        <p>Telepon 2: +62 821-6619-9170</p>
        <p>WhatsApp 1: +62 821-6017-1868 |</p>
        <p>WhatsApp 1: +62 821-6619-9170 |</p>
        <p>Email: pondokchristian@gmail.com</p>
        <PondokWhatsappButton phoneNumber="6282160171868" message="Halo Kak saya ingin bertanya..." />
      </div>
      <div class="contact-item">
        <img src="../assets/hours-icon.png" alt="Jam Kerja Icon" />
        <h3>Jam Operasional</h3>
        <p>Senin - Jumat: 08:00 - 22:00 WIB</p>
        <p>Sabtu - Minggu: 06:00 - 23:00 WIB</p>
        <p>Kami Kami siap melayani Anda setiap hari.</p>
      </div>
    </div>

    <h3>Temukan Kami di Peta</h3>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.3458764027787!2d99.07252067468165!3d2.383182897615926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e1c313a0279c7%3A0x7d01e1a5f6e8c7c9!2sPantai%20Lumban%20Bul%20Bul!5e0!3m2!1sid!2sid!4v1716503028243!5m2!1sid!2sid"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import PondokWhatsappButton from "../components/PondokWhatsappButton.vue";

export default {
  name: "ContactPage", // Nama komponen sudah sesuai dengan aturan linter
  components: {
    PondokWhatsappButton,
  },
};
</script>

<style scoped>
.contact-page {
  background-color: #f0f0f0; /* Abu-abu sangat terang */
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto 60px auto;
}

.contact-item {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.contact-item img {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
}

.contact-item h3 {
  color: #3f51b5;
  font-size: 1.6em;
  margin-bottom: 15px;
}

.contact-item p {
  color: #666;
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 15px;
}

.contact-item .link-more {
  color: #3f51b5;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.contact-item .link-more:hover {
  color: #ffc107;
}

.map-container {
  max-width: 1200px;
  margin: 0 auto 50px auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden; /* Penting untuk border-radius pada iframe */
}

.map-container iframe {
  width: 100%;
  height: 450px;
  border: 0;
}

@media (max-width: 768px) {
  .contact-info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
