const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => container.classList.add('expand-left'));
left.addEventListener('mouseleave', () => container.classList.remove('expand-left'));

right.addEventListener('mouseenter', () => container.classList.add('expand-right'));
right.addEventListener('mouseleave', () => container.classList.remove('expand-right'));