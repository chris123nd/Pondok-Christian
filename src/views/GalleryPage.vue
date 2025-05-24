<template>
  <div class="page-section gallery-page">
    <h2>Galeri Foto & Video Pondok Christian</h2>
    <p class="description">Jelajahi keindahan Pondok Christian dan Pantai Lumban Bul Bul melalui koleksi foto dan video kami. Dapatkan gambaran suasana yang akan Anda rasakan saat berkunjung!</p>

    <h3>Foto Kami</h3>
    <div class="image-gallery">
      <img src="../assets/gallery/foto1.jpg" alt="Pondok Christian 1" />
      <img src="../assets/gallery/foto2.jpg" alt="Pondok Christian 2" />
      <img src="../assets/gallery/foto3.jpg" alt="Pondok Christian 3" />
      <img src="../assets/gallery/img4.jpg" alt="Pondok Christian 4" />
      <img src="../assets/gallery/img5.jpg" alt="Pondok Christian 5" />
      <img src="../assets/gallery/img6.jpg" alt="Pondok Christian 6" />
      <img src="../assets/gallery/img7.jpg" alt="Pondok Christian 7" />
      <img src="../assets/gallery/img8.jpg" alt="Pondok Christian 8" />
      <img src="../assets/gallery/img9.jpg" alt="Pondok Christian 9" />
      <img src="../assets/gallery/img10.jpg" alt="Pondok Christian 10" />
    </div>

    <h3>Video Kami</h3>
    <!-- Video portrait (gunakan class portrait) -->
    <div class="video-gallery">
      <div class="video-wrapper">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1842565553249545%2F&show_text=0&width=560"
          width="560"
          height="315"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div class="video-wrapper">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjef.s.718%2Fvideos%2F1011847720445775%2F&show_text=0&width=560"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>

      <!-- Video portrait (gunakan class portrait) -->
      <div class="video-wrapper portrait">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjef.s.718%2Fvideos%2F9789496827833664%2F&show_text=0&width=560"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>

      <!-- Video landscape dari link https://www.facebook.com/ayu.malewa.84/videos/1684196239112048/ -->
      <div class="video-wrapper portrait">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fayu.malewa.84%2Fvideos%2F1684196239112048%2F&show_text=0&width=560"
          width="560"
          height="315"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryPage",
};
</script>

<style scoped>
.gallery-page {
  background-color: #f5f5f5;
  padding: 40px 20px;
}

h2,
h3 {
  text-align: center;
  color: #3f51b5;
}

h2 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.description {
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.2em;
  color: #555;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 kolom */
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto 50px auto;
}

.image-gallery img {
  width: 100%;
  aspect-ratio: 16 / 9; /* Landscape */
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-gallery img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.video-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 kolom sejajar */
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 50px auto;
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Landscape default 16:9 */
  height: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.video-wrapper.portrait {
  padding-bottom: 177.78%; /* Portrait 9:16 */
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 768px) {
  .image-gallery,
  .video-gallery {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
