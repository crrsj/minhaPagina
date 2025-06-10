document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const checkVisibility = () => {
        sections.forEach(section => {
            // Posição da seção em relação à viewport
            const sectionTop = section.getBoundingClientRect().top;

            // Altura da janela visível
            const viewportHeight = window.innerHeight;

            // Se o topo da seção estiver dentro da viewport (ou um pouco antes de entrar totalmente)
            // ajustamos 0.8 para a seção começar a aparecer quando 80% dela já estiver visível
            if (sectionTop < viewportHeight * 0.8) {
                section.classList.add('fade-in');
            } else {
                // Opcional: remover a classe se rolar para cima e a seção sair de vista
                // section.classList.remove('fade-in');
            }
        });
    };

    // Verifica a visibilidade ao carregar a página (para seções já visíveis)
    checkVisibility();

    // Verifica a visibilidade ao rolar a página
    window.addEventListener('scroll', checkVisibility);
});