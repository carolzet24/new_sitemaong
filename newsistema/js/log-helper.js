
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

export async function registrarLog(acao, detalhes = "") {
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore();

    if (user) {
        await addDoc(collection(db, "logs"), {
            usuario: user.email || user.uid,
            acao,
            detalhes,
            data: new Date().toISOString()
        });
    }
}