import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCwe59x_gxYi12HrJu2tfXXf1pzF-GDO_c",
	authDomain: "clone-b928a.firebaseapp.com",
	projectId: "clone-b928a",
	storageBucket: "clone-b928a.appspot.com",
	messagingSenderId: "249796591752",
	appId: "1:249796591752:web:92da3315d36262b85c9f3d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
