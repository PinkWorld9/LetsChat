
//ADD YOUR FIREBASE LINKS HERE
username = localStorage.getItem("username")
document.getElementById("username").innerHTML = "Welcome " + username + "!"
var firebaseConfig = {
      apiKey: "AIzaSyAG3VMWMe_dqHmLuniYaq8eqF-pq_kw35M",
      authDomain: "let-s-chat-d98b7.firebaseapp.com",
      databaseURL: "https://let-s-chat-d98b7-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-d98b7",
      storageBucket: "let-s-chat-d98b7.appspot.com",
      messagingSenderId: "665492026089",
      appId: "1:665492026089:web:abf94c1ed058ab448f7678",
      measurementId: "G-Y4V2JK9HC9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(
      function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
