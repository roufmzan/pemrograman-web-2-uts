# 🚀 Proyek Website Artikel & WebSocket Real-Time

Proyek ini dikembangkan untuk tugas **Pemrograman Web 2**. Berisi implementasi website artikel statis yang modern serta sistem komunikasi dua arah (Full-Duplex) menggunakan protokol **WebSocket**.

## 📂 Struktur Folder
- `index.html` - Halaman utama blog artikel (Layout Grid & Sidebar).
- `style.css` - Desain responsif dan modern untuk website.
- `artikel-detail.html` - Template halaman isi artikel.
- `Perakitan Komponen Infrastruktur Server (Backend).js` - Server WebSocket (Backend) berbasis Node.js.
- `test-websocket.html` - Client Interface untuk mengetes koneksi WebSocket.
- `Transformasi Arsitektur Web Real.pdf` - Materi referensi arsitektur web.

---

## 🛠️ Cara Menjalankan Project

### 1. Website Artikel (Frontend)
Cukup buka file `index.html` langsung di browser Anda (Chrome/Edge/Firefox). Tidak memerlukan server khusus.

### 2. Server WebSocket (Backend)
Untuk menjalankan fitur real-time, pastikan Anda sudah menginstall Node.js, lalu ikuti langkah berikut:

1. **Install Dependencies**:
   Buka terminal di folder project ini dan jalankan:
   ```bash
   npm install
   ```

2. **Jalankan Server**:
   ```bash
   Perakitan Komponen Infrastruktur Server (Backend).js
   ```
   *Jika berhasil, akan muncul log: `Fasilitas server WebSocket telah diaktifkan pada port 8080.`*

3. **Tes Koneksi**:
   Buka file `test-websocket.html` di browser. Anda bisa mencoba mengirim pesan dan server akan membalas secara otomatis (Echo).

---

## 💡 Konsep Utama (Materi Kuliah)
Proyek ini mendemonstrasikan beberapa konsep penting dalam Pemrograman Web 2:
- **Responsive Web Design**: Menggunakan CSS Grid & Flexbox.
- **WebSocket Protocol**: Berbeda dengan HTTP biasa, WebSocket memungkinkan server mengirim data ke klien tanpa diminta (Push).
- **Event-Driven Architecture**: Menggunakan `.on('message')` dan `.on('connection')` untuk menangani aksi secara asinkron.
- **Real-Time Communication**: Mengurangi latensi dan overhead header dibandingkan metode Polling tradisional.



