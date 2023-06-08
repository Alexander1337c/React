import { initializeApp } from 'firebase/app'
import { signInWithPopup, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

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

export const addCollectionandDocument = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const bath = writeBatch(db)

    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        bath.set(docRef, object)
    });
    await bath.commit();
    console.log('done')
}

export const getCategoryAndDocument = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef)

    const querySnapShot = await getDocs(q)
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
        const { title, items } = docSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,
                { displayName, email, createdAt, ...additionalInformation })
        } catch (error) {
            console.log(`Error creating user ${error.message}`)
        }
    }

    return userDocRef;
}

export const createUserWithPasswordAndEmail = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInWithPasswordAndEmail = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => {
    await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}

