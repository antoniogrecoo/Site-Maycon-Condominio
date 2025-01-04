// Função para alterar o conteúdo do texto dependendo da largura da tela
function alterarTexto() {
    var texto = document.querySelector('.texto1');  // Seleciona o elemento com a classe texto1
    var texto2 = document.querySelector('.texto2');
    var texto3 = document.querySelector('.texto-especialista');
    var texto4 = document.querySelector('.txt-assessoria');
    if (window.innerWidth < 768) {
        texto.innerHTML = "A ASSESSORIA JURÍDICA<br>QUE<b> SEU CONDOMÍNIO<br>PRECISA!</b>";  // Altera o texto para "TESTE/TESTE" em telas menores que 768px
        texto2.innerHTML = "A Importância da Assessoria<BR>Jurídica nos Condomínios";
        texto3.innerHTML = "FALE COM UM ESPECIALISTA";
        texto4.innerHTML = "COMO FUNCIONA <b>NOSSA ASSESSORIA?</b>";
    } else {
        texto.innerHTML = "A ASSESSORIA JURÍDICA QUE<br><b>SEU CONDOMÍNIO PRECISA!</b>";  // Retorna o texto original
        texto2.innerHTML = "A Importância da Assessoria Jurídica nos Condomínios";
        texto3.innerHTML = "FALE COM UM ESPECIALISTA";
        texto4.innerHTML = "COMO FUNCIONA <b>NOSSA<br> ASSESSORIA?</b>";
    }
}

// Chama a função quando a página for carregada
window.onload = alterarTexto;

// Chama a função sempre que a janela for redimensionada
window.onresize = alterarTexto;
