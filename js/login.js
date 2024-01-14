        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
        import {getDatabase, ref, update} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js"
        import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyDyjRgqWQpQdMGNE_tXENctZglM9PRg1fU",
          authDomain: "y1s2-wd.firebaseapp.com",
          databaseURL: "https://y1s2-wd-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "y1s2-wd",
          storageBucket: "y1s2-wd.appspot.com",
          messagingSenderId: "875280135992",
          appId: "1:875280135992:web:ef9d10f0aeabec6118f3cd",
          measurementId: "G-HRMTCRML28"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const database = getDatabase(app);
        const auth = getAuth();

        login.addEventListener('click',(e)=>{
          console.log('Login button clicked');
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          console.log('Email: ',email);
          console.log('Password: ',password);

          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const lgDate = new Date();
            console.log('lgDate:', lgDate);
            update(ref(database,'users/' + user.uid),{
              last_login: lgDate,
            })
            alert('User Logged In');
            // ...
            location.replace("http://127.0.0.1:5500/book%20now/cart.html");
            })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
          });
        
        });