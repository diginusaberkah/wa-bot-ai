## WhatsApp Bot AI - Baileys

## Fitur
* ChatGPT-4
* Self Mode
* Public Mode

## Instalasi
### Instal Perangkat Lunak/Paket-Paket
#### Untuk Linux
```bash
sudo apt-get install nodejs
sudo apt-get install git
sudo apt-get install yarn
```

#### Untuk Windows
```bash
choco install nodejs
choco install git
choco install yarn
```

#### Untuk MacOS
```bash
brew install node
brew install git
brew install yarn
```

#### Untuk Android (Termux)
```bash
pkg install nodejs
pkg install git
pkg install yarn
```

### Download/Klon Proyek
```bash
git clone https://github.com/diginusaberkah/wa-bot-ai.git
```

### Pindah Direktori (CD)
```bash
cd wa-bot-ai
```

### Application Programming Interface (API)
#### Dapatkan Kunci API
Daftar dan dapatkan kunci API:
<a href="https://forestapi.web.id">https://forestapi.web.id</a>

#### Edit ./config.js > api
```javascript
api: {
  ...
  secret_key: 'Your-API-Key' // Masukan API Key dari ForestAPI disini
}
```

### Instal Dependensi
#### Menggunakan Npm
```bash
npm install
```
#### Atau Menggunakan Yarn
```bash
yarn install
```

### Instal Nodemon
#### Menggunakan Npm
```bash
npm install nodemon -g
```
#### Atau Menggunakan Yarn
```bash
yarn install nodemon -g
```

### Jalankan Server
#### Menggunakan Npm
```bash
npm run start
```

#### Atau Menggunakan Yarn
```bash
yarn run start
```

#### Atau Menggunakan Node
```bash
node run start
```

#### Atau Menggunakan Bun
```bash
bun run start
```

### Jalankan Server (Auto Restart)
#### Menggunakan Nodemon
```bash
nodemon run start
```

## Informasi
* Pembuat / Pengembang: Dani Technology - Full Stack Developer & Software Engineer
* Kontak Pembuat / Pengembang: +62 838-3499-4479 or +62 823-2066-7363 (WhatsApp), dani.technology.id@gmail.com (Email)

## Terimakasih Kepada
* Dani Technology - Full Stack Developer & Software Engineer (Pembuat / Pengembang)
* ForestAPI | <a href="https://forestapi.web.id">forestapi.web.id</a> (Penyedia API)
* @whiskeysockets/baileys (Penyedia Library "Baileys")