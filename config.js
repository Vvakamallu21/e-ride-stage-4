import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCvMPs55szLdfCOtZOH4B0crSqhxn1uYgk",
    authDomain: "e-ride-36d76.firebaseapp.com",
    projectId: "e-ride-36d76",
    storageBucket: "e-ride-36d76.appspot.com",
    messagingSenderId: "845035226266",
    appId: "1:845035226266:web:3249d507c22a1ddb650b23"
  };

if (!firebase.app.length){
    firebase.initializeApp(irebaseConfig)
}

export default firebase.firestore()
