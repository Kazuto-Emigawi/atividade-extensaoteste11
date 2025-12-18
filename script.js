document.addEventListener("DOMContentLoaded", () => {

    /* ===== FORMULÁRIO FEEDBACK ===== */
    const form = document.getElementById("form-contato");
    const status = document.getElementById("status");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();
            const avaliacao = document.querySelector("input[name='avaliacao']:checked");

            if (!nome || !email || !mensagem) {
                status.textContent = "⚠️ Preencha todos os campos.";
                status.style.color = "red";
                return;
            }

            if (!avaliacao) {
                status.textContent = "⭐ Selecione uma avaliação.";
                status.style.color = "red";
                return;
            }

            const dados = new FormData();
            dados.append("nome", nome);
            dados.append("email", email);
            dados.append("mensagem", mensagem);
            dados.append("avaliacao", avaliacao.value);

            try {
                const resposta = await fetch("salvar_feedback.php", {
                    method: "POST",
                    body: dados
                });

                const retorno = await resposta.text();

                if (retorno.trim() === "ok") {
                    status.textContent = "✅ Feedback enviado com sucesso!";
                    status.style.color = "green";
                    form.reset();
                } else {
                    status.textContent = "❌ Erro ao enviar.";
                    status.style.color = "red";
                }
            } catch {
                status.textContent = "❌ Erro de conexão.";
                status.style.color = "red";
            }
        });
    }

    /* ===== MODO CLARO / ESCURO ===== */
    const botaoModo = document.getElementById("modo-btn");

    if (botaoModo) {
        botaoModo.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("modo", "dark");
                botaoModo.textContent = "☀️ Modo claro";
            } else {
                localStorage.setItem("modo", "light");
                botaoModo.textContent = "🌙 Modo escuro";
            }
        });
    }

    // Carregar preferência salva
    if (localStorage.getItem("modo") === "dark") {
        document.body.classList.add("dark");
        if (botaoModo) botaoModo.textContent = "☀️ Modo claro";
    }
});
