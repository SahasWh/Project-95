const firebaseConfig = {
  apiKey: "AIzaSyAaLGZ2jF3TFgfBko8Cyep3HtZmngmhKS0",
  authDomain: "project-41-70df5.firebaseapp.com",
  databaseURL: "https://project-41-70df5-default-rtdb.firebaseio.com",
  projectId: "project-41-70df5",
  storageBucket: "project-41-70df5.appspot.com",
  messagingSenderId: "854061332391",
  appId: "1:854061332391:web:d9aa21d4872379160fa882"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room_name = " + Room_names);
   row = "<div class='room_name' id=" + Room_names + " onclick='redirect_to_room_name(this.id)'>#"+ Room_names +"</div> <hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  message1: "Hello welcome to my room, feel free to chat."
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_room.html"
}

function redirect_to_room_name(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}