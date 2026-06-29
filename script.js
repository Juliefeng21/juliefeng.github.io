const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('visible')}})},{threshold:.12});
reveals.forEach((el)=>observer.observe(el));
const toggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
if(toggle&&navLinks){
  toggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((link)=>link.addEventListener('click',()=>navLinks.classList.remove('open')));
}
