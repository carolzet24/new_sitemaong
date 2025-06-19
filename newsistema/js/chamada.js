
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

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

document.getElementById("chamadaForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const turma = document.getElementById("turma").value;
    const lista = document.querySelectorAll('input[type=checkbox]');
    const presenca = Array.from(lista).map(item => {
        return { nome: item.dataset.nome, presente: item.checked };
    });
    await addDoc(collection(db, "chamadas"), {
        turma,
        presenca,
        criadoEm: new Date()
    });
    alert("Chamada registrada!");
});