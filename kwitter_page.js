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
username = localStorage.getItem("username")
roomname = localStorage.getItem("roomname")

function send() {
    msg = document.getElementById("msg").value
    firebase.database().ref("roomname").push({ name: username, message: msg, like: 0 })
    document.getElementById("msg").value = ""
}

function getData() {
    firebase.database().ref("/" + roomname).on('value', function(snapshot) {
        document.getElementById("Output").innerHTML = "";
        snapshot.forEach(
            function(childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                    firebase_message_id = childKey;
                    message_data = childData;
                    //Start code 
                    console.log(firebase_message_id);
                    console.log(message_data);
                    name = message_data['name'];
                    message = message_data['message'];
                    like = message_data['like'];
                    name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                    like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                    row = name_with_tag + message_with_tag + like_button + span_with_tag;
                    document.getElementById("Output").innerHTML += row; //End code 
                }
            });
    });
}
getData();

function updateLike(message_id) {
    console.log("clickedonlikebutton-" + message_id)
    button_id = message_id
    likes = document.getElementById(button_id).value
    updated_likes = Number(likes) + 1
    console.log(updated_likes)
    firebase.database().ref(roomname).child(message_id).update({ like: updated_likes })
}

function logout() {
    localStorage.removeItem(username);
    localStorage.removeItem(roomname)
    window.location.replace("index.html")
}