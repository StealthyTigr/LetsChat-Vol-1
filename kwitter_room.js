// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCgKp1uwkw0zV5xio7paaEcSyXfVf9o2yU",
      authDomain: "kwitter-450fc.firebaseapp.com",
      databaseURL: "https://kwitter-450fc-default-rtdb.firebaseio.com",
      projectId: "kwitter-450fc",
      storageBucket: "kwitter-450fc.appspot.com",
      messagingSenderId: "606078189035",
      appId: "1:606078189035:web:2a75a474ed13a446832dae",
      measurementId: "G-THSQS6SMSF"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
