
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

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

document.getElementById("formRecuperar").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Email de recuperação enviado!");
    } catch (error) {
        alert("Erro: " + error.message);
    }
});