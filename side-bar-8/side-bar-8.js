const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');
const content = document.querySelector('section');

toggle_btn.onclick = function () {
    nav.classList.toggle('hide');
    content.classList.toggle('expand');
};

const body = document.querySelector('body');
const bgModeBtn = document.getElementById('bgModeBtn');
const bgModeIcon = document.getElementById('bgModeIcon');
const sectionHeader = document.querySelector('section h1');

bgModeBtn.onclick = function () {
    body.classList.toggle("dark-mode");
    bgModeIcon.classList.toggle("fa-sun-o");
    bgModeIcon.classList.toggle("fa-moon-o");
    sectionHeader.classList.toggle("dark-mode");
}