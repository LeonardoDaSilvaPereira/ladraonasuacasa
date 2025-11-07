startTime = Date.now();








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
    const vh = window.innerHeight;
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const sinusoid = Math.sin(elapsedTime / 2000) * 20 + (vh);
    document.body.style.height = sinusoid + 'px';
}

function animate() {
    updateBodyHeight();
    requestAnimationFrame(animate);
}

animate();

function createRain() {
    // Create raindrops directly on body, not in a container
    for (let i = 0; i < 500; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.position = 'fixed';
        raindrop.style.animationDelay = Math.random() * 2 + 's';
        raindrop.style.animationDuration = (Math.random() + 1) + 's';
        
        // This will actually work now
        raindrop.style.zIndex = Math.round(Math.random() * 3 - 1);
        
        document.body.appendChild(raindrop);
    }
}

createRain();