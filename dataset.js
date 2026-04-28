const pages = {
    home: [
        {
            section: 'hero',
            title: 'Wawan Sismadi, M.Kom.',
            tagline: 'Researcher, Academic & Software Architect',
            description: 'Profesional TI yang menjembatani riset akademis dengan implementasi industri. Berfokus pada optimasi arsitektur perangkat lunak dan Microservices. Aktif sebagai Dosen di IPWIJA, Owner PT Sismadi Langit Solusi, dan Mahasiswa Doktoral di Universitas Ahmad Dahlan.',
            img: 'wawansismadi.jpeg',
            // imgClass: 'di-Sismadi Langit Solusi',

            badges: ['PhD Student UAD','Dosen IPWIJA','Owner PT SLS'],
            cta: { text: 'Diskusikan Proyek &raquo;', link: 'contact' }
        },
        {
            section: 'features',
            items: [
                {
                    icon: 'di-code',
                    title: 'Doctoral Researcher',
                    content: 'Fokus riset pada optimasi arsitektur perangkat lunak dan integrasi <strong>WebAssembly (Wasm)</strong> untuk sistem berperforma tinggi.',
                    linkText: 'Research',
                    linkTarget: 'profile'
                },
                {
                    icon: 'di-edu',
                    title: 'Academician',
                    content: 'Dosen tetap pengampu mata kuliah Pemrograman Web, Wireless Mobile Computing, dan Rekayasa Perangkat Lunak. Membimbing mahasiswa membangun mindset engineering yang kuat.',
                    linkText: 'Teaching',
                    linkTarget: 'profile'
                },
                {
                    icon: 'di-person',
                    title: 'Practitioner',
                    content: 'Owner & Software Architect di PT Sismadi Langit Solusi. Kreator framework <strong>DonatJS</strong>, solusi MVC zero-dependency berbasis JSON-driven.',
                    linkText: 'Portfolio',
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
                    '**S3 Informatika (PhD Student)** - Universitas Ahmad Dahlan (mulai 2025)',
                    '**S2 Ilmu Komputer** - Universitas Budi Luhur',
                    '**S1 Teknik Informatika** - STMIK Triguna Utama',
                    '---',
                    '### Posisi',
                    '**Dosen Tetap** - Universitas IPWIJA',
                    '**Owner** - PT Sismadi Langit Solusi'
                ]
            },
            rightCol: {
                subtitle: 'Fokus Riset & Layanan',
                lines: [
                    'Mengintegrasikan perspektif riset ke dalam solusi digital praktis untuk sektor publik dan enterprise.',
                    'Pengembangan framework **DonatJS** sebagai pembuktian konsep arsitektur yang ringan dan efisien.',
                    '---',
                    'table:default'
                ],
                table: [
                    { 'Kategori': 'Web Portal', 'Layanan': 'Custom CMS / Landing Page', 'Teknologi': 'DonatJS Core' },
                    { 'Kategori': 'Business Solution', 'Layanan': 'Sistem Informasi Terintegrasi', 'Teknologi': 'MVC / Microservices' },
                    { 'Kategori': 'E-Learning', 'Layanan': 'Learning Management System', 'Teknologi': 'JSON-Driven Portal' },
                    { 'Kategori': 'Consultancy', 'Layanan': 'IT Audit & Architecture Strategy', 'Teknologi': 'Security Standards' }
                ]
            }
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Technical Stack',
                lines: [
                    'skill:Software Architecture (JS/Node):95',
                    'skill:Cybersecurity & IT Audit:80',
                    'skill:Microservices & Wasm (Research):75',
                    'skill:Project Management:80'
                ]
            },
            rightCol: {
                subtitle: 'Fokus Profesional',
                lines: [
                    '**Software Developer**: Membangun ekosistem perangkat lunak melalui DonatJS, BayamJS, dan KtuPad — terdaftar sebagai Hak Cipta resmi.',
                    '**Doctoral Study**: Menjalankan riset aktif di bidang software engineering (terdaftar di SINTA & ResearchGate).',
                    '**Strategic IT Consulting**: Transformasi digital untuk sektor pemerintah dan swasta.'
                ]
            }
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Hubungi Saya',
                lines: [
                    'contact:di-envelope|Email|wawan@sismadi.com|mailto:wawan@sismadi.com',
                    'contact:di-instagram|Instagram|instagram.com/wawansismadi|https://instagram.com/wawansismadi',
                    'contact:di-facebook|Facebook|facebook.com/wawan.sismadi|https://facebook.com/wawan.sismadi',
                    'contact:di-geo|Lokasi|Jakarta Timur, Indonesia'
                ]
            },
            rightCol: {
                subtitle: 'Diskusi Proyek',
                lines: ['form:contact'],
                fields: [
                    { type: 'text', name: 'nama', label: 'Nama Lengkap', placeholder: 'Nama Anda' },
                    { type: 'text', name: 'kontak', label: 'Email / WhatsApp', placeholder: 'email@domain.com atau 08xx...' },
                    { type: 'text', name: 'perihal', label: 'Perihal', placeholder: 'Misal: Konsultasi Arsitektur' },
                    { type: 'textarea', name: 'pesan', label: 'Pesan', rows: 5, placeholder: 'Apa yang bisa saya bantu?' }
                ],
                submitText: 'Kirim Pesan'
            }
        }
    ],

    riset: [
        {
            section: 'titleHero',
            title: 'Riset',
            description: 'Eksplorasi mendalam pada optimasi sistem berperforma tinggi melalui integrasi WebAssembly (Wasm) dan Microservices. Fokus riset mencakup efisiensi arsitektur perangkat lunak modern untuk solusi digital masa depan.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Sosial Media',
                lines: [
                  'contact:di-web|Universitas Ahmad Dahlan|uad.ac.id|https://uad.ac.id',
                  'contact:di-envelope|Email|2537083016@webmail.uad.ac.id|mailto:2537083016@webmail.uad.ac.id',
                  'contact:di-eye|Sinta|6848496|https://sinta.kemdiktisaintek.go.id/authors/profile/6848496',
                  'contact:di-edu|Googlescholar|KkkcrZ4AAAAJ|https://scholar.google.com/citations?user=KkkcrZ4AAAAJ',
                  'contact:di-orcid|Orcid|0009-0007-2685-5663|https://orcid.org/0009-0007-2685-5663',
                ]
            },
            rightCol: {
                subtitle: 'Artikel',
                lines: [
                  'PENERAPAN PRESENSI DARING BERBASIS WEBASSEMBLY DAN MICROSERVICES UNTUK PENGENALAN WAJAH PADA LEARNING MANAGEMENT SYSTEM',
                  'link:DOI 10.51878/edutech.v6i2.9474:10.51878/edutech.v6i2.9474',
                  'PERBANDINGAN PERFORMA FRAMEWORK MVC DALAM SISTEM KEHADIRAN BERBASIS PENGENALAN WAJAH',
                  'link:DOI 10.51878/edutech.v5i1.4405:10.51878/edutech.v5i1.4405',
                  'IMPLEMENTASI ARSITEKTUR MICROSERVICE PADA APLIKASI BANK SAMPAH DIGITAL BERBASIS DONATJS',
                  'link:DOI 10.51878/cendekia.v5i4.7140:10.51878/cendekia.v5i4.7140',
                  'IMPLEMENTASI ARSITEKTUR MICROSERVICES PADA WEB APLIKASI PENERIMAAN MAHASISWA BARU',
                  'link:DOI 10.51878/edutech.v4i2.3062:10.51878/edutech.v4i2.3062',
                  'Comparative Analysis of Codeigniter, Laravel and Ktupad Frameworks: Case Study Online Exam Applications',
                  'link:DOI 10.30997/ijar.v3i3.236:10.30997/ijar.v3i3.236',
                  'IMPLEMENTASI PENGEMBANGAN APLIKASI UJIAN ONLINE MENGGUNAKAN KTUPAD MVC FRAMEWORK',
                  'link:DOI 10.31933/jemsi.v2i4.437:10.31933/jemsi.v2i4.437',

                  '## Buku',
                  '---',
                  '&bull; Analisis mendalam: batasan penggunaan AI dalam pendidikan',
                  '**ISBN : 9786347260574**',
                  '&bull; Optimasi penggunaan SVG dalam web development: meningkatkan performa dan user experience',
                  '**ISBN : 9786238767656**',
                  '&bull; Pengembangan aplikasi web modern dengan donatjs : panduan lengkap menggunakan pola MVC',
                  '**ISBN : 9786238488971**',
                ]
            }
        }
    ],

    edukasi: [
        {
            section: 'titleHero',
            title: 'Edukasi',
            description: 'Dedikasi dalam dunia akademis sebagai Dosen Tetap di Universitas IPWIJA. Berfokus pada pembentukan mindset engineering melalui pengajaran Rekayasa Perangkat Lunak, Pemrograman Web, dan teknologi mobile terkini.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Sosial Media',
                lines: [
                  'contact:di-web|Universitas IPWIJA|ipwija.ac.id|https://ipwija.ac.id',
                  'contact:di-envelope|Email|wawansismadi@ipwija.ac.id|mailto:wawansismadi@ipwija.ac.id',
                  'contact:di-youtube|Youtube|@wawansismadi|https://www.youtube.com/@wawansismadi',
                  'contact:di-github|GitHub|github.com/sismadi|https://github.com/sismadi',
                ]
            },
            rightCol: {
                subtitle: 'Dosen Pengampu',
                lines: [
                    '&bull; Pemrograman Web.',
                    '&bull; Wireless Mobile Computing.',
                    '&bull; Rekayasa Perangkat Lunak.'
                ]
            }
        }
    ],

    industri: [
        {
            section: 'titleHero',
            title: 'Industri',
            description: 'Implementasi riset ke dalam solusi bisnis nyata melalui PT Sismadi Langit Solusi. Menghadirkan ekosistem perangkat lunak yang diakui secara legal (Hak Cipta) melalui inovasi framework DonatJS, BayamJS, dan Ktupad.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Sosial Media',
                lines: [
                  'contact:di-web|PT Sismadi Langit Solusi|sismadi.co.id|https://sismadi.co.id',
                  'contact:di-envelope|Email|wawan@sismadi.co.id|mailto:wawan@sismadi.co.id',
                  'contact:di-linkedin|LinkedIn|linkedin.com/in/sismadi|https://linkedin.com/in/sismadi',
                  'contact:di-github|GitHub|github.com/sismadi|https://github.com/sismadi',
                ]
            },
            rightCol: {
                subtitle: 'Hak Cipta',
                lines: [
                  'DonatJS LMS',
                  '**EC002026051501**',
                  'Aplikasi Bank Sampah Cinta',
                  '**EC002025035655**',
                  'ANALISIS MENDALAM: BATASAN PENGGUNAAN AI DALAM PENDIDIKAN',
                  '**EC002025158185**',
                  'DonatJS',
                  '**EC00202414144**',
                  'BayamJS',
                  '**EC00202367008**',
                  'Ktupad',
                  '**EC00202219047**',
                  'KTUPAD MVC FRAMEWORK',
                  '**EC00201952487**',
                ]
            }
        }
    ]


};
