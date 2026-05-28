# 📑 Project Documentation: JOKAS Web Platform
**Version:** 1.0.0  
**Status:** Production Ready  
**Developer:** Haryadi Yusuf  
**Tech Stack:** React 19, Vite 6, Tailwind CSS v4, Groq AI API.

---

## 1. Project Overview
**Jokas** adalah platform layanan hybrid yang mengintegrasikan bantuan akademis (SD-Kuliah) dan solusi kreatif digital (Web Development, UI/UX). Aplikasi ini dirancang dengan pendekatan *high-performance landing page* yang berfokus pada konversi pelanggan melalui integrasi asisten kecerdasan buatan (AI).

---

## 2. Technical Stack
Sistem dibangun menggunakan arsitektur modern untuk menjamin skalabilitas:
*   **Frontend:** React 19 (Hooks, Functional Components).
*   **Build Tool:** Vite 6 (ES Modules, HMR).
*   **Styling:** Tailwind CSS v4 (Zero-config engine, CSS-first architecture).
*   **Animation:** Framer Motion (Smooth transitions, AnimatePresence).
*   **AI Engine:** Groq SDK (Model: Llama-3.3-70b-versatile).
*   **Icons:** Lucide React (Streamlined UI icons).
*   **Deployment:** Vercel (CI/CD integration).

---

## 3. Directory Structure
Aplikasi mengikuti standar **Clean Architecture** untuk memisahkan antara data, komponen UI, dan logika bisnis:

```text
root/
├── .env.local            # Variabel sensitif (API Keys)
├── index.html            # Entry point & SEO Meta Tags
├── src/
│   ├── components/       # Komponen global (Navbar, Footer, ChatAI)
│   ├── sections/         # Modul halaman utama (Hero, About, Services)
│   ├── data/             # Centralized Content (Brain of the app)
│   │   ├── services.js
│   │   ├── portfolioData.js
│   │   └── siteConfig.js
│   ├── App.jsx           # Root component & Route management
│   └── main.jsx          # React DOM render
└── vite.config.js        # Vite & Tailwind v4 plugin config
```

---

## 4. Core Features & Logic
### 4.1. Data-Driven Content Management
Seluruh konten teks, link, dan path gambar dipusatkan di folder `src/data/`. Hal ini memungkinkan pembaruan konten secara instan tanpa perlu memodifikasi kode program di level komponen.

### 4.2. Intelligent AI Assistant (Groq Integration)
Asisten AI diintegrasikan menggunakan **Groq LPU (Language Processing Unit)** untuk respons yang mendekati *real-time*.
*   **Prompt Engineering:** AI dikonfigurasi sebagai konsultan jasa yang memahami batasan teknis.
*   **Human Handover Logic:** Jika pertanyaan menyentuh detail pengerjaan materi atau spesifikasi aplikasi yang kompleks, AI secara otomatis melakukan filtrasi dan mengarahkan pengguna ke WhatsApp Owner untuk verifikasi manusia.

### 4.3. Responsive Slideshow & Marquee
*   **Hero Slideshow:** Menggunakan `setInterval` dan `AnimatePresence` untuk transisi visual dinamis.
*   **Social Proof Marquee:** Animasi loop linear untuk menampilkan bukti pembayaran dan interaksi pelanggan guna membangun kepercayaan (*trust*).

---

## 5. Security & Environment
Aplikasi menggunakan **Environment Variables** untuk melindungi API Key pihak ketiga.
*   **Variable Name:** `VITE_GROQ_API_KEY`
*   **Protection:** File `.env.local` dikecualikan dari repositori Git melalui `.gitignore`. Di Vercel, key ini dikelola melalui dashboard *Secret Management*.

---

## 6. Installation & Development
Untuk menjalankan lingkungan pengembangan lokal:

1.  **Clone Repository:**
    `git clone https://github.com/haryadi14/jokas-remake.git`
2.  **Install Dependencies:**
    `npm install`
3.  **Setup Environment:**
    Buat file `.env.local` dan masukkan API Key.
4.  **Run Dev Server:**
    `npm run dev`

---

## 7. Deployment Guide
Aplikasi dioptimasi untuk platform **Vercel**:
1.  Push perubahan ke branch `main` di GitHub.
2.  Vercel akan mendeteksi perubahan dan melakukan otomatisasi **Production Build**.
3.  Proses build menggunakan perintah `npm run build` yang menghasilkan bundle statis yang telah dikompresi (Gzip/Brotli).

---

## 8. Maintenance & Scaling
*   **Content Update:** Cukup edit file di `src/data/`.
*   **AI Tuning:** Modifikasi `system prompt` di `ChatAI.jsx` jika ada perubahan kebijakan layanan.
*   **Scaling:** Arsitektur siap untuk ditambahkan sistem *Backend* (Supabase/Node.js) jika di kemudian hari dibutuhkan fitur manajemen akun pelanggan.

---

**Dokumentasi ini dibuat untuk memastikan transparansi sistem dan kemudahan pengembangan berkelanjutan bagi tim pengembang Jokas.**
