
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

    if (preferencias.leitura) {
        document.body.classList.add("modo-leitura");
    }
    if (preferencias.fonte) {
        document.body.style.fontSize = preferencias.fonte + "px";
    }
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const ref = doc(db, "preferencias", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
            aplicarPreferencias(snap.data());
        }
    }
});