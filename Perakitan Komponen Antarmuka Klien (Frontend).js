// Lingkungan simulasi ini dapat menggunakan modul 'ws' pada Node.js,
// atau langsung merujuk pada kelas global bawaan jika dieksekusi via browser HTML.
import WebSocket from 'ws';

// Tahap 1: Eksekusi inisiasi objek akan secara otomatis memerintahkan
// protokol TCP di latar belakang untuk memulai rutinitas WebSocket Handshake.
const socketKlien = new WebSocket('ws://localhost:8080');

// Tahap 2: Menanti lampu hijau. Kejadian 'open' baru akan menyala sesaat
// setelah kode status 101 Switching Protocols disetujui server.
socketKlien.addEventListener('open', function (event) {
  console.log('Terminal Klien: Koneksi lintas jaringan terbentuk sempurna.');
  
  // Menggunakan saluran komunikasi yang sedang siaga untuk segera memompa 
  // transmisi bit perintah kepada sistem kontrol pusat.
  socketKlien.send('Inisialisasi sistem pemantauan telemetri waktu-nyata.');
});

// Tahap 3: Menyusun reseptor reaktif asinkron yang melahap setiap struktur 
// pesan masuk dorongan (*push payload*) dari peladen soket.
socketKlien.addEventListener('message', function (event) {
  console.log('Penyiaran Instan dari Peladen Pusat:', event.data);
});

// Tahap 4: Penanganan terminasi konektivitas terencana atau penutupan mulus.
socketKlien.addEventListener('close', function (event) {
  console.log(`Pemutusan relai koneksi dieksekusi dengan kode referensi: ${event.code}`);
});

// Penanggulangan skenario kegagalan interupsi saluran, seperti perutean down.
socketKlien.addEventListener('error', function (error) {
  console.error('Anomali jaringan terminal terdeteksi:', error);
});