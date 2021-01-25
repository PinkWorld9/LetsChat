
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
    function adduser(){
      username = document.getElementById("User_Name").value 
      firebase.database().ref("/").child(username).update({purpose:"addinguser"})    
  }
  function logout() { 
localStorage.removeItem(username); 
localStorage.removeItem(roomname)
window.location = "index.html"; 
}
function addRoom(){
      roomname = document.getElementById("room_name").value 
      firebase.database().ref("/").child(roomname).update({purpose:"addingroomname"})
      localStorage.setItem("room_name", roomname)
      window.location("kwitterpage.html")
}

function getData() {firebase.database().ref("/").on('value', 

function(snapshot) {document.getElementById("Output").innerHTML = "";snapshot.forEach(

      function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname") + Room_names
       row = "<div class= roomname id=" + Room_names + "onclick = redirecttoroomname(this.id)> #" + Room_names + "</div> <hr>"
       document.getElementById("Output").innerHTML = row 

      });});}
getData();

function redirecttoroomname(name) {
      localStorage.setItem("roomname", name)
      window.location ("kwitterpage.html")
}
