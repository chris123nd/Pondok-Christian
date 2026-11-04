<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow">Pondok Christian · Lumban Bul Bul</p>
        <h1>Temukan tenang yang <em>sebenarnya.</em></h1>
        <p class="hero-description">Tempat kecil untuk menikmati Danau Toba dengan cara yang lebih dekat, hangat, dan berkesan.</p>
        <div class="hero-actions">
          <router-link to="/contact" class="btn-primary">Rencanakan kunjungan <span>↗</span></router-link>
          <router-link to="/gallery" class="text-link">Lihat suasana</router-link>
        </div>
      </div>
      <div class="hero-note"><span>01</span><p>Danau Toba<br />North Sumatra</p></div>
    </section>

    <section class="page-section intro-section">
      <div class="section-heading"><p class="eyebrow">Cara kami menyambut Anda</p><h2>Lebih dari sekadar tempat menginap.</h2></div>
      <p class="description">Nikmati pagi yang pelan, air yang jernih, makanan lokal yang hangat, serta keramahan yang membuat Anda ingin kembali lagi.</p>
    </section>

    <section class="page-section services-summary">
      <div class="section-heading centered"><p class="eyebrow">Pengalaman di sini</p><h2>Isi hari Anda dengan hal-hal sederhana.</h2></div>
      <div class="services-grid">
        <router-link to="/food" class="service-item"><span class="service-number">01</span><img src="../assets/food-icon.png" alt="" /><h3>Kuliner lokal</h3><p>Rasa rumahan yang menemani hari Anda di tepi danau.</p><span class="link-more">Jelajahi menu <b>↗</b></span></router-link>
        <router-link to="/water-activities" class="service-item service-featured"><span class="service-number">02</span><img src="../assets/water-activities-icon.png" alt="" /><h3>Wahana air</h3><p>Naikkan energi dengan petualangan seru untuk semua usia.</p><span class="link-more">Lihat aktivitas <b>↗</b></span></router-link>
        <router-link to="/lodging" class="service-item"><span class="service-number">03</span><img src="../assets/lodging-icon.png" alt="" /><h3>Penginapan nyaman</h3><p>Ruang istirahat yang tenang, bersih, dan terasa seperti rumah.</p><span class="link-more">Pilih kamar <b>↗</b></span></router-link>
      </div>
    </section>

    <section class="quote-section"><p>“Di sini, waktu terasa berjalan lebih lambat.”</p><router-link to="/contact" class="btn-secondary">Mari berkenalan</router-link></section>
  </div>
</template>

<script>
export default { name: "HomePage" };
</script>

<style scoped>
.hero-section { min-height: 78vh; padding: clamp(7rem, 15vw, 11rem) clamp(1.25rem, 7vw, 8rem) 5rem; display: flex; align-items: flex-end; position: relative; overflow: hidden; color: white; background: linear-gradient(90deg, rgba(18, 31, 31, .78), rgba(18, 31, 31, .15)), url("../assets/hero-bg.jpg") center/cover; }
.hero-copy { max-width: 680px; position: relative; z-index: 1; }.eyebrow { margin: 0 0 1.25rem; text-transform: uppercase; letter-spacing: .18em; font-size: .72rem; font-weight: 700; color: var(--color-accent); }.hero-section .eyebrow { color: #e9c9a9; }.hero-section h1 { margin: 0; font: 400 clamp(3.5rem, 8vw, 7rem)/.93 Georgia, serif; letter-spacing: -.06em; max-width: 720px; }.hero-section h1 em { color: #e6bd96; }.hero-description { max-width: 470px; margin: 2rem 0; color: rgba(255,255,255,.8); font-size: 1.08rem; line-height: 1.7; }.hero-actions { display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; }.btn-primary, .btn-secondary { display: inline-flex; align-items: center; gap: 1rem; padding: 1rem 1.35rem; border-radius: 999px; text-decoration: none; font-weight: 700; transition: transform .25s, background .25s; }.btn-primary { background: #fffaf2; color: var(--color-ink); }.btn-primary:hover, .btn-secondary:hover { transform: translateY(-3px); }.text-link { color: white; text-underline-offset: 5px; }.hero-note { position: absolute; right: 7vw; top: 22%; border-left: 1px solid rgba(255,255,255,.5); padding-left: 1rem; color: rgba(255,255,255,.72); font-size: .75rem; letter-spacing: .08em; text-transform: uppercase; }.hero-note span { color: #e6bd96; }.hero-note p { line-height: 1.7; }.intro-section { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: end; max-width: 1180px; margin: auto; }.intro-section h2 { max-width: 520px; }.intro-section .description { margin: 0; max-width: 430px; }.centered { text-align: center; }.services-summary { background: var(--color-surface); }.services-grid { max-width: 1180px; margin: 3rem auto 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }.service-item { position: relative; padding: 2.25rem; min-height: 355px; display: flex; flex-direction: column; align-items: flex-start; border: 1px solid var(--color-line); border-radius: var(--radius-lg); text-decoration: none; transition: transform .3s, box-shadow .3s; }.service-item:hover { transform: translateY(-8px); box-shadow: var(--shadow-soft); }.service-featured { background: #dce4dc; border-color: transparent; }.service-number { align-self: flex-end; color: var(--color-muted); font-size: .78rem; }.service-item img { width: 48px; height: 48px; object-fit: contain; margin: 1.5rem 0; }.service-item h3 { margin: 0 0 .75rem; font: 400 1.8rem Georgia, serif; }.service-item p { color: var(--color-muted); line-height: 1.6; margin: 0; }.link-more { margin-top: auto; color: var(--color-accent-strong); font-size: .9rem; font-weight: 700; }.link-more b { margin-left: .35rem; }.quote-section { padding: 6rem 1.25rem; text-align: center; background: #233638; color: white; }.quote-section p { margin: 0 auto 2rem; font: 400 clamp(2rem, 4vw, 3.8rem) Georgia, serif; letter-spacing: -.04em; }.btn-secondary { border: 1px solid rgba(255,255,255,.45); color: white; }
@media (max-width: 760px) { .hero-section { min-height: 82vh; padding: 7rem 1.25rem 3rem; }.hero-note { display: none; }.intro-section, .services-grid { grid-template-columns: 1fr; gap: 2rem; }.intro-section .description { margin: 0; }.service-item { min-height: 300px; } }
</style>
