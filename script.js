const avanca=document.querySelectorAll('.btn-proximo');

avanca.forEach(button=>{
    button.addEventListener('click',function(){
        const atual=document.querySelector('.ativo')
        const proximoPasso='passo-'+this.getAttribute('data-proximo')

        atual.classList.remove('ativo')
        document.getElementById(proximoPasso).classList.add('ativo')
    })

})



startTime = Date.now();
function updateBodyHeight() {
    currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    sinusoid = Math.sin(elapsedTime/1000)*20+800;
    document.body.style.height = sinusoid + 'px';
    console.log(seconds);
}
updateBodyHeight();
setInterval(updateBodyHeight);


