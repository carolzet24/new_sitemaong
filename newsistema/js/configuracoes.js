
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
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


onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("modoEscuro").addEventListener("change", () => salvar(user));
        document.getElementById("modoLeitura").addEventListener("change", () => salvar(user));
        document.getElementById("tamanhoFonte").addEventListener("change", () => salvar(user));
    }
});

function salvar(user) {
    const preferencias = {
        escuro: document.getElementById("modoEscuro").checked,
        leitura: document.getElementById("modoLeitura").checked,
        fonte: document.getElementById("tamanhoFonte").value
    };
    salvarPreferencias(user.uid, preferencias).then(() => {
        alert("Preferências salvas!");
    });
}