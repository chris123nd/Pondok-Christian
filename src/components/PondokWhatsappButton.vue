<template>
  <a :href="whatsappLink" target="_blank" class="whatsapp-button">
    <img src="../assets/whatsapp-icon.png" alt="WhatsApp Icon" class="whatsapp-icon" />
    Pesan via WhatsApp
  </a>
</template>

<script>
export default {
  name: "PondokWhatsappButton", // Diubah namanya
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: "Halo, saya ingin bertanya tentang layanan di Pondok Christian.",
    },
  },
  computed: {
    whatsappLink() {
      const encodedMessage = encodeURIComponent(this.message);
      // Untuk Indonesia, biasanya dimulai dengan 62 tanpa + atau 0.
      // Pastikan nomor Anda sudah diformat ke 62xxxxxxxxxx
      const cleanPhoneNumber = this.phoneNumber.startsWith("+") ? this.phoneNumber.substring(1) : this.phoneNumber;
      return `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
    },
  },
};
</script>

<style scoped>
.whatsapp-button {
  display: inline-flex;
  align-items: center;
  background-color: #25d366; /* Warna hijau WhatsApp */
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.whatsapp-button:hover {
  background-color: #1da851;
  transform: translateY(-2px);
}

.whatsapp-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
</style>
