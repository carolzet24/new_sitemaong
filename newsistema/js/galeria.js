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

document.getElementById("formGaleria").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("albumNome").value;
    const descricao = document.getElementById("albumDescricao").value;
    const data = document.getElementById("albumData").value;
    const fotos = document.getElementById("fotos").files;

    let urls = [];
    for (let foto of fotos) {
        const storageRef = ref(storage, 'galeria/' + foto.name);
        await uploadBytes(storageRef, foto);
        const url = await getDownloadURL(storageRef);
        urls.push(url);
    }

    await registrarLog('Criação de álbum');
    await addDoc(collection(db, "galeria"), {
        nome, descricao, data, imagens: urls
    });
    alert("Álbum criado!");
});