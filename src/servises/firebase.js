import { initializeApp } from "firebase/app"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBQGD-yUm16C3xZBAL7a3ixZR0inFhI17E",
    authDomain: "msgproject-9bfba.firebaseapp.com",
    databaseURL: "https://msgproject-9bfba-default-rtdb.firebaseio.com",
    projectId: "msgproject-9bfba",
    storageBucket: "msgproject-9bfba.appspot.com",
    messagingSenderId: "455056719154",
    appId: "1:455056719154:web:cc904532903757fc9e2b2b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
    await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
    await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');

export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);
export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);