// app.js

// Function to display logged-in user information
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firebaseConfig = {
    apiKey: "AIzaSyDGnaCFPaz4yh2050QaWkknwmU9U1HdMjc",
    authDomain: "sweather-web.firebaseapp.com",
    databaseURL: "https://sweather-web-default-rtdb.firebaseio.com",
    projectId: "sweather-web",
    storageBucket: "sweather-web.appspot.com",
    messagingSenderId: "218825586501",
    appId: "1:218825586501:web:f98ddf9792e788dad0f02c"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};


function displayUserInfo(user) {
    const userElement = document.getElementById('user-info');
    if (user) {
        userElement.innerText = `Logged in as: ${user.email}`;
    } else {
        userElement.innerText = 'Not logged in';
    }
}

// Function to handle user sign up
function signUp(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('User created!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

// Add event listener to sign up button
const signUpButton = document.getElementById('sign-up-button');
signUpButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signUp(email, password);
});


