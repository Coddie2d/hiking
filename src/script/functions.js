export let burgerMenu = document.querySelector('.burger_menu');
export let navBody = document.querySelector('.header__nav_body');
export let navLinks = document.querySelectorAll('.header__nav_link');
export let navBodyRight = document.querySelector('.header__right')
export function burgerClick(){
    
if(burgerMenu){
       
   burgerMenu.addEventListener('click',function(e){
           document.body.classList.toggle('lock');
           burgerMenu.classList.toggle('active');
           navBody.classList.toggle('active');
           
   
           
       })
   }
   navLinks.forEach(item =>{
           item.addEventListener('click',function(e){
               console.log(e.target.classList)
               if(e.target.classList.contains('header__nav_link')){
                   document.body.classList.remove('lock');
                   burgerMenu.classList.remove('active');
                   navBody.classList.remove('active');
                   
               }
           })
       })
}