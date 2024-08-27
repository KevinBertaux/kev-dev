const menuButton: Element | null = document.querySelector('#menu-button');
const menu: Element | null = document.querySelector('.menu');

// @ts-ignore
menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    // @ts-ignore
    menuButton.classList.toggle('closed');

    // @ts-ignore
    menu.classList.toggle('open');
});