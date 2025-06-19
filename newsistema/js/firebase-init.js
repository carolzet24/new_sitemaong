// Firebase SDK - Inserir dados simulados (após inicializar o Firebase no seu projeto)
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

// Configuração real do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBIG-2A1Bjog0XlS2BDIa1hd-PlrY7W0v4",
  authDomain: "sistema-ong-c6c05.firebaseapp.com",
  projectId: "sistema-ong-c6c05",
  storageBucket: "sistema-ong-c6c05.firebasestorage.app",
  messagingSenderId: "326382290585",
  appId: "1:326382290585:web:ee0f282efe6f0e303d5a08"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Inserir dados do coordenador
async function popularFirestore() {
  try {
    // Usuário coordenador
    await setDoc(doc(db, "usuarios", "coordenador"), {
      nome: "Ana Flávia",
      email: "anafspires95@gmail.com",
      perfil: "coordenador",
      avatar: "padrao1.png"
    });
    console.log("Dados do coordenador inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
  }
}

// Executar a função de popular o banco
popularFirestore();