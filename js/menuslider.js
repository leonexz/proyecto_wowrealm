(function () {
    const openButton = document.querySelector('.menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    menu.classList.toggle('click', () => {

    }) /* quita la nav link show si la tiene */
})();