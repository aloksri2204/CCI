// Small UI helpers: year fill, nav toggle, contact form -> mailto
document.addEventListener('DOMContentLoaded', ()=>{
  const y = new Date().getFullYear();
  ['year','year2','year3','year4','year5','year6','year7'].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent = y});

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close mobile menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{ nav.classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); }));
  }

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const formData = new FormData(form);
      const name = encodeURIComponent(formData.get('name') || '');
      const email = encodeURIComponent(formData.get('email') || '');
      const message = encodeURIComponent(formData.get('message') || '');
      const subject = encodeURIComponent('Contact from CCI website');
      const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\nMessage:\n${decodeURIComponent(message)}`);
      window.location.href = `mailto:info@cci.example.com?subject=${subject}&body=${body}`;
    })
  }

  // Sample site data: news, events, gallery
  const news = [
    {title: 'Admissions open for Spring 2026', date: '31-01-2026', link: '#'},
    {title: 'New Python batch starts 10 Feb 2026', date: '25-01-2026', link: '#'},
    {title: 'CCC exam registration deadline extended', date: '20-01-2026', link: '#'},
  ];

  const events = [
    {title: 'Orientation Day', date: '05-02-2026'},
    {title: 'Workshop: Data Skills', date: '18-02-2026'},
  ];

  const gallery = [
    'assets/images/gallery1.svg',
    'assets/images/gallery2.svg',
    'assets/images/gallery3.svg',
    'assets/images/gallery4.svg',
    'assets/images/gallery5.svg',
    'assets/images/gallery6.svg'
  ];

  function renderNews(){
    const ul = document.getElementById('newsList'); if(!ul) return;
    news.forEach(n=>{
      const li = document.createElement('li');
      li.innerHTML = `<a href="${n.link}">• ${n.title}</a> <small class="muted"> ${n.date}</small>`;
      ul.appendChild(li);
    })
  }

  function renderEvents(){
    const ul = document.getElementById('eventsList'); if(!ul) return;
    events.forEach(e=>{
      const li = document.createElement('li');
      li.innerHTML = `<strong>${e.title}</strong><div class="small muted">${e.date}</div>`;
      ul.appendChild(li);
    })
  }

  function renderGallery(){
    const grid = document.getElementById('galleryGrid'); if(!grid) return;
    gallery.forEach(src=>{
      const img = document.createElement('img'); img.src = src; img.alt = 'Gallery'; img.loading = 'lazy';
      img.addEventListener('click', ()=> openLightbox(src));
      grid.appendChild(img);
    })
  }

  function openLightbox(src){
    let lb = document.querySelector('.lightbox');
    if(!lb){
      lb = document.createElement('div'); lb.className = 'lightbox';
      lb.innerHTML = `<button class="close">✕</button><img src="" alt="" />`;
      document.body.appendChild(lb);
      // close when clicking outside image or on close button
      lb.addEventListener('click',(e)=>{ if(e.target === lb || e.target.classList.contains('close')) lb.classList.remove('show'); });
      // close on Escape
      document.addEventListener('keydown',(e)=>{ if(e.key === 'Escape'){ lb.classList.remove('show'); } });
    }
    const img = lb.querySelector('img'); img.src = src; lb.classList.add('show');
  }

  renderNews(); renderEvents(); renderGallery();

})
