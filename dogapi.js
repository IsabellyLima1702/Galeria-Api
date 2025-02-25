'use strict'

async function encontrarImagens() {
    const url=`https://picsum.photos/v2/list`
    const response = await fetch(url)
    const date= await response.json()

    return date
}

function gerarSequencia(link){
    const arquivoFtos = document.getElementById('container')
    const novaImg = document.createElement('img')
    novaImg.src=link.download_url    
    arquivoFtos.appendChild(novaImg)
}

async function determinarFiguras() {
    const imagens = await encontrarImagens()
    const arquivoFtos = document.getElementById('container')
    arquivoFtos.replaceChildren('')
    imagens.forEach(gerarSequencia)
    console.log(imagens)
}

determinarFiguras()