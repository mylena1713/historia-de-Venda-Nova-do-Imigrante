const botaoSaibaMais = document.querySelector('.saiba-mais');
botaoSaibaMais.addEventListener('click', () => {  window.open("https://cidades.ibge.gov.br/brasil/es/venda-nova-do-imigrante/historico", "_blank");
});
const imagensDestaque = [
    "https://grafittinews.com.br/wp-content/uploads/2022/10/venda-nova-placa-foto-divulgacao.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/39/Venda_Nova_do_Imigrante_vista_a%C3%A9rea.jpg", "https://d38u8h9m4j4pkw.cloudfront.net/4/imagens/noticias/3974-venda-nova-jpeg.jpeg"
];
let indiceImagemAtual = 0;
const imagemElemento = document.getElementById('imagem-destaque');
function trocarImagem() {
    imagemElemento.src = imagensDestaque[indiceImagemAtual];
    indiceImagemAtual = (indiceImagemAtual + 1) % imagensDestaque.length;
}
trocarImagem();
setInterval(trocarImagem, 5000);