import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmIKwyHnwSxbCcR8rJIT_ZOU0kyHK6QKc",
    authDomain: "uc-clothing.firebaseapp.com",
    databaseURL: "https://uc-clothing.firebaseio.com",
    projectId: "uc-clothing",
    storageBucket: "",
    messagingSenderId: "423953380838",
    appId: "1:423953380838:web:108dd6cc46820947"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  };

  export const convertCollectionSnapchotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return{
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce( (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{});

  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;