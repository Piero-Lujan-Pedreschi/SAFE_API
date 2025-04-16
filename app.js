// Import the functions you need from the SDKs you need
import { initializeApp } from “firebase/app”;
import { getAnalytics } from “firebase/analytics”;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app’s Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: “AIzaSyA3Hkep6jGfMS3P51S-nIMbBl8ySuoeHZ4”,
  authDomain: “buoyant-silicon-454217-f0.firebaseapp.com”,
  projectId: “buoyant-silicon-454217-f0”,
  storageBucket: “buoyant-silicon-454217-f0.firebasestorage.app”,
  messagingSenderId: “34348726674”,
  appId: “1:34348726674:web:dce18f52e573be7a30e94b”,
  measurementId: “G-LSPNY5R59Q”
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function validate(event){


    var username =  document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "" ){
            alert("Please fill in all fields");
    
        }   
        if (username === "admin" && password === "1234"){
            alert("sucessful");
           

           
            } 

        else{
            alert("Invalid username or password");
          
            
        }


}

