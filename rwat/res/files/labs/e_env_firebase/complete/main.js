import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const firebaseConfig = {
    apiKey: "AIzaSyBV1i44xkAdtdgDtaTniMgszuCqz7gWDx0",
    authDomain: "jvk-test.firebaseapp.com",
    projectId: "jvk-test",
    storageBucket: "jvk-test.appspot.com",
    messagingSenderId: "991916937600",
    appId: "1:991916937600:web:1b6abf257f28ceba6f7165",
    measurementId: "G-KHYJ1JZFH5"
};

const uiConfig = {
    signInSuccessUrl: "index.html",
    signInOptions: [
	{
	    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, 
	    requireDisplayName: false
	},
	{
	    provider:firebase.auth.GoogleAuthProvider.PROVIDER_ID
	}
    ]
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);


onAuthStateChanged(auth, (user) => {
    setWorkspaceContent("");
    let authEl = document.getElementById("auth-el");
    let root = document.getElementById("root");
    if (auth.currentUser) {
	authEl.innerHTML = "";
	root.style.display = "block";
    } else {
	root.style.display = "none";
	const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
	ui.start(authEl, uiConfig);
    }
});

function setWorkspaceContent(id, add=false) {
    if (!add) {
	Array.from(document.querySelector("#workspace").children).forEach((c) => {
	    c.style.display = "none";
	});
    }
    let content = document.getElementById(id);
    if (content) content.style.display = "block";
}

function setMessage(text, add=false) {
    document.getElementById("text-message").innerHTML = text;
    setWorkspaceContent("text-message", add);
}

document.getElementById("button-logout").addEventListener("click", (e) => {
    e.preventDefault();
    setWorkspaceContent("");
    signOut(auth).catch(() => {
	console.log("Error during signout: ", e);
    })
});

document.getElementById("button-create").addEventListener("click", (e) => {
    e.preventDefault();
    setWorkspaceContent("form-create");
});

document.getElementById("button-list").addEventListener("click", async (e) => {
    e.preventDefault();
    setWorkspaceContent("table-list");

    let table = document.getElementById("table-list");
    while (table.children.length > 1) {
	table.removeChild(table.lastChild);
    }

    const users = await getDocs(collection(db, "users"));
    users.forEach((user) => {
	table.innerHTML += `<tr><td>${user.id}</td><td>${user.get("name")}</td></tr>`;
    });
});

document.getElementById("button-submit").addEventListener("click", (e) => {
    let persid = document.getElementById("input-persid").value;
    let persname = document.getElementById("input-name").value;
    if (persname && persid) {
	setDoc(doc(db, "users", persid), {
	    name: persname
	}).then(() => {
	    setMessage("The person has been added successfully.");
	}).catch((error) => {
	    setMessage("An error occurred while adding the person: " + error);
	});
    } else {
	setMessage("You must enter non-empty id and name.", true);
    }    
})







