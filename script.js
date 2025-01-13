// Função para alterar o conteúdo do texto dependendo da largura da tela
function alterarTexto() {
    // Seleciona os elementos necessários
    const texto = document.querySelector('.texto1');
    const texto2 = document.querySelector('.texto2');
    const texto3 = document.querySelector('.texto-especialista');
    const texto4 = document.querySelector('.txt-assessoria');
  
    // Verifica se os elementos existem antes de tentar modificar
    if (texto && texto2 && texto3 && texto4) {
      if (window.innerWidth < 768) {
        texto.innerHTML = "A ASSESSORIA JURÍDICA<br>QUE<b> SEU CONDOMÍNIO<br>PRECISA!</b>";
        texto2.innerHTML = "A Importância da Assessoria<BR>Jurídica nos Condomínios";
        texto3.innerHTML = "FALE COM UM ESPECIALISTA";
        texto4.innerHTML = "COMO FUNCIONA <b>NOSSA ASSESSORIA?</b>";
      } else {
        texto.innerHTML = "A ASSESSORIA JURÍDICA QUE<br><b>SEU CONDOMÍNIO PRECISA!</b>";
        texto2.innerHTML = "A Importância da Assessoria Jurídica nos Condomínios";
        texto3.innerHTML = "FALE COM UM ESPECIALISTA";
        texto4.innerHTML = "COMO FUNCIONA <b>NOSSA<br> ASSESSORIA?</b>";
      }
    }
  }
  
  // Função para verificar se um elemento está visível no viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  // Função para revelar elementos gradualmente
  function revealOnScroll() {
    const hiddenElements = document.querySelectorAll('.hidden');
    
    hiddenElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('visible');
        element.classList.remove('hidden');
      }
    });
  }
  
  // Eventos para alterar o texto e aplicar animações no scroll
  window.addEventListener('DOMContentLoaded', () => {
    alterarTexto(); // Altera os textos ao carregar a página
    revealOnScroll(); // Revela elementos já visíveis no carregamento
  });
  
  window.addEventListener('resize', alterarTexto); // Altera os textos ao redimensionar a tela
  window.addEventListener('scroll', revealOnScroll); // Revela elementos gradualmente no scroll
  