// Aguarda o carregamento completo do conteúdo HTML antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão que abre/fecha o menu (ícone hambúrguer)
    const toggle = document.getElementById("menu-toggle");
    // Seleciona o elemento <ul> que contém os itens do menu
    const menu = document.getElementById("menu");

    // Adiciona um evento de clique ao botão toggle
    toggle.addEventListener("click", function () {
        // Adiciona ou remove a classe 'active' no menu para mostrar ou esconder o menu responsivo
        menu.classList.toggle("active");
    });
});
