// script.js

document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const button = document.getElementById('changeMessage');

    button.addEventListener('click', () => {
        message.textContent = 'You clicked the button!';

    });
});



