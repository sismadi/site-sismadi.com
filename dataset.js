const pages = {
    home: [
        {
            section: 'hero',
            title: 'Wawan Sismadi, M.Kom.',
            tagline: 'Dosen, Developer & IT Consultant',
            description: 'Profesional TI dengan pengalaman dalam pengembangan web, cybersecurity, dan IoT. Aktif sebagai dosen di IPWIJA, Founder PT Sismadi Langit Solusi, dan tengah menempuh studi doktoral di Universitas Ahmad Dahlan.',
            img: 'me.png',
            badges: ['Dosen IPWIJA', 'Kandidat Doktor UAD', 'Founder PT SLS'],
            cta: { text: 'Diskusikan Proyek &raquo;', link: 'contact' }
        },
        {
            section: 'features',
            items: [
                {
                    icon: 'di-code',
                    title: 'Web Developer',
                    content: 'Pengembang framework <strong>DonatJS</strong> solusi web berbasis JSON-driven yang ringan dan zero-dependency.',
                    linkText: 'Expertise',
                    linkTarget: 'expertise'
                },
                {
                    icon: 'di-edu',
                    title: 'IT Academy',
                    content: 'Dosen tetap yang aktif mengampu pemrograman web, cybersecurity, IoT, dan membimbing mahasiswa dalam proyek teknologi.',
                    linkText: 'Profile',
                    linkTarget: 'profile'
                },
                {
                    icon: 'di-person',
                    title: 'IT Consultant',
                    content: 'Konsultan TI dengan rekam jejak di lembaga pemerintah (Kementerian PUPR, Kementerian Perindustrian) dan industri nasional.',
                    linkText: 'Services',
                    linkTarget: 'expertise'
                }
            ]
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Pendidikan & Karir',
                lines: [
                    '### Pendidikan',
                    '**S3 Informatika (Sedang Ditempuh)** - Universitas Ahmad Dahlan (mulai 2025)',
                    '**S2 Ilmu Komputer** - Universitas Budi Luhur',
                    '**S1 Teknik Informatika** - STMIK Triguna Utama',
                    '---',
                    '### Posisi',
                    '**Dosen Tetap** - Universitas IPWIJA',
                    '**Direktur Utama** - PT Sismadi Langit Solusi'
                ]
            },
            rightCol: {
                subtitle: 'Fokus Riset & Layanan',
                lines: [
                    'Mengintegrasikan hasil riset ke dalam produk digital praktis — dari sistem informasi kampus hingga aplikasi enterprise.',
                    'Pengembangan framework **DonatJS** sebagai solusi web berbasis JSON-driven yang ringan dan mudah dikustomisasi.',
                    '---',
                    'table:default'
                ],
                table: [
                    { 'Kategori': 'Web Portal', 'Layanan': 'Custom CMS / Landing Page', 'Teknologi': 'DonatJS Core' },
                    { 'Kategori': 'Enterprise', 'Layanan': 'Sistem Informasi Terintegrasi', 'Teknologi': 'MVC / Microservices' },
                    { 'Kategori': 'E-Learning', 'Layanan': 'Learning Management System', 'Teknologi': 'JSON-Driven Portal' },
                    { 'Kategori': 'Consultancy', 'Layanan': 'IT Audit & Security', 'Teknologi': 'Security Standards' }
                ]
            }
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Technical Stack',
                lines: [
                    'skill:Web Development (Vanilla JS):95',
                    'skill:Cybersecurity & Audit:80',
                    'skill:IoT & Automasi:75',
                    'skill:Project Management:80'
                ]
            },
            rightCol: {
                subtitle: 'Fokus Profesional',
                lines: [
                    '**OpenSource Developer**: Membangun dan merilis DonatJS, BayamJS, dan KtuPad sebagai kontribusi ekosistem open source lokal.',
                    '**Peneliti Aktif**: Publikasi ilmiah di bidang software engineering dan framework comparison (SINTA terdaftar).',
                    '**Strategic IT Consulting**: Membantu transformasi digital sektor pendidikan, UMKM, dan lembaga pemerintah.'
                ]
            }
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Hubungi Saya',
                lines: [
                    'contact:di-envelope:Email:wawan@sismadi.com:mailto:wawan@sismadi.com',
                    'contact:di-linkedin:LinkedIn:linkedin.com/in/sismadi:https://linkedin.com/in/sismadi',
                    'contact:di-github:GitHub:github.com/sismadi:https://github.com/sismadi',
                    'contact:di-geo:Lokasi:Jakarta Timur, Indonesia'
                ]
            },
            rightCol: {
                subtitle: 'Diskusi Proyek',
                lines: ['form:contact'],
                fields: [
                    { type: 'text', name: 'nama', label: 'Nama Lengkap', placeholder: 'Nama Anda' },
                    { type: 'text', name: 'kontak', label: 'Email / WhatsApp', placeholder: 'email@domain.com atau 08xx...' },
                    { type: 'text', name: 'perihal', label: 'Perihal', placeholder: 'Misal: Konsultasi Sistem' },
                    { type: 'textarea', name: 'pesan', label: 'Pesan', rows: 5, placeholder: 'Apa yang bisa saya bantu?' }
                ],
                submitText: 'Kirim Pesan'
            }
        }
    ]
};
