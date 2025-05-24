<template>
  <div class="page-section water-activities-page">
    <h2>Wahana Air Pondok Christian</h2>
    <p class="description">Rasakan keseruan dan adrenalin di Pantai Lumban Bul Bul dengan berbagai pilihan wahana air kami yang cocok untuk keluarga dan petualang!</p>

    <div class="activities-grid">
      <div class="activity-item">
        <img src="../assets/banana-boat.jpg" alt="Banana Boat" />
        <h3>Banana Boat</h3>
        <p>Sensasi meluncur di atas air dengan perahu karet berbentuk pisang yang ditarik speedboat. Sangat cocok untuk keseruan bersama teman dan keluarga!</p>
        <span class="price">Rp 250.000/8 orang + 1 orang di speedboat</span>
      </div>
      <div class="activity-item">
        <img src="../assets/kapal-keliling.jpg" alt="Kapal Keliling" />
        <h3>Kapal Keliling Danau</h3>
        <p>Nikmati keindahan Danau Toba dari dekat dengan tur kapal keliling. Pemandangan menakjubkan dan udara segar menanti Anda.</p>
        <span class="price">Rp 250.000/kapal (maks. 12 orang)</span>
      </div>
      <div class="activity-item">
        <img src="../assets/kayak.jpg" alt="Kayak Single" />
        <h3>Sewa Kayak</h3>
        <p>Jelajahi perairan tenang Danau Toba dengan kayak. Rasakan sensasi mendayung sendiri atau berdua.</p>
        <span class="price">Mulai Rp 50.000/jam</span>
      </div>
      <div class="activity-item">
        <img src="../assets/ban-renang1.jpg" alt="Ban Renang" />
        <h3>Ban Renang Single</h3>
        <p>Bersantai dan bermain di tepi pantai dengan ban renang yang nyaman. Ban ini memiliki kapasitas untuk 1 orang anak-anak.</p>
        <span class="price"> Rp 15.000/pcs</span>
      </div>
      <div class="activity-item">
        <img src="../assets/ban-renang.jpg" alt="Ban Renang" />
        <h3>Ban Renang Doble</h3>
        <p>Bersantai dan bermain di tepi pantai dengan ban renang yang nyaman. Ban ini memiliki kapasitas untuk 2 orang anak-anak/ 1 orang dewasa.</p>
        <span class="price"> Rp 25.000/pcs</span>
      </div>
      <div class="activity-item">
        <img src="../assets/ban-renang-anak.jpg" alt="Ban Renang" />
        <h3>Ban Renang Anak</h3>
        <p>Bersantai dan bermain di tepi pantai dengan ban renang yang nyaman. Ban ini memiliki kapasitas untuk 1 orang bayi.</p>
        <span class="price"> Rp 10.000/pcs</span>
      </div>
    </div>

    <p class="whatsapp-prompt">Untuk ketersediaan wahana, reservasi, atau informasi lebih lanjut, silakan hubungi kami:</p>
    <PondokWhatsappButton phoneNumber="6281234567890" message="Halo, saya ingin bertanya tentang wahana air di Pondok Christian." />
  </div>
</template>

<script>
import PondokWhatsappButton from "../components/PondokWhatsappButton.vue"; // Diubah namanya

export default {
  name: "WaterActivitiesPage", // Diubah namanya
  components: {
    PondokWhatsappButton,
  },
};
</script>

<style scoped>
.water-activities-page {
  background-color: #e8eaf6; /* Biru muda */
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto;
}

.activity-item {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 25px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.activity-item img {
  width: 100%;
  height: 200px; /* Tinggi gambar fixed */
  object-fit: cover; /* Pastikan gambar mengisi kotak tanpa terdistorsi */
  border-radius: 8px;
  margin-bottom: 20px;
}

.activity-item h3 {
  color: #3f51b5;
  font-size: 1.8em;
  margin-bottom: 10px;
}

.activity-item p {
  color: #666;
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 15px;
}

.activity-item .price {
  display: block;
  font-weight: bold;
  color: #ffc107;
  font-size: 1.1em;
  margin-top: 15px;
}

@media (max-width: 768px) {
  .activities-grid {
    grid-template-columns: 1fr;
  }
}
</style>
