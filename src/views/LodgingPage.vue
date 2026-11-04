<template>
  <div class="page-section lodging-page">
    <header class="page-heading">
      <p class="eyebrow">Istirahat dengan pemandangan</p>
      <h2>Penginapan Nyaman di Homestay Christian</h2>
      <p class="description">Rasakan kenyamanan menginap di tepi Danau Toba. Pondok Christian menawarkan pilihan kamar yang bersih dan nyaman, dilengkapi fasilitas lengkap untuk istirahat Anda.</p>
    </header>

    <div class="rooms-grid">
      <div class="room-item">
        <img src="../assets/room1.jpg" alt="Kamar Mini Room" />
        <h3>Mini Room</h3>
        <ul>
          <li>Kapasitas: 2-3 orang</li>
          <li>1 kamar mandi dalam, kipas angin, 1 ekstra bed</li>
          <li>Pemandangan Danau Toba</li>
        </ul>
        <span class="price">Rp 250.000/malam</span>
      </div>
      <div class="room-item">
        <img src="../assets/room2.jpg" alt="Kamar Standard Room" />
        <h3>Standard Room</h3>
        <ul>
          <li>Kapasitas: 10-15 orang</li>
          <li>2 kipas angin, 2 kamar mandi, dapur, ekstra bed</li>
          <li>Pemandangan Danau Toba langsung</li>
        </ul>
        <span class="price">Mulai Rp 600.000/malam</span>
      </div>
      <div class="room-item">
        <img src="../assets/room3.jpg" alt="Kamar Double Room" />
        <h3>Double Room</h3>
        <ul>
          <li>Kapasitas: 20-30 orang</li>
          <li>3 kamar mandi, dapur, ekstra bed, alat pemanggang</li>
          <li>Pemandangan Danau Toba langsung</li>
        </ul>
        <span class="price">Rp 1.200.000/malam</span>
      </div>
    </div>

    <p class="whatsapp-prompt">Untuk informasi ketersediaan kamar, reservasi, atau pertanyaan lebih lanjut, silakan hubungi tim kami:</p>
    <PondokWhatsappButton phoneNumber="6282160171868" message="Halo Kak, saya ingin bertanya tentang pemesanan penginapan kak." />
  </div>
</template>

<script>
import PondokWhatsappButton from "../components/PondokWhatsappButton.vue";

export default {
  name: "LodgingPage",
  components: { PondokWhatsappButton },
};
</script>

<style scoped>
.lodging-page { background: var(--color-bg); }
.page-heading { max-width: 720px; margin: 0 auto; text-align: center; }
.page-heading h2 { margin: 0; color: var(--color-ink); font: 500 clamp(2.25rem, 5vw, 4rem)/1.05 "Playfair Display", Georgia, serif; letter-spacing: -.04em; }
.eyebrow { margin: 0 0 1rem; color: var(--color-accent-strong); text-transform: uppercase; letter-spacing: .18em; font-size: .72rem; font-weight: 700; }
.description { max-width: 620px; margin: 1.25rem auto 0; color: var(--color-muted); line-height: 1.75; }
.rooms-grid { max-width: 1180px; margin: 3.5rem auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.room-item { display: flex; flex-direction: column; padding: 1rem; background: var(--color-surface); border: 1px solid var(--color-line); border-radius: var(--radius-lg); box-shadow: 0 10px 35px rgba(32, 48, 47, .06); transition: transform .3s ease, box-shadow .3s ease; }
.room-item:hover { transform: translateY(-7px); box-shadow: var(--shadow-soft); }
.room-item img { width: 100%; height: 220px; object-fit: cover; border-radius: calc(var(--radius-lg) - 8px); }
.room-item h3 { margin: 1.25rem .5rem .75rem; color: var(--color-ink); font: 600 1.5rem/1.1 "Playfair Display", Georgia, serif; }
.room-item ul { flex: 1; margin: 0 .5rem; padding: 0; list-style: none; color: var(--color-muted); font-size: .92rem; line-height: 1.65; }
.room-item li { display: flex; gap: .6rem; margin: .55rem 0; }
.room-item li::before { content: "•"; color: var(--color-accent); font-weight: 700; }
.price { display: block; margin: 1.25rem .5rem .5rem; color: var(--color-accent-strong); font-weight: 700; }
.whatsapp-prompt { max-width: 580px; margin: 0 auto 1.25rem; color: var(--color-muted); text-align: center; line-height: 1.7; }
:deep(.whatsapp-button) { display: flex; justify-content: center; margin: 0 auto; }
@media (max-width: 760px) { .rooms-grid { grid-template-columns: 1fr; margin-top: 2.5rem; } .page-heading h2 { font-size: 2.5rem; } }
</style>
