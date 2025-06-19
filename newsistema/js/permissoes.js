
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

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

const permissoes = {
    "alunos.html": ["coordenador", "secretario", "professor", "assistente"],
    "chamada.html": ["coordenador", "professor"],
    "dashboard.html": ["coordenador", "secretario"], // professores/assistentes não veem doações/logs
    "doacoes.html": ["coordenador", "secretario"],
    "documentos.html": ["coordenador", "secretario"],
    "galeria.html": ["coordenador", "secretario", "professor", "assistente"],
    "configuracoes.html": ["coordenador", "secretario", "professor", "assistente"],
    "perfil.html": ["coordenador", "secretario", "professor", "assistente"],
    "auditoria.html": ["coordenador"],
    "calendario.html": ["coordenador", "secretario", "professor", "assistente"],
    "guia.html": ["coordenador", "secretario", "professor", "assistente"],
    "menu.html": ["coordenador", "secretario", "professor", "assistente"]
};

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        const snap = await getDoc(doc(db, "usuarios", uid));
        if (snap.exists()) {
            const perfil = snap.data().perfil;
            let pagina = location.pathname.split("/").pop();
            console.log('Caminho completo:', location.pathname);
            console.log('Página extraída:', pagina);
            const permitido = permissoes[pagina];
            console.log('Perfil do usuário:', perfil);
            console.log('Página atual:', pagina);
            console.log('Permissões necessárias:', permitido);
            if (permitido && !permitido.includes(perfil)) {
                alert("Acesso negado para seu perfil.");
                window.location.href = "menu.html";
            }
        }
    }
});