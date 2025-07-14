// Referências aos elementos do DOM
const container = document.getElementById("container");
const welcomeText = document.getElementById("welcomeText");
const continueQuestion = document.getElementById("continueQuestion");
const buttons = document.getElementById("buttons");

const libraryPage = document.getElementById("libraryPage");
const noMessage = document.getElementById("noMessage");
const messageOverlay = document.getElementById("messageOverlay");

const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const btnYes2 = document.getElementById("btnYes2");
const btnNo2 = document.getElementById("btnNo2");

let backButton = null; // Variável para controlar o botão "Ir em frente"

// Função que roda quando a página carrega completamente
window.onload = () => {
    // Após 200ms, adiciona classe para efeito fade-in no container principal
    setTimeout(() => {
        container?.classList.add("fade-in");
    }, 200);

    // Após 3,5s, exibe a pergunta e os botões na tela inicial
    setTimeout(() => {
        if (continueQuestion && buttons) {
            continueQuestion.style.opacity = 1;
            buttons.style.opacity = 1;
        }
    }, 3500);
};

// Quando o usuário clica em "Sim" na primeira pergunta
btnYes?.addEventListener("click", () => {
    // Inicia transição para desaparecer o container
    container.style.transition = "opacity 1.5s ease";
    container.style.opacity = 0;

    // Após a transição, oculta o container e mostra a segunda tela da biblioteca
    setTimeout(() => {
        container.style.display = "none";
        libraryPage.style.display = "flex";
        libraryPage.style.opacity = 0;

        // Pequeno delay para aplicar a transição de fade-in da segunda tela
        setTimeout(() => {
            libraryPage.style.transition = "opacity 1.5s ease";
            libraryPage.style.opacity = 1;
            document.getElementById("buttons2").style.opacity = 1;
        }, 50);
    }, 1500);
});

// Quando o usuário clica em "Não" na primeira pergunta
btnNo?.addEventListener("click", () => {
    // Esconde a pergunta e os botões
    if (continueQuestion && buttons) {
        continueQuestion.style.opacity = 0;
        buttons.style.opacity = 0;
    }

    // Altera o texto para despedida e ajusta margem
    if (welcomeText) {
        welcomeText.textContent = "Tudo bem... nos vemos por aí.";
        welcomeText.style.marginBottom = "0";
    }
});

// Quando o usuário clica em "Sim" na segunda pergunta
btnYes2?.addEventListener("click", () => {
    if (messageOverlay) {
        // Mostra a sobreposição de mensagem
        messageOverlay.style.pointerEvents = "auto";
        messageOverlay.textContent = "Vamos lá...";
        messageOverlay.style.opacity = "1";
    }

    // Após 2,5 segundos redireciona para a página 'index.html'
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2500);
});

// Quando o usuário clica em "Não" na segunda pergunta
btnNo2?.addEventListener("click", () => {
    const buttons2 = document.getElementById("buttons2");
    if (buttons2 && noMessage) {
        // Esconde os botões da segunda tela e desabilita interação
        buttons2.style.opacity = 0;
        buttons2.style.pointerEvents = "none";

        // Exibe uma mensagem de aviso
        noMessage.textContent =
            "Uma pena, mas você não tem como voltar, somente ir em frente.";

        // Se o botão "Ir em frente" ainda não existe, cria e adiciona ele
        if (!backButton) {
            backButton = document.createElement("button");
            backButton.textContent = "Ir em frente";

            // Aplica estilos semelhantes aos outros botões
            backButton.style.marginTop = "20px";
            backButton.style.color = "#ff3333";
            backButton.style.border = "2px solid #ff3333";
            backButton.style.background = "transparent";
            backButton.style.padding = "8px 20px";
            backButton.style.borderRadius = "6px";
            backButton.style.cursor = "pointer";
            backButton.style.fontWeight = "bold";

            // Quando clicado, restaura os botões e remove a mensagem e o botão criado
            backButton.addEventListener("click", () => {
                buttons2.style.opacity = 1;
                buttons2.style.pointerEvents = "auto";
                noMessage.textContent = "";
                backButton.remove();
                backButton = null;
            });

            noMessage.appendChild(backButton);
        }
    }
});
