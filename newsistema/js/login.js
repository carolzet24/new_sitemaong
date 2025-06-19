
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBIG-2A1Bjog0XlS2BDIa1hd-PlrY7W0v4",
    authDomain: "sistema-ong-c6c05.firebaseapp.com",
    projectId: "sistema-ong-c6c05",
    storageBucket: "sistema-ong-c6c05.firebasestorage.app",
    messagingSenderId: "326382290585",
    appId: "1:326382290585:web:ee0f282efe6f0e303d5a08"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const senhaInput = document.getElementById("senha");
    const toggleButton = document.querySelector(".password-toggle");
    const mensagemDiv = document.querySelector(".mensagem");

    toggleButton.addEventListener("click", () => {
        senhaInput.type = senhaInput.type === "password" ? "text" : "password";
        toggleButton.querySelector("i").classList.toggle("fa-eye");
        toggleButton.querySelector("i").classList.toggle("fa-eye-slash");
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        mensagemDiv.className = "mensagem";
        mensagemDiv.style.display = "none";

        if (!email || !senha) {
            mensagemDiv.textContent = "Por favor, preencha todos os campos";
            mensagemDiv.className = "mensagem erro";
            mensagemDiv.style.display = "block";
            return;
        }

        try {
            const button = form.querySelector(".btn-entrar");
            button.classList.add("loading");
            button.disabled = true;

            await signInWithEmailAndPassword(auth, email, senha);
            mensagemDiv.textContent = "Login realizado com sucesso!";
            mensagemDiv.className = "mensagem sucesso";
            mensagemDiv.style.display = "block";

            setTimeout(() => {
                window.location.href = "pages/menu.html";
            }, 1000);
        } catch (error) {
            mensagemDiv.textContent = "Email ou senha incorretos.";
            mensagemDiv.className = "mensagem erro";
            mensagemDiv.style.display = "block";
            console.error(error);
        }
    });
});