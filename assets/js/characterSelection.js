var config = {
    apiKey: "AIzaSyDBEWWUoEHDw4a2G4Ate7Tzrf5CgO4uJrY",
    authDomain: "branchingfantasy.firebaseapp.com",
    databaseURL: "https://branchingfantasy.firebaseio.com",
    projectId: "branchingfantasy",
    storageBucket: "branchingfantasy.appspot.com",
    messagingSenderId: "18945281337"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  

  
  firebase.auth().onAuthStateChanged(function(user) {
    console.log("state change")
    if (user){
    var userId = firebase.auth().currentUser.uid
    database.ref("users/" + userId +"/characters").orderByChild("dateAdded").on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val())
      var str = childSnapshot.val().myStrength
      var agi = childSnapshot.val().myAgility
      var con = childSnapshot.val().myConstitution
      var wil = childSnapshot.val().myWillpower
      var intel = childSnapshot.val().myIntelligence
      var cha = childSnapshot.val().myCharisma
      var name = childSnapshot.val().myName
      var div = $("<div>").text(name + ": " + "STR: " + str + " AGI: " + agi + " CON: " + con + " WIL: " + wil + " INT: " + intel + " CHA: " + cha)
      var btn = $('<button type="button" class="btn btn-primary start-game-btn">').text("Continue").attr("assoc-id", childSnapshot.val().myid)    
      $("#character-selection").append(div).append(btn)
    })
  }
  else{
    window.location.href = "index.html"
  }
  })

  

  $(document).on("click", ".start-game-btn", function(){
    window.location.href = "game.html?" + $(this).attr("assoc-id")
  })
  
  