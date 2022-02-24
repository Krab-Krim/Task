import {getRandomColor} from './utils'

export default function initApp() {
    console.log('Hello world');

    const container = document.createElement('button');
    container.className = 'button';
    container.textContent = 'Изменить цвет страницы';

    document.body.appendChild(container);

    container.addEventListener('click', function () {
        return document.body.style.backgroundColor = getRandomColor();
    })
}