const firebaseConfig = {
    apiKey: "AIzaSyDWGhjOuaFD_o8G5ICPdNkA13sdu0nWsio",
    authDomain: "kabagema-fb-clone.firebaseapp.com",
    databaseURL: "https://kabagema-fb-clone.firebaseio.com",
    projectId: "kabagema-fb-clone",
    storageBucket: "kabagema-fb-clone.appspot.com",
    messagingSenderId: "875640431931",
    appId: "1:875640431931:web:042254d7aff7dfd706431e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();