const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.background');

let timer = 0;

let timerId = setInterval(blurring, 30)

function blurring() {
    timer++

    if (timer > 99) {
        clearInterval(timerId)
    }

    loadText.innerText = `${timer}%`;

    loadText.style.opacity = scale(timer, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(timer, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max -out_min)) / (in_max - in_min) + out_min
}