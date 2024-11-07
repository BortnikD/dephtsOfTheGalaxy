const navLinks = document.querySelector('.nav-links');
const navItem = document.querySelector('#explorer');
const menuBtn = document.querySelector('#menu-button');

navItem.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    menuBtn.classList.toggle('hidden');
    navItem.classList.toggle('deactivate');
})

document.addEventListener('click', (event) => {
    // Проверяем, что клик произошел вне navItem или navLinks
    if (!navItem.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.add('hidden'); // Добавляем класс 'hidden'
        navItem.classList.add('deactivate'); // Убираем класс 'deactivate'
        menuBtn.classList.remove('hidden');
    }
});
