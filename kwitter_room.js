var firebaseConfig = {
      apiKey: "AIzaSyDuPbnW0Zk3460lJY6VixD4qaiccvUSZzc",
      authDomain: "kwitter-72922.firebaseapp.com",
      databaseURL: "https://kwitter-72922-default-rtdb.firebaseio.com",
      projectId: "kwitter-72922",
      storageBucket: "kwitter-72922.appspot.com",
      messagingSenderId: "911684824859",
      appId: "1:911684824859:web:679e6598297eb994dfadbe",
      measurementId: "G-X0QBR3N78F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom() {
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";
}
