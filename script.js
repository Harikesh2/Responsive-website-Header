const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
   ul.classList.toggle('hamactive');
   
   let ham_child = hamburger.firstElementChild;
   if(ul.classList.contains('hamactive')){
    ham_child.classList.replace('fa-bars','fa-xmark');
   }
   else{
         ham_child.classList.replace('fa-xmark','fa-bar');
   }
});