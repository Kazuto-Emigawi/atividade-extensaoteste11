document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const status = document.getElementById("status");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            status.textContent = "Preencha todos os campos!";
            status.style.color = "red";
            return;
        }

        status.textContent = "Mensagem enviada com sucesso!";
        status.style.color = "green";

        form.reset();
    });
});