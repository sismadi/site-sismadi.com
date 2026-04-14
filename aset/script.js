var web = {
    // Mapping antara Slug di URL dengan ID Section di HTML
    routes: {
        'home': 'home',
        'profile': 'about',      // ?profile mengarah ke id="about"
        'expertise': 'founder',  // ?expertise mengarah ke id="founder"
        'solutions': 'product',  // ?solutions mengarah ke id="product"
        'press': 'publications', // ?press mengarah ke id="publications"
        'order': 'order',
        'contact': 'contact'
    },

    // Array unik semua section IDs (untuk hide all)
    allSections: ['home', 'about', 'founder', 'product', 'publications', 'order', 'contact'],

    gebi: function(id) {
        return document.getElementById(id);
    },

    navigate: function(slug) {
        var targetSlug;

        // 1. Tentukan target slug
        if (slug && typeof slug === 'string') {
            targetSlug = slug;
        } else {
            var params = new URLSearchParams(window.location.search);
            targetSlug = params.keys().next().value || 'home';
        }

        // 2. SAFETY CHECK: Mencegah Looping
        // Jika slug tidak ada di dataset 'pages'
        if (!pages[targetSlug]) {
            console.error("Dataset tidak ditemukan untuk:", targetSlug);

            // Jika kita sudah di home dan masih error, stop! Jangan navigasi lagi.
            if (targetSlug === 'home') {
                ui.render('content', [{section: 'titleHero', title: 'Error: Data Home Hilang'}]);
                return false;
            }

            // Jika bukan di home, lempar ke home sebagai fallback terakhir
            return this.navigate('home');
        }

        // 3. Render Konten (Hanya dijalankan jika data valid)
        ui.render('content', pages[targetSlug]);

        // 4. Update URL (Gunakan replaceState untuk error handling agar history tetap bersih)
        var newUrl = window.location.pathname + '?' + targetSlug;
        window.history.pushState({ slug: targetSlug }, '', newUrl);

        window.scrollTo(0, 0);
        if (typeof svg !== 'undefined') svg.di();

        return false;
    },


};


const components = {
    // Komponen Baru: Header
    header: (d) => `
        <header class="hero page">
            <img src="${d.img}" alt="Profile">
            <div class="hero-text">
                <h1>${d.title}</h1>
                <p>${d.contents}</p>
            </div>
        </header>
    `,



    table: (d) => {
        const items = d.items || [];
        if (!items.length) return '';

        // Deteksi jika formatnya adalah Array of Objects
        const isObjectArray = !Array.isArray(items[0]);
        const keys = isObjectArray ? Object.keys(items[0]) : null;

        return `
            ${d.title ? `<h2>${d.title}</h2>` : ''}
            <div class="table">
                <table class="table">
                    ${keys ? `<thead><tr>${keys.map(k => `<th>${k}</th>`).join('')}</tr></thead>` : ''}
                    <tbody>
                        ${items.map(row => `
                            <tr>
                                ${isObjectArray
                                    ? keys.map(k => `<td>${row[k]}</td>`).join('')
                                    : row.map(cell => `<td>${cell}</td>`).join('')
                                }
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>`;
    },

    card: (d) => {
        const items = d.items || [];
        if (!items.length) return '';
        const keys = Object.keys(items[0]);
        return `
            <h2>${d.title}</h2>
            <div class="grid-container">
                ${items.map(row => `
                    <div class="card">
                        ${keys.map(k => `
                            <div><span class="card-label">${k.toUpperCase()}</span><br>${row[k]}</div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>`;
    },

    hero: (d) => {
    // Logika deteksi: Pilih antara img (foto) atau imgClass (SVG)
    const media = d.img
        ? `<img src="${d.img}" alt="${d.title}" class="img-hero">`
        : d.imgClass
            ? `<i style="max-width:300px;" class="${d.imgClass} kanan img"></i>`
            : '';

    return `
        <div class="row page hero">
            <div class="col-2-3 artikel">
                <h1>${d.title}</h1><br>
                <em>${d.tagline}</em> &mdash; ${d.description}<br><br>
                ${d.badges.map(b => `<span class="badge">${b}</span>`).join(' ')}
                <br><br>
                <a href="/?${d.cta.link}" onclick="return web.navigate('${d.cta.link}')" class="btn-cta">${d.cta.text}</a>
            </div>
            <div class="col-1-3 artikel">
                ${media}
            </div>
        </div>
    `;
},

        features: (d) => `
            <div class="row gading">
                ${d.items.map(item => `
                    <div class="col-1-3 artikel">
                        <i class="${item.icon} simg"></i>
                        <span class="judul">${item.title}</span><br>
                        ${item.content}<br>
                        <a href="/?${item.linkTarget}" onclick="return web.navigate('${item.linkTarget}')">${item.linkText}</a>
                    </div>
                `).join('')}
            </div>
        `,


    // Helper untuk memproses baris teks tanpa jarak berlebih

    lineRenderer: (lines, context = {}) => {
        return lines.map(line => {
            // 1. Pre-processing: Konversi format **text** menjadi <strong>text</strong> di dalam baris apa pun
            let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

            // 2. Line-based Rules
            if (formattedLine === '---') return '<hr>';
            if (formattedLine.startsWith('### ')) return `<h3>${formattedLine.replace('### ', '')}</h3>`;
            if (formattedLine.startsWith('## ')) return `<h2>${formattedLine.replace('## ', '')}</h2>`;
            if (formattedLine.startsWith('# ')) return `<h1>${formattedLine.replace('# ', '')}</h1>`;

            // Aturan khusus baris yang diawali ** (tetap dipertahankan sesuai permintaan Anda)
            if (formattedLine.startsWith('** ')) return `<strong>${formattedLine.replace('** ', '')}</strong>`;

            if (formattedLine.startsWith('• ')) return `<div style="padding-left:10px;">&bull; ${formattedLine.replace('• ', '')}</div>`;

            if (formattedLine.startsWith('badge:')) {
                return `<span class="badge">${formattedLine.replace('badge:', '')}</span>`;
            }

            if (formattedLine.startsWith('step:')) {
                const [_, s, t, desc] = formattedLine.split(':');
                return `<div class="tl-item"><div class="tl-year">${s}</div><div class="tl-title">${t}</div><div class="tl-desc">${desc}</div></div>`;
            }

            if (formattedLine.startsWith('skill:')) {
                const [label, percent] = formattedLine.replace('skill:', '').split(':');
                return `
                    <div class="skill-row">
                        <div class="skill-label">${label}</div>
                        <div class="skill-track"><div class="skill-fill" style="width:${percent}%"></div></div>
                    </div>`;
            }

            if (formattedLine.startsWith('contact:')) {
                const [_, icon, label, val, link] = formattedLine.split(':');
                return `
                    <div style="margin-bottom:15px;">
                        <i class="${icon} img-32" style="float:left;margin-right:8px;"></i>
                        <strong>${label}</strong><br>
                        ${link ? `<a href="${link}" target="_blank">${val}</a>` : val}
                        <br clear="all">
                    </div>`;
            }

            if (formattedLine.startsWith('form:')) {
                const fields = context.fields || [];
                return `
                    <form class="dynamic-form">
                        ${fields.map(f => {
                            const label = f.label ? `<div>${f.label}:</div>` : '';
                            if (f.type === 'select') {
                                return `${label}<select>${f.options.map(o => `<option>${o}</option>`).join('')}</select>`;
                            }
                            if (f.type === 'textarea') {
                                return `${label}<textarea rows="${f.rows}">${f.placeholder || ''}</textarea>`;
                            }
                            return `${label}<input type="${f.type}" placeholder="${f.placeholder || ''}">`;
                        }).join('')}
                        <input type="submit" value="${context.submitText || 'Kirim'}" style="margin-top:10px;">
                    </form>
                `;
            }

            if (formattedLine.startsWith('table:')) {
                if (context.table && Array.isArray(context.table)) {
                    return components.table({ items: context.table });
                }
                const tableName = formattedLine.split(':')[1];
                if (typeof tables !== 'undefined' && tables[tableName]) {
                    return components.table(tables[tableName]);
                }
                return '';
            }

            // Default render sebagai div (paragraf)
            return `<div>${formattedLine}</div>`;
        }).join('');
    },

      titleHero: (d) => `
              <div class="row page">
                  <div class="artikel">
                      <h1>${d.title}</h1>
                  </div>
              </div>
          `,

    article: (d) => {
    if (d.layout === 'split') {
        return `
            <div class="row page4">
                <div class="col-1-3 artikel">
                    <h2>${d.leftCol.subtitle}</h2><hr>
                    ${components.lineRenderer(d.leftCol.lines)}
                </div>
                <div class="col-2-3 artikel">
                    <h2>${d.rightCol.subtitle}</h2><hr>
                    ${components.lineRenderer(d.rightCol.lines, d.rightCol)}
                </div>
            </div>
        `;
    }
    return '';
},

      form: (d) => {
        const fields = d.fields || [];
        return `
            <div class="row page4">
                <div class="artikel">
                    <span class="judul">${d.title}</span><hr>
                    <form action="${d.action || '#'}" method="POST" class="dynamic-form">
                        ${fields.map(field => components.fieldRenderer(field)).join('')}
                        <div style="margin-top:20px;">
                            <input type="submit" value="${d.submitText || 'Kirim'}" class="btn-submit">
                        </div>
                    </form>
                </div>
            </div>
        `;
    },

    // Sub-komponen untuk merender tipe input (Sama seperti fieldRenderer pada table)
    fieldRenderer: (f) => {
        const label = f.label ? `<div>${f.label}:</div>` : '';

        switch(f.type) {
            case 'select':
                return `${label}<select name="${f.name}">
                    ${f.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>`;
            case 'textarea':
                return `${label}<textarea name="${f.name}" rows="${f.rows || 4}" placeholder="${f.placeholder || ''}"></textarea>`;
            default: // text, email, tel, dll
                return `${label}<input type="${f.type || 'text'}" name="${f.name}" placeholder="${f.placeholder || ''}">`;
        }
    }


};


const ui = {
    render: (id, dataArray) => {
        const el = document.getElementById(id);
        if (!el || !dataArray) return;

        el.innerHTML = dataArray.map(data =>
            components[data.section] ? components[data.section](data) : ''
        ).join('');
    }
};




// Deep link saat halaman pertama kali dibuka
window.addEventListener('load', function() {
    web.navigate();
});

// Handle browser back/forward button
window.addEventListener('popstate', function() {
    web.navigate();
});


const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('navLinks');

// Toggle menu
burger.addEventListener('click', (e) => {
  nav.classList.toggle('active');
  e.stopPropagation(); // prevent event bubbling
});

// Hide menu when clicking outside
document.addEventListener('click', (e) => {
  if (nav.classList.contains('active') && !nav.contains(e.target) && e.target !== burger) {
    nav.classList.remove('active');
  }
});

// Optional: Hide menu after clicking a menu link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
