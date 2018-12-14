// *****************Mobile menu****************************88
var menu = document.getElementById('mobile-container')
var open = document.getElementById('open-button')
var close = document.getElementById('close')
function openMenu() {
    menu.className = 'mobile-container open';
}
function closeMenu() {
    menu.className = 'mobile-container';
}
open.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
