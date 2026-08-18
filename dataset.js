// Hasil konversi sismadi-landing.html ke format dataset.js
// Ditambahkan sebagai halaman baru "landing" (Cerita Ekosistem Sismadi)
// Section type baru mengikuti pola leftCol/rightCol/lines yang sudah dipakai
// pada section 'article', ditambah 3 section type baru: 'timeline', 'ledger',
// dan 'files' (kartu produk) — semuanya deklaratif seperti section lainnya.

const pages = {

    landing: [
        {
            section: 'hero',
            eyebrow: 'Cerita di balik ekosistem Sismadi',
            title: 'Dua peran yang berjalan bersamaan — <em>mengajar</em> dan membangun.',
            description: 'Sehari-hari mengajar di S1 Informatika, sekaligus merancang sistem yang benar-benar dipakai di lapangan. Produk-produk di ekosistem ini lahir dari proses itu, bukan dari rencana bisnis semata.',
            note: 'Dimulai dari satu proyek kecil, tahun 2019'
        },
        {
            section: 'timeline',
            eyebrow: 'Perjalanan yang membentuk ekosistem ini',
            items: [
                {
                    year: '2019',
                    name: 'Ktupad',
                    meta: 'HKI EC00201952487 · PHP',
                    desc: 'Proyek pertama — titik awal cara berpikir tentang arsitektur yang ringan dan sederhana.'
                },
                {
                    year: '2023',
                    name: 'BayamJS',
                    meta: 'HKI EC00202367008',
                    desc: 'Arsitektur dirapikan ulang — pendekatan zero-dependency mulai terbentuk jelas.'
                },
                {
                    year: '2024',
                    name: 'DonatJS',
                    meta: 'HKI EC00202414144',
                    desc: 'Versi yang dipakai hari ini — basis dari seluruh produk di ekosistem Sismadi.'
                }
            ]
        },
        {
            section: 'ledger',
            eyebrow: 'Dikumpulkan tahun demi tahun — bisa diperiksa langsung',
            items: [
                { num: '7 thn', label: 'Proses berkelanjutan sejak Ktupad, 2019' },
                { num: '7 HKI', label: 'Karya cipta terdaftar resmi' },
                { num: '1 Paten', label: 'Dalam tahap pemeriksaan substantif DJKI' },
                { num: 'SINTA', label: 'Publikasi akademik terindeks' },
                { num: '3 BNSP', label: 'Sertifikasi asesor kompetensi, berlaku s.d. 2027' }
            ]
        },
        {
            section: 'files',
            intro: 'Dari proses ini, lahir empat produk — pilih yang relevan untuk Anda',
            items: [
                {
                    code: 'SIS',
                    accent: 'parchment',
                    sealText: 'TERVERIFIKASI • SISMADI SIS • ',
                    tab: 'Berkas 01 · Institusi Pendidikan',
                    title: 'Sistem akademik yang dirancang mengikuti alur kerja kampus sesungguhnya.',
                    desc: 'Dirancang berdasarkan riset akademik terpublikasi SINTA, oleh tim yang berasal dari lingkungan kampus itu sendiri — bukan vendor luar yang mengamati dari jauh.',
                    facts: [
                        'Terafiliasi Program Studi S1 Informatika, IPWIJA',
                        'Riset didanai hibah PDP, terpublikasi SINTA'
                    ],
                    ctaText: 'Jadwalkan Demo untuk Prodi',
                    ctaLink: 'https://sis.sismadi.co.id',
                    domain: 'Sismadi SIS · sis.sismadi.co.id'
                },
                {
                    code: 'LMS',
                    accent: 'teal',
                    sealText: 'TERVERIFIKASI • PIAWAI.ID • ',
                    tab: 'Berkas 02 · Belajar Mandiri',
                    title: 'Belajar dari orang yang juga mempraktikkan apa yang diajarkan.',
                    desc: 'Kurikulum disusun oleh seorang pracademic — dosen sekaligus praktisi, agar yang dipelajari terasa relevan dengan pekerjaan sehari-hari.',
                    facts: [
                        'Materi dari proyek produksi, bukan simulasi',
                        'Sertifikat kompetensi BNSP terlampir'
                    ],
                    ctaText: 'Mulai Belajar Gratis',
                    ctaLink: 'https://piawai.id',
                    domain: 'Piawai · piawai.id'
                },
                {
                    code: 'UMKM',
                    accent: 'rust',
                    sealText: 'TERVERIFIKASI • STOKBARANG.ID • ',
                    tab: 'Berkas 03 · UMKM & Ritel',
                    title: 'Kelola stok, kasir, dan laporan toko dari satu tempat.',
                    desc: 'Dipakai oleh toko dan gudang yang sudah berjalan setiap hari — dibangun untuk menyesuaikan cara kerja Anda, bukan sebaliknya.',
                    facts: [
                        'Sinkron otomatis, tetap jalan tanpa internet',
                        'Multi-gudang, kasir, dan laporan jadi satu'
                    ],
                    ctaText: 'Coba Gratis Sekarang',
                    ctaLink: 'https://stokbarang.id',
                    domain: 'Stokbarang · stokbarang.id'
                },
                {
                    code: 'KRP',
                    accent: 'brass',
                    sealText: 'TERVERIFIKASI • SISMADI ERP • ',
                    tab: 'Berkas 04 · Instansi & Korporat',
                    title: 'Sistem enterprise yang dibangun mengikuti standar tata kelola dan kebutuhan audit.',
                    desc: 'Dipercaya menangani proyek Kementerian PUPR dan Tereos FKS Indonesia.',
                    facts: [
                        'Klien: Kementerian PUPR (2022–2025)',
                        'Klien: Tereos FKS Indonesia'
                    ],
                    ctaText: 'Ajukan Proposal',
                    ctaLink: 'https://erp.sismadi.co.id',
                    domain: 'Sismadi ERP · erp.sismadi.co.id'
                }
            ]
        },
        {
            section: 'footer',
            lines: [
                'Dosen Informatika IPWIJA • Direktur PT Sismadi Langit Solusi • Kandidat Doktor UAD'
            ],
            secondaryLines: [
                'Untuk kebutuhan resmi & legalitas &rarr; <a href="https://sismadi.co.id">sismadi.co.id</a>'
            ]
        }
    ]

};
