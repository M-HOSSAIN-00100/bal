<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCF-RK2oNriJxSDovNNAc7lYl0I4haqpLg",
    authDomain: "my-firebase-app-a53c1.firebaseapp.com",
    projectId: "my-firebase-app-a53c1",
    storageBucket: "my-firebase-app-a53c1.firebasestorage.app",
    messagingSenderId: "455784551561",
    appId: "1:455784551561:web:5666e384c14a558d2da258",
    measurementId: "G-VDP607657H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>