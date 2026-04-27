import { WebSocketServer } from 'ws';

// Tahap 1: Inisialisasi komponen WebSocket Server dan memaksanya bersiaga
// menerima aliran TCP pada port jaringan spesifik 8080.
const wss = new WebSocketServer({ port: 8080 });
console.log('Fasilitas server WebSocket telah diaktifkan pada port 8080.');

// Tahap 2: Pengikatan pendengar kejadian global untuk menyambut rutinitas
// inisiasi koneksi baru yang berhasil melewati validasi upgrade handshake HTTP.
wss.on('connection', function connection(ws, req) {
  
  // Mencatat dan mengekstraksi parameter pengenal jaringan alamat IP klien.
  // Ini krusial sebagai fondasi penyusunan batasan laju (Rate Limiting) di masa depan.
  const ipAddress = req.socket.remoteAddress;
  console.log(`Peringatan: Klien entitas baru tersambung dari alamat: ${ipAddress}`);

  // Menetapkan pendengar pasif untuk isolasi kegagalan koneksi dadakan.
  ws.on('error', function error(err) {
    console.error('Terdeteksi interupsi kesalahan protokol pada sirkuit klien:', err);
  });

  // Tahap 3: Merakit reseptor pemicu yang akan dieksekusi secara otomatis
  // setiap kali sebuah frame data valid diterima dari arah klien.
  ws.on('message', function message(data) {
    // Memproses representasi buffer data yang masuk menjadi wujud teks yang dapat diurai.
    const pesanMasuk = data.toString();
    console.log(`Log Pemasukan: Menerima transmisi pesan -> ${pesanMasuk}`);
    
    // Rutinitas pembalikan pantulan (Echo Logic): Server menggunakan metode
    // 'send()' untuk mendepak kembali paket konfirmasi ke ruang jaringan klien.
    // Metode ini meniadakan kebutuhan perakitan dokumen respons HTTP yang kaku.
    ws.send(`Pengakuan Server (Gema): Pesan '${pesanMasuk}' telah sukses diamankan.`);
  });

  // Tahap 4: Menginjeksi notifikasi sambutan proaktif langsung kepada klien
  // tepat di milidetik pasca-handshake selesai, mengonfirmasi pembukaan gerbang soket.
  ws.send('Sirkuit WebSocket Dua Arah Terotentikasi dan Aktif Bersedia.');
});