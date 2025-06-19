
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

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
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");
    const mensagemDiv = document.querySelector(".mensagem");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const nome = document.getElementById("nome").value.trim();

        mensagemDiv.className = "mensagem";
        mensagemDiv.style.display = "none";

        if (!email || !senha || !nome) {
            mensagemDiv.textContent = "Por favor, preencha todos os campos";
            mensagemDiv.className = "mensagem erro";
            mensagemDiv.style.display = "block";
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

            await setDoc(doc(db, "usuarios", user.uid), {
                nome: nome,
                email: email,
                perfil: "usuario_comum",
                criadoEm: new Date()
            });

            mensagemDiv.textContent = "Cadastro realizado com sucesso!";
            mensagemDiv.className = "mensagem sucesso";
            mensagemDiv.style.display = "block";

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 1500);
        } catch (error) {
            mensagemDiv.textContent = "Erro ao cadastrar: " + error.message;
            mensagemDiv.className = "mensagem erro";
            mensagemDiv.style.display = "block";
            console.error(error);
        }
    });
});