// Lista de nomes de arquivo das imagens
const imageNames = [
    'kiki.png',
    'kokuriko.png',
    'ocastelonoceu.png',
    'omundodospequeninos.png',
    'Ponyo.png',
    'totoro.png',
    'vidasaovento.png',
    'vagalumes.png',
    'casteloanimado.png',
    'porco.png',
    'lobo.png',
    'sussurros.png',
    'shihiro.png',
    'terramar.png',
    'gatos.png',
    'kaguya.png',
    'pompoko.png',
    'oceano.png',
    'aya.png',
    'yamadas.png',
    'nausicaä.png',
    'marnie.png',
    'ontem.png'

];

let slideshowInterval;
let currentImageIndex = 0;
const slideshowButton = document.getElementById('slideshowButton');
const slideshowImage = document.getElementById('slideshowImage');

// Função para iniciar ou parar o slideshow
function toggleSlideshow() {
    if (!slideshowInterval) {
        slideshowInterval = setInterval(showNextImage, 10); // 0.01 segundos
        slideshowButton.textContent = 'Finalizar Sorteio';
    } else {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        slideshowButton.textContent = 'Começar Sorteio';
    }
}

// Função para exibir a próxima imagem
function showNextImage() {
    const imageUrl = `images/${imageNames[currentImageIndex]}`;
    slideshowImage.src = imageUrl;
    currentImageIndex = (currentImageIndex + 1) % imageNames.length;
}

// Adiciona um event listener para o botão
slideshowButton.addEventListener('click', toggleSlideshow);
