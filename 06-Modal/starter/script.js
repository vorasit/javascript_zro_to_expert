'use strict';

const modal = document.querySelector('.modal');
console.log(modal.classList);
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
    //console.log('Button Click');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    //modal.style.display = 'block';
};

const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

console.log(btnsOpenModal);
for(let i = 0.; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',openModal);
}


btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
    console.log('A key was pressed');
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        console.log('Esc was pressed'); 
        closeModal();
    }    
});

