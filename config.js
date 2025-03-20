/**
Proyek ini dilindungi oleh hak cipta dan lisensi ISC. Pengembangan proyek ini dilakukan oleh Dani Technology (Full Stack Developer & Software Engineer) pada tanggal 21 Februari 2025. Perlu diingat bahwa pelanggaran hak cipta dapat mengakibatkan konsekuensi hukum yang serius, termasuk ganti rugi dan tindakan hukum lainnya. Oleh karena itu, kami berharap Anda untuk menghormati hak cipta kami dan tidak melakukan tindakan yang dapat melanggar hak cipta ini.

KONTAK DEVELOPER:

- WhatsApp: +62 838-3499-4479 atau +62 823-2066-7363
- Email: dani.technology.id@gmail.com
- GitHub: @dani-techno

SYARAT-SYARAT LISENSI:

- Anda tidak diperbolehkan mengklaim proyek ini sebagai milik Anda sendiri.
- Anda tidak diperbolehkan menjual proyek ini tanpa izin tertulis dari pemilik hak cipta.
- Anda tidak diperbolehkan mengubah atau menghapus atribusi hak cipta dari proyek ini.

KONSEKUENSI PELANGGARAN

Jika Anda melanggar syarat-syarat lisensi ini, maka Anda dapat menghadapi konsekuensi hukum berikut:

- Ganti rugi atas pelanggaran hak cipta sebesar Rp 1.000.000.000 (satu miliar rupiah) atau lebih, sesuai dengan ketentuan Pasal 113 Undang-Undang Hak Cipta No. 28 Tahun 2014.
- Penghentian penggunaan proyek ini dan semua derivatifnya, sesuai dengan ketentuan Pasal 114 Undang-Undang Hak Cipta No. 28 Tahun 2014.
- Tindakan hukum lainnya yang sesuai, termasuk tuntutan pidana dan perdata, sesuai dengan ketentuan Pasal 115 Undang-Undang Hak Cipta No. 28 Tahun 2014.

PASAL-PASAL YANG RELEVAN

- Pasal 113 Undang-Undang Hak Cipta No. 28 Tahun 2014 tentang ganti rugi atas pelanggaran hak cipta.
- Pasal 114 Undang-Undang Hak Cipta No. 28 Tahun 2014 tentang penghentian penggunaan proyek yang melanggar hak cipta.
- Pasal 115 Undang-Undang Hak Cipta No. 28 Tahun 2014 tentang tindakan hukum lainnya yang sesuai.

DENGAN MENGGUNAKAN PROYEK INI, ANDA MENYATAKAN BAHWA ANDA TELAH MEMBACA, MEMAHAMI, DAN MENYETUJUI SYARAT-SYARAT LISENSI DAN HAK CIPTA INI.

PERINGATAN AKHIR:

Dengan ini, kami memberikan peringatan bahwa pelanggaran hak cipta atas proyek ini akan diambil tindakan hukum yang serius. Jika Anda terbukti menjual atau mengklaim proyek ini sebagai milik Anda sendiri tanpa izin, kami akan mengambil langkah-langkah hukum yang diperlukan untuk melindungi hak cipta kami, termasuk ganti rugi dan tindakan hukum lainnya.
**/

module.exports = {
  pairing_mode: false,
  prefix: '/', // Delete or disable section code "prefix:," if the bot does not want to use prefix.
  chat_mode: 'default', // default/self/private/group
  connection_status_message: false,
  only_show_command_chat: false,
  group_member_status_message: false,
  bot_offline_status: false,
  automatic_read_messages: true,
  automatic_update_profile_status: [false, "Status"],
  automatic_typing_or_recording: [true, "typing"], // typing/recording
  owner_number: '6285885198417',
  owner_name: 'Syarif Hidayat.',
  bot_name: 'Layanan Pelanggan',
  api: {
    base_url: 'https://forestapi.web.id',
    secret_key: sk-x4D5WouaC8t7an'
  },
  reactions: {
    process: '⏳',
    success: '✅',
    failed: '❎'
  }
};