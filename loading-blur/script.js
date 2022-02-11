const bg = document.querySelector('.bg');
const searchText = document.querySelector('.search-text');

let load = 0;

let int = setInterval(blur, 30);

function blur() {
    load++;


    if(load > 99) {
        clearInterval(int);
    }

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    searchText.innerText = load + '%';
    searchText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}