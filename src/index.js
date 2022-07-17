'use strict';














// THEME-CHANGER
const body = document.querySelector('body');
body.classList.add("light-theme")
const button = document.querySelector('#theme-switch-toggle')
const changeTheme = () => {
    body.classList.toggle("light-theme");
    body.classList.toggle('dark-theme');
};



import jsonMenu from './menu.json';
// console.log(jsonMenu);
import menuTemplate from './templates/menu_template.hbs'
// console.log(menuTemplate);
button.addEventListener('click', changeTheme);