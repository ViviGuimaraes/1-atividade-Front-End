//alert ('olá mundo ....') // O alert é um texte para conferir se o script está linkado com o html

const titulo = document.getElementById ('titulo')  // getElementById = pegue o elemento pelo título 

const nome = document.getElementById ('nome') 

const ok = document.getElementById ('ok') 

function trocarTitulo () {
    titulo.textContent = nome.value
    titulo.classList.add('vermelho')
}

ok01.addEventListener('click' , trocarTitulo ) //  addEventListener ele serve para capturar um vento ( a ação de um osuário)


function alterarTitulo () {
    titulo.textContent = nome.value
    titulo.classList.add('azul')
}


ok02.addEventListener('click' , alterarTitulo )


function modificarTitulo () {
    titulo.textContent = nome.value
    titulo.classList.add('verde')
}


ok03.addEventListener('click' , modificarTitulo )

console.log (nome) //  é usado para analisar o codigo no console do site 

