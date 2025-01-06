document.addEventListener("DOMContentLoaded", function () {
    const phrase = "voce e o amor da minha vida"; // A frase a ser adivinhada
    let hearts = 3; // Número de corações
    let guessedPhrase = Array(phrase.length).fill("_"); // Frase com as letras escondidas

    // Seletores do DOM
    const wordDisplay = document.getElementById("word-display");
    const heartsDisplay = document.getElementById("hearts");
    const messageDisplay = document.getElementById("message");
    const letterInput = document.getElementById("letter-input");
    const guessButton = document.getElementById("guess-button");

    // Atualiza a exibição da palavra adivinhada
    function updateWordDisplay() {
        wordDisplay.textContent = guessedPhrase.join(" ");
    }

    // Adiciona o evento ao botão de adivinhar
    guessButton.addEventListener("click", function() {
        const guess = letterInput.value.toLowerCase(); // Obtém o valor digitado

        // Verifica se o usuário inseriu uma letra
        if (guess && guess.length === 1) {
            let correctGuess = false;

            // Verifica todas as posições da frase
            for (let i = 0; i < phrase.length; i++) {
                if (phrase[i] === guess) {
                    guessedPhrase[i] = guess;
                    correctGuess = true;
                }
            }

            // Se a letra for correta
            if (correctGuess) {
                updateWordDisplay(); // Atualiza a tela com a letra adivinhada

                // Verifica se a frase foi completamente adivinhada
                if (guessedPhrase.join("") === phrase) {
                    messageDisplay.textContent = "Parabéns! Você acertou a frase!";
                    messageDisplay.style.color = "green";
                }
            } else {
                // Se a letra for incorreta, diminui os corações
                hearts--;
                heartsDisplay.textContent = hearts;

                // Verifica se o jogador perdeu
                if (hearts === 0) {
                    messageDisplay.textContent = "Você perdeu todos os corações. Tente novamente!";
                    messageDisplay.style.color = "red";
                }
            }
        } else {
            // Caso o usuário não insira uma letra válida
            messageDisplay.textContent = "Por favor, insira uma letra válida!";
            messageDisplay.style.color = "red";
        }

        // Limpa o campo de entrada e foca nele para a próxima tentativa
        letterInput.value = "";
        letterInput.focus();
    });

    // Inicializa a tela com a palavra oculta e os corações
    updateWordDisplay();
    heartsDisplay.textContent = hearts;
});
