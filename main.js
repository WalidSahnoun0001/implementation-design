let menuButton = document.querySelector('.menu-bars i');
let menu = document.querySelector('section nav ul');

menuButton.onclick = function() {
    menu.classList.toggle('menu-animation');
}
