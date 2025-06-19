import { registrarLog } from "./log-helper.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

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
const storage = getStorage(app);

document.getElementById("formDoacao").addEventListener("submit", async (e) => {
    e.preventDefault();
    const tipo = document.getElementById("tipo").value;
    const descricao = document.getElementById("descricao").value;
    const valor = document.getElementById("valor").value;
    const data = document.getElementById("data").value;
    const status = document.getElementById("status").value;
    const comprovante = document.getElementById("comprovante").files[0];

    const storageRef = ref(storage, 'comprovantes/' + comprovante.name);
    await uploadBytes(storageRef, comprovante);
    const url = await getDownloadURL(storageRef);

    await registrarLog('Registro de doação');
    await addDoc(collection(db, "doacoes"), {
        tipo, descricao, valor, data, status, comprovante: url
    });
    alert("Doação registrada!");
});