const container = document.querySelector('.container');

function createHexagon() {
    const hexagon = document.createElement('div');
    hexagon.classList.add('hexagon');
    hexagon.style.left = `${Math.random() * 100}vw`;
    hexagon.style.top = `${Math.random() * 100}vh`;
    container.appendChild(hexagon);

    setTimeout(() => {
        hexagon.remove();
    }, 5000);
}

setInterval(createHexagon, 300);