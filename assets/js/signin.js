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



  $(document).on("click", "#submit-btn", function(event){
      event.preventDefault()
      var email = $("#user-email").val()
      console.log(email)
      var password = $("#user-password").val()
      console.log(password)
      var stored = true
      // Sign in existing user
    firebase.auth().signInWithEmailAndPassword(email, password)
.catch(function(err) {

  // Handle errors
});
  })




