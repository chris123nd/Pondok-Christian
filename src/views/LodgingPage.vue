<template>
  <div class="page-section lodging-page">
    <h2>Penginapan Nyaman di Homestay Christian</h2>
    <p class="description">Rasakan kenyamanan menginap di tepi Danau Toba. Pondok Christian menawarkan pilihan kamar yang bersih dan nyaman, dilengkapi fasilitas lengkap untuk istirahat Anda.</p>

    <div class="rooms-grid">
      <div class="room-item">
        <img src="../assets/room1.jpg" alt="Kamar Standard" />
        <h3>Mini Room</h3>
        <ul>
          <li>Kapasitas: 2-3 orang</li>
          <li>Fasilitas: 1 Kamar Mandi Dalam, Kipas Angin Sedang, 1 Ekstra Bed</li>
          <li>Pemandangan: View Danau Toba</li>
        </ul>
        <span class="price"> Rp 250.000/malam</span>
      </div>
      <div class="room-item">
        <img src="../assets/room2.jpg" alt="Kamar Deluxe" />
        <h3>Standard Room</h3>
        <ul>
          <li>Kapasitas: 10-15 orang</li>
          <li>Fasilitas: 2 Kipas Angin, 2 Kamar Mandi Dalam, Exra Bed, Dapur, Pondok dekat pantai, Alat Pemanggang, Karaoke.</li>
          <li>Pemandangan: Danau Toba Langsung</li>
        </ul>
        <span class="price">Mulai Rp 600.000/malam</span>
      </div>
      <div class="room-item">
        <img src="../assets/room3.jpg" alt="Family Suite" />
        <h3>Doble Room</h3>
        <ul>
          <li>Kapasitas: 20-30 orang</li>
          <li>Fasilitas: 2 Kipas Angin, 3 Kamar Mandi Dalam, Exra Bed, Dapur, Pondok dekat pantai, Alat Pemanggang, Karaaoke.</li>
          <li>Pemandangan: Danau Toba Langsung</li>
        </ul>
        <span class="price"> Rp 1.200.000/malam</span>
      </div>
    </div>

    <p class="whatsapp-prompt">Untuk informasi ketersediaan kamar, reservasi, atau pertanyaan lebih lanjut, silakan hubungi tim kami:</p>
    <PondokWhatsappButton phoneNumber="6282160171868" message="Halo Kak, saya ingin bertanya tentang pemesanan penginapan kak." />
  </div>
</template>

<script>
import PondokWhatsappButton from "../components/PondokWhatsappButton.vue"; // Diubah namanya

export default {
  name: "LodgingPage", // Diubah namanya
  components: {
    PondokWhatsappButton,
  },
};
</script>

<style scoped>
.lodging-page {
  background-color: #f0f8ff; /* Biru sangat muda */
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto;
}

.room-item {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 25px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.room-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.room-item img {
  width: 100%;
  height: 220px; /* Tinggi gambar fixed */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.room-item h3 {
  color: #3f51b5;
  font-size: 1.8em;
  margin-bottom: 15px;
}

.room-item ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.room-item ul li {
  margin-bottom: 8px;
  color: #666;
  font-size: 0.95em;
  display: flex;
  align-items: center;
}

.room-item ul li::before {
  content: "✔";
  color: #25d366; /* Warna hijau */
  margin-right: 10px;
  font-weight: bold;
}

.room-item .price {
  display: block;
  font-weight: bold;
  color: #ffc107;
  font-size: 1.2em;
  margin-top: 15px;
  text-align: right;
}

@media (max-width: 768px) {
  .rooms-grid {
    grid-template-columns: 1fr;
  }
}
</style>
