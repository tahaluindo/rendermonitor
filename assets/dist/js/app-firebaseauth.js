import { routePage } from "./app-route.js";

const firebaseInit = async () => {
    let firebaseConfig = {
        apiKey: "AIzaSyBWNhnRwNpmr845sDbwUZSj_R_5Otn2dSQ",
        authDomain: "mahrus-956f2.firebaseapp.com",
        projectId: "co2-reductor",
        storageBucket: "mahrus-956f2.appspot.com",
        messagingSenderId: "851924795824",
        appId: "1:851924795824:web:811ea12b8c4a0202f59675",
        measurementId: "G-NBT7J857DN",
    };
    await firebase.initializeApp(firebaseConfig);
    await firebase.analytics();
};

const getUserInfo = async () => {
    return await firebase.auth().currentUser;
};

const logOut = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            window.location.href = "./index.html";
            routePage();
        })
        .catch((error) => {
            console.error(error);
        });
};

export { firebaseInit, getUserInfo, logOut };
