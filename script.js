const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const play = document.querySelector('.play');
const demo = document.querySelector('.demo');
const close = document.querySelector('.close');


//Event Listener 
function toggleMenu() {
    toggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
        toggle.classList.toggle('active');
    });
}

toggleMenu();



play.addEventListener('click', () => {
    demo.classList.toggle('active');
    Video.currentTime = 0;
    Video.pause();
});

close.addEventListener('click', () =>{
    demo.classList.toggle('active');
});