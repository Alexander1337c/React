import { initializeApp } from 'firebase/app'
import { signInWithPopup, signInWithRedirect, GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLeoOYYVrF7jm8darL83TMyjvOxQM4pD8",
    authDomain: "crwn-7e172.firebaseapp.com",
    projectId: "crwn-7e172",
    storageBucket: "crwn-7e172.appspot.com",
    messagingSenderId: "719923952709",
    appId: "1:719923952709:web:cc08b02372a6456fa9372c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt })
        } catch (error) {
            console.log(`Error creating user ${error.message}`)
        }
    }

    return userDocRef;
}