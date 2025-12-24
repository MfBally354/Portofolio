# 🚀 Personal Portfolio Website - Iqbal Guntur Bismoko

<img width="1920" height="1080" alt="Screenshot (598)" src="https://github.com/user-attachments/assets/efb727ac-6aa9-49cf-8647-870fd83f5b30" />

## 📋 Tentang Project

Website personal branding yang menampilkan profil, keahlian, project, dan informasi kontak saya sebagai mahasiswa Pendidikan Teknik Informatika dan Komputer (PTIK) Universitas Negeri Semarang dengan minat khusus di bidang **Linux System Administration** dan **Web Development**.

**Live Demo:** https://MfBally354.github.io/Portofolio/

---

## ✨ Fitur

- 🎨 **Modern & Responsive Design** - Tampilan optimal di semua device (Desktop, Tablet, Mobile)
- 🖼️ **Hero Section** - Dengan animasi floating pada profile image
- 📖 **About Section** - Timeline pendidikan dan pengalaman lengkap
- 💻 **Skills Showcase** - Menampilkan tech stack dengan icon dan deskripsi
- 📁 **Project Portfolio** - Gallery project dengan screenshot dan tech badge
- 📞 **Contact Section** - Email, WhatsApp, GitHub, dan LinkedIn
- ⚡ **Smooth Navigation** - Smooth scrolling antar section
- 🎭 **Interactive Animations** - Hover effects dan transitions

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Struktur website
- **CSS3** - Styling dan animasi
- **JavaScript (Vanilla)** - Interaktivitas dan smooth scrolling

### Design
- **Custom CSS** - No framework, fully custom design
- **Responsive Grid & Flexbox** - Layout modern
- **CSS Animations** - Floating, hover effects, transitions

### Icons & Assets
- **Devicon CDN** - Logo teknologi (Python, Linux, Bash)
- **Custom SVG** - Icon untuk social media

---

## 📁 Struktur Project

```
portofolio/
├── assets/
│   └── images/
│       ├── profil.jpeg              # Foto profil
│       └── projects/                # Screenshot project
│           ├── PBO.png
│           ├── Pengaduan_Kampus.png
│           └── RSKIKO.png
├── screenshots/                     # Screenshot untuk README (opsional)
│   └── preview.png
├── index.html                       # Main HTML file
├── style.css                        # Main CSS file
└── README.md                        # Dokumentasi project
```

---

## 🚀 Cara Menjalankan

### 1. Clone Repository
```bash
git clone https://github.com/[username]/portfolio-website.git
cd portfolio-website
```

### 2. Jalankan dengan Python HTTP Server
```bash
python3 -m http.server 8010
```

### 3. Atau dengan PHP Built-in Server
```bash
php -S localhost:8010
```

### 4. Buka Browser
```
http://localhost:8010
```

---

## 📸 Screenshots

### Desktop View
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ef1c0cc8-82f0-4dad-abad-ea891410865a" />


### Mobile View
![WhatsApp Image 2025-12-24 at 20 04 30](https://github.com/user-attachments/assets/22523ed6-5f37-4acd-aad5-dc309afd868e)


### Skills Section
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5fa4052c-43be-448f-a551-e425b70fb5a2" />


---

## 🎨 Customization

### Mengganti Foto Profil
1. Siapkan foto Anda (format JPG/PNG, ukuran 500x500px)
2. Rename menjadi `profil.jpeg`
3. Letakkan di `assets/images/profil.jpeg`
4. Update path di `index.html` jika perlu

### Mengganti Warna Theme
Edit variabel CSS di `style.css`:
```css
:root {
    --primary-color: #2563eb;      /* Warna utama */
    --secondary-color: #1e40af;    /* Warna sekunder */
    --accent-color: #3b82f6;       /* Warna aksen */
}
```

### Menambah Project
1. Tambahkan screenshot project di `assets/images/projects/`
2. Copy-paste struktur `project-card` di `index.html`
3. Sesuaikan konten dan gambar

### Menambah Tech Stack
Tambahkan tag baru di bagian `tech-tags`:
```html
<span class="tech-tag">Nama Teknologi</span>
```

---

## 🌐 Deployment

### GitHub Pages
1. Push project ke GitHub repository
2. Settings → Pages → Source: main branch
3. Website akan tersedia di `https://[username].github.io/[repo-name]`

### Netlify
1. Daftar di [netlify.com](https://netlify.com)
2. Drag & drop folder project
3. Done! Auto SSL dan custom domain available

### Vercel
1. Daftar di [vercel.com](https://vercel.com)
2. Import repository dari GitHub
3. Auto deploy setiap push

---

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

---

## 🤝 Kontribusi

Kontribusi, issues, dan feature requests sangat diterima!

1. Fork project ini
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 Lisensi

Project ini adalah open source dan tersedia di bawah [MIT License](LICENSE).

---

## 👤 Author

**Iqbal Guntur Bismoko**

- 🎓 Mahasiswa PTIK - Universitas Negeri Semarang
- 💼 Background: Teknik Komputer dan Jaringan (TKJ)
- 🔧 Focus: Linux System Administration & Web Development

**Connect with me:**
- 📧 Email: [iqbalguntur313@gmail.com](mailto:iqbalguntur313@gmail.com)
- 💬 WhatsApp: [+62 895-3524-1562](https://wa.me/62895352415628)
- 🐙 GitHub: [@MfBally354](https://github.com/MfBally354)
- 💼 LinkedIn: [Iqbal Guntur Bismoko](https://www.linkedin.com/in/iqbal-guntur-bismoko-29291533a/)

---

## 🙏 Acknowledgments

- Design inspiration dari berbagai portfolio modern
- Icons dari [Devicon](https://devicon.dev/)
- Fonts dari system default (Segoe UI)

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/MfBally354/Portfolio)
![GitHub stars](https://img.shields.io/github/stars/MfBally354/Portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/MfBally354/Portfolio?style=social)

---

<p align="center">
  Made with ❤️ and ☕ by Iqbal Guntur Bismoko
</p>

<p align="center">
  ⭐ Star this repo if you find it helpful!
</p>
