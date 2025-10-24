startTime = Date.now();
const vh = window.innerHeight;








const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})








function updateBodyHeight() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const sinusoid = Math.sin(elapsedTime / 2000) * 20 + (vh+40);
    document.body.style.height = sinusoid + 'px';
}

function animate() {
    updateBodyHeight();
    requestAnimationFrame(animate);
}

animate();

function createRain() {
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain-container');
    document.body.appendChild(rainContainer);

    for (let i = 0; i < 200; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDelay = Math.random() * 2 + 's';
        raindrop.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
        rainContainer.appendChild(raindrop);
    }
}

createRain();


