<template>
  <section class="admin-auth">
    <div class="auth-card">
      <p class="eyebrow">PONDOK CHRISTIAN</p>
      <h1>Daftar Admin</h1>
      <p class="muted">Buat akun untuk mengelola website.</p>
      <form @submit.prevent="signup">
        <label>Nama lengkap<input v-model="fullName" required autocomplete="name" /></label>
        <label>Email<input v-model="email" type="email" required autocomplete="email" /></label>
        <label>Password<input v-model="password" type="password" minlength="6" required autocomplete="new-password" /></label>
        <p v-if="message" class="success">{{ message }}</p>
        <p v-if="error" class="error">{{ error }}</p>
        <button :disabled="loading" type="submit">{{ loading ? 'Memproses…' : 'Buat akun' }}</button>
      </form>
      <router-link class="back-link" to="/admin/login">Sudah punya akun? Masuk</router-link>
    </div>
  </section>
</template>
<script>
import { supabase } from "../lib/supabase";
export default { name: "AdminSignup", data: () => ({ fullName: "", email: "", password: "", loading: false, error: "", message: "" }), methods: { async signup() { if (!supabase) { this.error = "Konfigurasi Supabase belum tersedia."; return; } this.loading = true; this.error = ""; this.message = ""; const { error } = await supabase.auth.signUp({ email: this.email, password: this.password, options: { data: { full_name: this.fullName } } }); if (error) this.error = "Pendaftaran gagal. Periksa email dan password Anda."; else this.message = "Akun berhasil dibuat. Cek email untuk konfirmasi, lalu masuk."; this.loading = false; } } };
</script>
<style scoped>
.admin-auth{min-height:70vh;display:grid;place-items:center;padding:40px 20px;background:#f7f4ee}.auth-card{width:min(100%,420px);background:white;padding:36px;border-radius:20px;box-shadow:0 18px 50px #233b3514}.eyebrow{color:#b48138;font-weight:800;letter-spacing:.14em;font-size:12px}.muted{color:#66736d}.auth-card form{display:grid;gap:18px;margin-top:26px}.auth-card label{display:grid;gap:8px;font-weight:700;color:#233b35}.auth-card input{padding:13px;border:1px solid #d9ded8;border-radius:10px;font:inherit}.auth-card button{padding:14px;border:0;border-radius:10px;background:#233b35;color:white;font-weight:800;cursor:pointer}.error{color:#b42318;font-size:14px}.success{color:#16734b;font-size:14px}.back-link{display:block;margin-top:20px;color:#233b35;font-weight:700}
</style>
