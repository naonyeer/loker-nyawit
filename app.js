// ============ DATA STORE ============
const STORAGE_KEY = 'destiansawit_data';

function getDefaultData() {
    return {
        currentUser: null,
        users: [
            { id: 1, nama: 'Admin DestianSawit', username: 'admin', email: 'admin@destiansawit.id', phone: '081234567890', password: 'admin123', role: 'perusahaan', joinDate: '2025-01-01' },
            { id: 2, nama: 'Budi Santoso', username: 'budi', email: 'budi@gmail.com', phone: '082112345678', password: '123456', role: 'pekerja', joinDate: '2025-06-15' },
            { id: 3, nama: 'PT Sawit Nusantara', username: 'sawitnusa', email: 'hr@sawitnusa.co.id', phone: '081398765432', password: '123456', role: 'perusahaan', joinDate: '2025-03-10' },
        ],
        loker: [
            { id: 1, userId: 3, perusahaan: 'PT Sawit Nusantara', posisi: 'Pemanen', lokasi: 'Riau', kota: 'Pelalawan', tipe: 'Tetap', gaji: 3500000, deskripsi: 'Dibutuhkan pemanen sawit berpengalaman untuk area kebun seluas 5000 Ha.\n\nSyarat:\n- Usia 20-45 tahun\n- Sehat jasmani & rohani\n- Pengalaman min 1 tahun\n- Bersedia tinggal di mess\n\nBenefit:\n- Gaji pokok + premi\n- Mess gratis\n- BPJS\n- Makan 3x sehari', kontak: '081398765432', jumlah: 15, tanggal: '2026-03-12', status: 'aktif' },
            { id: 2, userId: 3, perusahaan: 'PT Kelapa Sawit Makmur', posisi: 'Mandor', lokasi: 'Kalimantan Barat', kota: 'Ketapang', tipe: 'Tetap', gaji: 5500000, deskripsi: 'Dibutuhkan mandor kebun sawit untuk mengawasi 50 pemanen.\n\nSyarat:\n- Pengalaman min 3 tahun sebagai mandor\n- Tegas dan bertanggung jawab\n- Mampu memimpin tim\n\nBenefit:\n- Gaji pokok tinggi\n- Bonus produksi\n- Rumah dinas\n- Kendaraan operasional', kontak: '081234567890', jumlah: 3, tanggal: '2026-03-11', status: 'aktif' },
            { id: 3, userId: 1, perusahaan: 'PT Agro Lestari', posisi: 'Supir Truk', lokasi: 'Sumatera Utara', kota: 'Labuhan Batu', tipe: 'Kontrak', gaji: 4000000, deskripsi: 'Dibutuhkan supir truk pengangkut TBS (Tandan Buah Segar) dari kebun ke pabrik.\n\nSyarat:\n- Memiliki SIM B1\n- Pengalaman mengemudi truk\n- Bersedia bekerja shift\n\nBenefit:\n- Gaji + insentif per trip\n- Asuransi\n- Uang makan', kontak: '085312345678', jumlah: 8, tanggal: '2026-03-10', status: 'aktif' },
            { id: 4, userId: 1, perusahaan: 'PT Inti Sawit Sejahtera', posisi: 'Pemupuk', lokasi: 'Jambi', kota: 'Muaro Jambi', tipe: 'Harian', gaji: 2500000, deskripsi: 'Dibutuhkan tenaga pemupuk untuk area replanting.\n\nSyarat:\n- Rajin & disiplin\n- Kuat angkat pupuk\n- Tidak perlu pengalaman\n\nBenefit:\n- Bayaran harian\n- Makan siang\n- Transportasi', kontak: '087712345678', jumlah: 20, tanggal: '2026-03-09', status: 'aktif' },
            { id: 5, userId: 3, perusahaan: 'PT Sawit Borneo Jaya', posisi: 'Pemanen', lokasi: 'Kalimantan Tengah', kota: 'Kotawaringin Timur', tipe: 'Borongan', gaji: 4500000, deskripsi: 'Butuh pemanen sawit sistem borongan, penghasilan bisa lebih tinggi!\n\nSyarat:\n- Punya dodos/egrek sendiri lebih diutamakan\n- Pengalaman panen sawit\n- Target min 1.5 ton/hari\n\nBenefit:\n- Bayaran per kg TBS\n- Bonus target\n- Mess & makan', kontak: '089612345678', jumlah: 25, tanggal: '2026-03-08', status: 'aktif' },
        ],
        forum: [
            {
                id: 1, userId: 2, judul: 'Tips Panen Sawit Biar Cepat & Hasilnya Banyak', kategori: 'tips', isi: 'Halo semua, mau share tips buat teman-teman pemanen sawit biar hasil panen bisa maximal:\n\n1. Pastikan dodos/egrek tajam sebelum ke kebun\n2. Mulai panen dari blok terjauh dulu\n3. Potong pelepah sebelum panen biar gampang\n4. Kumpulkan brondolan jangan sampai ketinggalan\n5. Bawa air minum yang cukup\n\nSemoga membantu!', tanggal: '2026-03-12', replies: [
                    { userId: 1, text: 'Mantap tips-nya bang! Tambahan, jangan lupa cek buah yang sudah matang bener, biar kualitasnya bagus.', tanggal: '2026-03-12' },
                    { userId: 3, text: 'Betul, kalau brondolan banyak ketinggalan nanti kena tegur mandor 😅', tanggal: '2026-03-12' }
                ]
            },
            {
                id: 2, userId: 1, judul: 'Gaji Pemanen di Riau 2026 Berapa?', kategori: 'gaji', isi: 'Ada yang tau update gaji pemanen sawit di Riau sekarang berapa ya? Kemarin denger katanya sudah naik. Soalnya lagi cari2 info buat pindah kebun.', tanggal: '2026-03-11', replies: [
                    { userId: 2, text: 'Di tempat saya Riau gaji pokok 3.2 juta + premi produksi bisa sampai 5 juta total.', tanggal: '2026-03-11' },
                ]
            },
            { id: 3, userId: 2, judul: 'Pengalaman Kerja di Kebun Sawit Kalimantan', kategori: 'pengalaman', isi: 'Saya sudah 5 tahun kerja di kebun sawit Kalimantan. Mau berbagi pengalaman suka duka jadi pemanen. Awalnya berat emang, tapi lama-lama terbiasa. Yang penting fisik kuat dan niat kerja.', tanggal: '2026-03-10', replies: [] },
            {
                id: 4, userId: 1, judul: 'Rekomendasi Dodos Merek Apa yang Bagus?', kategori: 'alat', isi: 'Mau tanya dong, dodos/egrek merek apa yang tahan lama dan tajam? Budget sekitar 200-300 ribu. Terima kasih sebelumnya.', tanggal: '2026-03-09', replies: [
                    { userId: 2, text: 'Coba merek "Cap Garuda" bang, saya pakai sudah 2 tahun masih awet. Harga 250rb di toko pertanian.', tanggal: '2026-03-09' },
                ]
            },
            {
                id: 5, userId: 2, judul: 'Curhat: Rindu Keluarga di Kampung', kategori: 'curhat', isi: 'Sudah 3 bulan di kebun belum pulang. Kangen anak istri di kampung. Semangat buat teman-teman yang senasib. Kita kerja keras demi keluarga! 💪', tanggal: '2026-03-08', replies: [
                    { userId: 1, text: 'Semangat bang! Kita pasti bisa. Demi keluarga semua ini worth it 🙏', tanggal: '2026-03-08' },
                    { userId: 3, text: 'Iya sama bang, saya juga udah 4 bulan. Untung sekarang bisa video call. Sabar ya!', tanggal: '2026-03-08' },
                ]
            },
        ],
        chats: [
            {
                id: 1, participants: [2, 3], messages: [
                    { from: 3, text: 'Halo, kami lihat profil Anda menarik. Apakah berminat kerja di kebun kami di Riau?', time: '2026-03-12 08:30' },
                    { from: 2, text: 'Halo pak, terima kasih. Boleh tau detail pekerjaannya?', time: '2026-03-12 08:35' },
                    { from: 3, text: 'Posisi pemanen, gaji 3.5jt + premi. Mess dan makan ditanggung. Minat?', time: '2026-03-12 08:40' },
                    { from: 2, text: 'Wah menarik pak. Kapan bisa mulai? Saya bersedia', time: '2026-03-12 08:45' },
                ]
            },
            {
                id: 2, participants: [2, 1], messages: [
                    { from: 1, text: 'Selamat datang di DestianSawit! Ada yang bisa dibantu?', time: '2026-03-11 10:00' },
                    { from: 2, text: 'Terima kasih admin, saya mau tanya cara posting pengalaman kerja', time: '2026-03-11 10:05' },
                    { from: 1, text: 'Silakan ke menu Forum, lalu klik "Buat Topik Baru". Pilih kategori Pengalaman ya 😊', time: '2026-03-11 10:10' },
                ]
            },
        ],
        gajiData: [
            { provinsi: 'Riau', posisi: 'Pemanen', gaji: 'Rp 3.200.000 - 4.500.000', tunjangan: 'Mess, Makan, BPJS', premi: 'Rp 150/kg' },
            { provinsi: 'Sumatera Utara', posisi: 'Pemanen', gaji: 'Rp 2.800.000 - 4.000.000', tunjangan: 'Mess, BPJS', premi: 'Rp 120/kg' },
            { provinsi: 'Kalimantan Barat', posisi: 'Pemanen', gaji: 'Rp 3.000.000 - 4.200.000', tunjangan: 'Mess, Makan, BPJS', premi: 'Rp 140/kg' },
            { provinsi: 'Kalimantan Tengah', posisi: 'Pemanen', gaji: 'Rp 3.500.000 - 5.000.000', tunjangan: 'Mess, Makan, BPJS, Transport', premi: 'Rp 160/kg' },
            { provinsi: 'Jambi', posisi: 'Pemanen', gaji: 'Rp 2.500.000 - 3.500.000', tunjangan: 'Mess, BPJS', premi: 'Rp 100/kg' },
            { provinsi: 'Riau', posisi: 'Mandor', gaji: 'Rp 5.000.000 - 7.000.000', tunjangan: 'Rumah, Kendaraan, BPJS', premi: 'Bonus target' },
            { provinsi: 'Kalimantan Timur', posisi: 'Pemanen', gaji: 'Rp 3.200.000 - 4.800.000', tunjangan: 'Mess, Makan, BPJS', premi: 'Rp 155/kg' },
            { provinsi: 'Sumatera Selatan', posisi: 'Pemanen', gaji: 'Rp 2.800.000 - 3.800.000', tunjangan: 'Mess, Makan', premi: 'Rp 110/kg' },
            { provinsi: 'Kalimantan Barat', posisi: 'Supir Truk', gaji: 'Rp 3.500.000 - 4.500.000', tunjangan: 'BPJS, Uang Makan', premi: 'Per trip' },
            { provinsi: 'Papua', posisi: 'Pemanen', gaji: 'Rp 4.000.000 - 6.000.000', tunjangan: 'Mess, Makan, BPJS, Transport', premi: 'Rp 200/kg' },
        ]
    };
}

let appData;
function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    appData = saved ? JSON.parse(saved) : getDefaultData();
    if (!saved) saveData();
}
function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(appData)); }

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
    }, 1800);
    initNavigation();
    renderDashboard();
    renderLoker();
    renderForum();
    renderChatList();
    renderGajiTable();
    renderProfil();
    updateStats();
    updateUserUI();
});

// ============ NAVIGATION ============
function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => navigateTo(item.dataset.page));
    });
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        item.addEventListener('click', () => navigateTo(item.dataset.page));
    });
}

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + page)?.classList.add('active');
    document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
    document.querySelector(`.mobile-nav-item[data-page="${page}"]`)?.classList.add('active');
}

// ============ STATS ============
function updateStats() {
    document.getElementById('stat-loker').textContent = appData.loker.length;
    document.getElementById('stat-users').textContent = appData.users.length;
    document.getElementById('stat-diskusi').textContent = appData.forum.length;
    document.getElementById('stat-hired').textContent = Math.floor(appData.users.length * 1.5);
    document.getElementById('loker-count').textContent = appData.loker.length;
    document.getElementById('forum-count').textContent = appData.forum.length;
    document.getElementById('chat-count').textContent = appData.chats.length;
}

function updateUserUI() {
    const user = appData.currentUser;
    if (user) {
        document.getElementById('nav-username').textContent = user.nama;
        document.getElementById('nav-role').textContent = user.role === 'pekerja' ? '🔧 Pekerja Sawit' : '🏢 Perusahaan';
        document.getElementById('nav-avatar').innerHTML = user.nama.charAt(0).toUpperCase();
        document.getElementById('btn-login').innerHTML = '<i class="fas fa-sign-out-alt"></i><span>Keluar</span>';
        document.getElementById('btn-login').onclick = handleLogout;
    } else {
        document.getElementById('nav-username').textContent = 'Guest';
        document.getElementById('nav-role').textContent = 'Belum Login';
        document.getElementById('nav-avatar').innerHTML = '<i class="fas fa-user"></i>';
        document.getElementById('btn-login').innerHTML = '<i class="fas fa-sign-in-alt"></i><span>Masuk / Daftar</span>';
        document.getElementById('btn-login').onclick = showLoginModal;
    }
}

// ============ DASHBOARD ============
function renderDashboard() {
    const lokerList = document.getElementById('dashboard-loker-list');
    const forumList = document.getElementById('dashboard-forum-list');
    lokerList.innerHTML = appData.loker.slice(0, 4).map(l => `
        <div class="forum-item" onclick="showLokerDetail(${l.id})" style="margin-bottom:8px">
            <div class="forum-avatar" style="background:linear-gradient(135deg,var(--secondary),var(--accent))">${l.posisi.charAt(0)}</div>
            <div class="forum-content">
                <div class="forum-title-text">${l.posisi} - ${l.perusahaan}</div>
                <div class="forum-preview"><i class="fas fa-map-marker-alt"></i> ${l.lokasi}, ${l.kota}</div>
                <div class="forum-meta-info"><span style="color:var(--secondary);font-weight:700">Rp ${formatNumber(l.gaji)}</span><span>${l.tipe}</span></div>
            </div>
        </div>
    `).join('');
    forumList.innerHTML = appData.forum.slice(0, 4).map(f => {
        const user = appData.users.find(u => u.id === f.userId);
        return `<div class="forum-item" onclick="showForumDetail(${f.id})" style="margin-bottom:8px">
            <div class="forum-avatar">${user ? user.nama.charAt(0) : '?'}</div>
            <div class="forum-content">
                <div class="forum-title-text">${f.judul}</div>
                <div class="forum-meta-info"><span><i class="fas fa-comment"></i> ${f.replies.length} balasan</span><span>${f.kategori}</span></div>
            </div>
        </div>`;
    }).join('');
}

// ============ LOKER ============
function renderLoker(data) {
    const list = document.getElementById('loker-list');
    const items = data || appData.loker;
    list.innerHTML = items.map(l => `
        <div class="loker-card" onclick="showLokerDetail(${l.id})">
            <div class="loker-card-header">
                <span class="loker-company"><i class="fas fa-building"></i> ${l.perusahaan}</span>
                <span class="loker-badge badge-${l.tipe.toLowerCase()}">${l.tipe}</span>
            </div>
            <div class="loker-title">${l.posisi}</div>
            <div class="loker-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${l.lokasi}, ${l.kota}</span>
                <span><i class="fas fa-users"></i> ${l.jumlah} orang</span>
            </div>
            <div class="loker-salary">Rp ${formatNumber(l.gaji)} <small>/bulan</small></div>
            <div class="loker-footer">
                <span class="loker-time"><i class="fas fa-clock"></i> ${formatDate(l.tanggal)}</span>
                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();showLokerDetail(${l.id})">Lihat Detail</button>
            </div>
        </div>
    `).join('');
}

function filterLoker() {
    const search = document.getElementById('loker-search').value.toLowerCase();
    const prov = document.getElementById('filter-provinsi').value;
    const tipe = document.getElementById('filter-tipe').value;
    const gajiRange = document.getElementById('filter-gaji').value;
    let filtered = appData.loker.filter(l => {
        if (search && !`${l.posisi} ${l.perusahaan} ${l.lokasi} ${l.kota}`.toLowerCase().includes(search)) return false;
        if (prov && l.lokasi !== prov) return false;
        if (tipe && l.tipe !== tipe) return false;
        if (gajiRange) {
            if (gajiRange === '1' && l.gaji >= 2000000) return false;
            if (gajiRange === '2' && (l.gaji < 2000000 || l.gaji > 4000000)) return false;
            if (gajiRange === '3' && (l.gaji < 4000000 || l.gaji > 6000000)) return false;
            if (gajiRange === '4' && l.gaji <= 6000000) return false;
        }
        return true;
    });
    renderLoker(filtered);
}

function showAddLokerModal() {
    if (!appData.currentUser) { showToast('Silakan login terlebih dahulu!', 'error'); showLoginModal(); return; }
    showModal('modal-add-loker');
}

function submitLoker() {
    const perusahaan = document.getElementById('loker-perusahaan').value.trim();
    const posisi = document.getElementById('loker-posisi').value;
    const lokasi = document.getElementById('loker-lokasi').value;
    const kota = document.getElementById('loker-kota').value.trim();
    const tipe = document.getElementById('loker-tipe').value;
    const gaji = parseInt(document.getElementById('loker-gaji').value) || 0;
    const deskripsi = document.getElementById('loker-deskripsi').value.trim();
    const kontak = document.getElementById('loker-kontak').value.trim();
    const jumlah = parseInt(document.getElementById('loker-jumlah').value) || 1;
    if (!perusahaan || !kota || !gaji || !deskripsi || !kontak) { showToast('Mohon lengkapi semua data!', 'error'); return; }
    appData.loker.unshift({
        id: Date.now(), userId: appData.currentUser.id, perusahaan, posisi, lokasi, kota, tipe, gaji, deskripsi, kontak, jumlah,
        tanggal: new Date().toISOString().split('T')[0], status: 'aktif'
    });
    saveData(); renderLoker(); renderDashboard(); updateStats();
    closeModal('modal-add-loker'); showToast('Loker berhasil diposting! 🎉', 'success');
    ['loker-perusahaan', 'loker-kota', 'loker-gaji', 'loker-deskripsi', 'loker-kontak'].forEach(id => document.getElementById(id).value = '');
}

function showLokerDetail(id) {
    const l = appData.loker.find(x => x.id === id);
    if (!l) return;
    const user = appData.users.find(u => u.id === l.userId);
    document.getElementById('loker-detail-title').textContent = l.posisi;
    document.getElementById('loker-detail-body').innerHTML = `
        <div class="detail-header">
            <div class="detail-company"><i class="fas fa-building"></i> ${l.perusahaan}</div>
            <div class="detail-title">${l.posisi}</div>
            <div class="detail-salary">Rp ${formatNumber(l.gaji)} <small>/bulan</small></div>
            <div class="detail-meta">
                <span class="detail-tag"><i class="fas fa-map-marker-alt"></i> ${l.lokasi}, ${l.kota}</span>
                <span class="detail-tag"><i class="fas fa-clock"></i> ${l.tipe}</span>
                <span class="detail-tag"><i class="fas fa-users"></i> ${l.jumlah} orang dibutuhkan</span>
                <span class="detail-tag"><i class="fas fa-calendar"></i> ${formatDate(l.tanggal)}</span>
            </div>
        </div>
        <h4 style="margin-bottom:8px">📋 Deskripsi Pekerjaan</h4>
        <div class="detail-desc">${l.deskripsi}</div>
        <div class="detail-contact">
            <a href="tel:${l.kontak}" class="btn btn-primary"><i class="fas fa-phone"></i> Hubungi ${l.kontak}</a>
            <a href="https://wa.me/62${l.kontak.substring(1)}" target="_blank" class="btn btn-outline" style="background:#25D366;color:#fff;border:none"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        </div>`;
    showModal('modal-loker-detail');
}

// ============ FORUM ============
function renderForum(data) {
    const list = document.getElementById('forum-list');
    const items = data || appData.forum;
    const catColors = { pengalaman: '#58A6FF', tips: '#F5A623', gaji: '#2EA043', alat: '#A78BFA', curhat: '#F85149' };
    list.innerHTML = items.map(f => {
        const user = appData.users.find(u => u.id === f.userId);
        return `<div class="forum-item" onclick="showForumDetail(${f.id})">
            <div class="forum-avatar">${user ? user.nama.charAt(0) : '?'}</div>
            <div class="forum-content">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                    <span class="forum-cat-tag" style="background:${catColors[f.kategori]}22;color:${catColors[f.kategori]}">${f.kategori}</span>
                </div>
                <div class="forum-title-text">${f.judul}</div>
                <div class="forum-preview">${f.isi.substring(0, 100)}...</div>
                <div class="forum-meta-info">
                    <span><i class="fas fa-user"></i> ${user ? user.nama : 'Anonim'}</span>
                    <span><i class="fas fa-comment"></i> ${f.replies.length} balasan</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(f.tanggal)}</span>
                </div>
            </div>
        </div>`;
    }).join('');
}

function filterForum(cat) {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.category-btn[data-cat="${cat}"]`).classList.add('active');
    if (cat === 'all') { renderForum(); return; }
    renderForum(appData.forum.filter(f => f.kategori === cat));
}

function showAddForumModal() {
    if (!appData.currentUser) { showToast('Silakan login terlebih dahulu!', 'error'); showLoginModal(); return; }
    showModal('modal-add-forum');
}

function submitForum() {
    const judul = document.getElementById('forum-judul').value.trim();
    const kategori = document.getElementById('forum-kategori').value;
    const isi = document.getElementById('forum-isi').value.trim();
    if (!judul || !isi) { showToast('Mohon lengkapi judul dan isi!', 'error'); return; }
    appData.forum.unshift({
        id: Date.now(), userId: appData.currentUser.id, judul, kategori, isi,
        tanggal: new Date().toISOString().split('T')[0], replies: []
    });
    saveData(); renderForum(); renderDashboard(); updateStats();
    closeModal('modal-add-forum'); showToast('Topik berhasil diposting! 🎉', 'success');
    document.getElementById('forum-judul').value = '';
    document.getElementById('forum-isi').value = '';
}

function showForumDetail(id) {
    const f = appData.forum.find(x => x.id === id);
    if (!f) return;
    const author = appData.users.find(u => u.id === f.userId);
    document.getElementById('forum-detail-title').textContent = f.judul;
    let repliesHTML = f.replies.map(r => {
        const ru = appData.users.find(u => u.id === r.userId);
        return `<div class="comment-item">
            <div class="comment-avatar">${ru ? ru.nama.charAt(0) : '?'}</div>
            <div class="comment-content">
                <div class="comment-author">${ru ? ru.nama : 'Anonim'}</div>
                <div class="comment-text">${r.text}</div>
                <div class="comment-time">${formatDate(r.tanggal)}</div>
            </div>
        </div>`;
    }).join('');
    document.getElementById('forum-detail-body').innerHTML = `
        <div class="forum-detail-post">
            <div class="forum-detail-author">
                <div class="forum-avatar">${author ? author.nama.charAt(0) : '?'}</div>
                <div><strong>${author ? author.nama : 'Anonim'}</strong><br><small style="color:var(--text-muted)">${formatDate(f.tanggal)} · ${f.kategori}</small></div>
            </div>
            <p style="line-height:1.7;white-space:pre-wrap">${f.isi}</p>
        </div>
        <div class="comment-section">
            <h4><i class="fas fa-comments"></i> ${f.replies.length} Balasan</h4>
            ${repliesHTML}
            <div class="comment-input">
                <input type="text" id="reply-input-${f.id}" placeholder="Tulis balasan..." onkeypress="if(event.key==='Enter')submitReply(${f.id})">
                <button class="btn btn-primary btn-sm" onclick="submitReply(${f.id})"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>`;
    showModal('modal-forum-detail');
}

function submitReply(forumId) {
    if (!appData.currentUser) { showToast('Silakan login dulu!', 'error'); return; }
    const input = document.getElementById('reply-input-' + forumId);
    const text = input.value.trim();
    if (!text) return;
    const f = appData.forum.find(x => x.id === forumId);
    f.replies.push({ userId: appData.currentUser.id, text, tanggal: new Date().toISOString().split('T')[0] });
    saveData(); showForumDetail(forumId); renderForum(); renderDashboard();
    showToast('Balasan terkirim!', 'success');
}

// ============ CHAT ============
let activeChatId = null;
function renderChatList() {
    const list = document.getElementById('chat-list');
    if (!appData.currentUser) {
        list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted)"><i class="fas fa-lock" style="font-size:24px;margin-bottom:8px;display:block"></i>Login untuk melihat pesan</div>';
        return;
    }
    const myChats = appData.chats.filter(c => c.participants.includes(appData.currentUser.id));
    list.innerHTML = myChats.map(c => {
        const otherId = c.participants.find(p => p !== appData.currentUser.id);
        const other = appData.users.find(u => u.id === otherId);
        const lastMsg = c.messages[c.messages.length - 1];
        return `<div class="chat-item ${activeChatId === c.id ? 'active' : ''}" onclick="openChat(${c.id})">
            <div class="chat-item-avatar">${other ? other.nama.charAt(0) : '?'}</div>
            <div class="chat-item-info">
                <div class="chat-item-name">${other ? other.nama : 'User'}</div>
                <div class="chat-item-preview">${lastMsg ? lastMsg.text : ''}</div>
            </div>
            <span class="chat-item-time">${lastMsg ? lastMsg.time.split(' ')[1] : ''}</span>
        </div>`;
    }).join('') || '<div style="padding:20px;text-align:center;color:var(--text-muted)">Belum ada pesan</div>';
}

function openChat(chatId) {
    activeChatId = chatId;
    renderChatList();
    const chat = appData.chats.find(c => c.id === chatId);
    if (!chat) return;
    const otherId = chat.participants.find(p => p !== appData.currentUser.id);
    const other = appData.users.find(u => u.id === otherId);
    const main = document.getElementById('chat-main');
    main.innerHTML = `
        <div class="chat-header-bar">
            <div class="chat-item-avatar" style="width:36px;height:36px;font-size:14px">${other ? other.nama.charAt(0) : '?'}</div>
            <div><strong>${other ? other.nama : 'User'}</strong><br><small style="color:var(--text-muted)">${other?.role === 'perusahaan' ? '🏢 Perusahaan' : '🔧 Pekerja'}</small></div>
        </div>
        <div class="chat-messages" id="chat-messages"></div>
        <div class="chat-input-bar">
            <input type="text" id="chat-input" placeholder="Ketik pesan..." onkeypress="if(event.key==='Enter')sendMessage()">
            <button onclick="sendMessage()"><i class="fas fa-paper-plane"></i></button>
        </div>`;
    renderMessages(chat);
}

function renderMessages(chat) {
    const container = document.getElementById('chat-messages');
    container.innerHTML = chat.messages.map(m => `
        <div class="chat-bubble ${m.from === appData.currentUser.id ? 'sent' : 'received'}">
            ${m.text}
            <div class="chat-bubble-time">${m.time.split(' ')[1]}</div>
        </div>
    `).join('');
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    if (!activeChatId) return;
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;
    const chat = appData.chats.find(c => c.id === activeChatId);
    const now = new Date();
    chat.messages.push({ from: appData.currentUser.id, text, time: `${now.toISOString().split('T')[0]} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}` });
    saveData(); renderMessages(chat); renderChatList();
    input.value = '';
}

// ============ GAJI TABLE ============
function renderGajiTable() {
    document.getElementById('gaji-table-body').innerHTML = appData.gajiData.map(g => `
        <tr><td><strong>${g.provinsi}</strong></td><td>${g.posisi}</td><td style="color:var(--secondary);font-weight:700">${g.gaji}</td><td>${g.tunjangan}</td><td>${g.premi}</td></tr>
    `).join('');
}

// ============ PROFIL ============
function renderProfil() {
    const container = document.getElementById('profil-container');
    if (!appData.currentUser) {
        container.innerHTML = `<div class="profil-card" style="text-align:center;padding:48px">
            <i class="fas fa-user-circle" style="font-size:64px;color:var(--text-muted);margin-bottom:16px;display:block"></i>
            <h3>Belum Login</h3><p style="color:var(--text-secondary);margin:8px 0 20px">Masuk atau daftar untuk melihat profil</p>
            <button class="btn btn-primary" onclick="showLoginModal()"><i class="fas fa-sign-in-alt"></i> Masuk / Daftar</button></div>`;
        return;
    }
    const u = appData.currentUser;
    const myLoker = appData.loker.filter(l => l.userId === u.id).length;
    const myForum = appData.forum.filter(f => f.userId === u.id).length;
    container.innerHTML = `
        <div class="profil-card">
            <div class="profil-header">
                <div class="profil-avatar-lg">${u.nama.charAt(0)}</div>
                <div>
                    <div class="profil-name">${u.nama}</div>
                    <span class="profil-role-tag profil-role-${u.role}">${u.role === 'pekerja' ? '🔧 Pekerja Sawit' : '🏢 Perusahaan'}</span>
                </div>
            </div>
            <div class="profil-stats">
                <div class="profil-stat"><div class="profil-stat-num">${myLoker}</div><div class="profil-stat-label">Loker</div></div>
                <div class="profil-stat"><div class="profil-stat-num">${myForum}</div><div class="profil-stat-label">Topik</div></div>
                <div class="profil-stat"><div class="profil-stat-num">${appData.chats.filter(c => c.participants.includes(u.id)).length}</div><div class="profil-stat-label">Pesan</div></div>
            </div>
        </div>
        <div class="profil-card">
            <h4 style="margin-bottom:16px"><i class="fas fa-info-circle"></i> Informasi Akun</h4>
            <div style="display:grid;gap:12px">
                <div><small style="color:var(--text-muted)">Username</small><div>@${u.username}</div></div>
                <div><small style="color:var(--text-muted)">Email</small><div>${u.email}</div></div>
                <div><small style="color:var(--text-muted)">No. HP</small><div>${u.phone}</div></div>
                <div><small style="color:var(--text-muted)">Bergabung</small><div>${formatDate(u.joinDate)}</div></div>
            </div>
        </div>
        <button class="btn btn-danger btn-full" onclick="handleLogout()"><i class="fas fa-sign-out-alt"></i> Keluar dari Akun</button>`;
}

// ============ AUTH ============
function showLoginModal() { showModal('modal-login'); }

function toggleRegister() {
    const login = document.getElementById('login-form-container');
    const reg = document.getElementById('register-form-container');
    const title = document.getElementById('modal-login-title');
    if (login.style.display === 'none') { login.style.display = ''; reg.style.display = 'none'; title.textContent = 'Masuk ke DestianSawit'; }
    else { login.style.display = 'none'; reg.style.display = ''; title.textContent = 'Daftar Akun Baru'; }
}

function handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const user = appData.users.find(u => (u.username === username || u.email === username) && u.password === password);
    if (!user) { showToast('Username/password salah!', 'error'); return; }
    appData.currentUser = user; saveData();
    closeModal('modal-login');
    updateUserUI(); renderChatList(); renderProfil(); renderDashboard();
    showToast(`Selamat datang, ${user.nama}! 👋`, 'success');
}

function handleRegister() {
    const nama = document.getElementById('reg-nama').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const password = document.getElementById('reg-password').value;
    const role = document.querySelector('input[name="reg-role"]:checked').value;
    if (!nama || !username || !email || !password) { showToast('Mohon lengkapi semua data!', 'error'); return; }
    if (appData.users.find(u => u.username === username)) { showToast('Username sudah dipakai!', 'error'); return; }
    const newUser = { id: Date.now(), nama, username, email, phone, password, role, joinDate: new Date().toISOString().split('T')[0] };
    appData.users.push(newUser);
    appData.currentUser = newUser; saveData();
    closeModal('modal-login');
    updateUserUI(); updateStats(); renderChatList(); renderProfil(); renderDashboard();
    showToast(`Akun berhasil dibuat! Selamat datang, ${nama}! 🎉`, 'success');
}

function handleLogout() {
    appData.currentUser = null; activeChatId = null; saveData();
    updateUserUI(); renderChatList(); renderProfil();
    showToast('Anda telah keluar dari akun.', 'info');
}

// ============ MODAL UTILS ============
function showModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('show'); });
});

// ============ TOAST ============
function showToast(msg, type = 'success') {
    const container = document.getElementById('toast-container');
    const icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fas fa-${icons[type]}"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ============ HELPERS ============
function formatNumber(n) { return new Intl.NumberFormat('id-ID').format(n); }
function formatDate(d) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const parts = d.split('-');
    return `${parseInt(parts[2])} ${months[parseInt(parts[1]) - 1]} ${parts[0]}`;
}

// Role selector interactivity
document.querySelectorAll('.role-option').forEach(opt => {
    opt.addEventListener('click', () => {
        document.querySelectorAll('.role-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
    });
});
