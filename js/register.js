        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
        import {getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js"
        import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

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

        submitData.addEventListener('click', (e) => {
          console.log('Submit button clicked');
          var email = document.getElementById('email').value;
          var fname = document.getElementById('fname').value;
          var lname = document.getElementById('lname').value;
          var password = document.getElementById('password').value;
          var username = document.getElementById('username').value;
          var contact = document.getElementById('contact').value; // 
          var country = document.getElementById('country').value;//
          var city = document.getElementById('city').value;//
          var address = document.getElementById('address').value;//
          const lgDate = new Date();
          console.log('Email:', email);
          console.log('First Name:', fname);
          console.log('Last Name:', lname);
          console.log('Password:', password);
          console.log('Username:', username);
          console.log('Contact Number:', contact);
          console.log('Country:', country);
          console.log('City:', city);
          console.log('Address:', address);
          
          if (!email || !fname || !lname || !password || !username || !contact || !country || !city || !address) {
            alert('Please fill in all the required fields');
            return;
          }

          // Basic email format validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
              alert('Please enter a valid email address');
              return;
          }

          // Validate contact number (maximum 12 digits)
          const contactRegex = /^\d{1,12}$/;
          if (!contactRegex.test(contact)) {
              alert('Contact number should have maximum of 12 digits only');
              return;
          }

          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
        
              set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email,
                contact: contact,    // 
                country: country, //
                city: city, //
                password: password,
                address : address, //
                last_login: lgDate
              });
              console.log('last_login: ',lgDate);
              alert('User Created');
            })
        });

        document.addEventListener('DOMContentLoaded', function () {
          

          var passwordInput = document.getElementById('password');
          var togglePasswordBtn = document.getElementById('togglePassword');
      
          togglePasswordBtn.addEventListener('click', function () {
              var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
              passwordInput.setAttribute('type', type);
          });
      });