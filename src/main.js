import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'
import Alpine from 'alpinejs'

// Import file JSON kita
import siteData from './data/content.json'

// Daftarkan data ke Global Store Alpine dengan nama 'konten'
document.addEventListener('alpine:init', () => {
  Alpine.store('konten', siteData)

  // 2. LOGIKA MODULAR: Daftarkan Aksi Global untuk WhatsApp
  Alpine.store('aksi', {
    
    // Fungsi untuk tombol biasa
    keWhatsApp(pesanKhusus = null) {
      const nomor = siteData.perusahaan.nomor_wa;
      const pesan = pesanKhusus || siteData.perusahaan.pesan_default;
      const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
      window.open(url, '_blank'); // Buka tab baru ke WA
    },

    // Fungsi canggih khusus untuk Form Footer
    kirimFormKeWA(dataForm) {
      const nomor = siteData.perusahaan.nomor_wa;
      // Merakit data form menjadi teks rapi untuk WA
      const teksPesan = `Halo Bengkel Sumber Manfaat, saya ingin bertanya.\n\n*Nama:* ${dataForm.nama}\n*Email:* ${dataForm.email}\n*No. HP:* ${dataForm.telepon}\n\n*Pesan:*\n${dataForm.pesan}`;
      
      const url = `https://wa.me/${nomor}?text=${encodeURIComponent(teksPesan)}`;
      window.open(url, '_blank');
    }

  })
})

window.Alpine = Alpine
Alpine.start()