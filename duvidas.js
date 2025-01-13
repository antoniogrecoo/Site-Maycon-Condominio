document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Fechar todas as respostas abertas
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.style.display = 'none';
        });

        // Alternar a exibição da resposta atual
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
