import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVIxqnJEAIPyLWKK1XQhXE4QHASN7HOHM",
    authDomain: "crypto-app-281d6.firebaseapp.com",
    projectId: "crypto-app-281d6",
    storageBucket: "crypto-app-281d6.appspot.com",
    messagingSenderId: "709601804408",
    appId: "1:709601804408:web:9af38462aaf8a92b886d8d",
    measurementId: "G-P2PCEVYWRP"
};
if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const onCreate = (e) => {
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("alerts").add({
        crypto_name: name,
        alert_at: price,
        price_achieved: false,
        user_id: auth.currentUser.uid,
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
};


export default firebase;