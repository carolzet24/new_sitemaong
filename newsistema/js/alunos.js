import { registrarLog } from "./log-helper.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBIG-2A1Bjog0XlS2BDIa1hd-PlrY7W0v4",
    authDomain: "sistema-ong-c6c05.firebaseapp.com",
    projectId: "sistema-ong-c6c05",
    storageBucket: "sistema-ong-c6c05.firebasestorage.app",
    messagingSenderId: "326382290585",
    appId: "1:326382290585:web:ee0f282efe6f0e303d5a08"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("alunoForm");
    const lista = document.getElementById("listaAlunos");
    const nomeInput = document.getElementById("nome");
    const turmaInput = document.getElementById("turma");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = nomeInput.value.trim();
        const turma = turmaInput.value.trim();

        if (!nome || !turma) {
            alert("Preencha todos os campos");
            return;
        }

        await registrarLog('Cadastro de aluno');
    await addDoc(collection(db, "alunos"), {
            nome: nome,
            turma: turma,
            criadoEm: new Date()
        });

        nomeInput.value = "";
        turmaInput.value = "";
        carregarAlunos();
    });

    async function carregarAlunos() {
        lista.innerHTML = "";
        const querySnapshot = await getDocs(collection(db, "alunos"));
        querySnapshot.forEach((doc) => {
            const aluno = doc.data();
            const item = document.createElement("li");
            item.textContent = `${aluno.nome} - Turma: ${aluno.turma}`;
            lista.appendChild(item);
        });
    }

    carregarAlunos();
});