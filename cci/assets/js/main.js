// Small UI helpers: year fill, nav toggle, contact form -> mailto
document.addEventListener('DOMContentLoaded', ()=>{
  const y = new Date().getFullYear();
  ['year','year2','year3','year4','year5','year6','year7'].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent = y});

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  if(navToggle){navToggle.addEventListener('click', ()=>{ if(nav) nav.style.display = nav.style.display === 'block' ? '' : 'block' })}

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
})
