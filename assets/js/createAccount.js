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
/*   function Generator() {}; */

/* Generator.prototype.rand =  Math.floor(Math.random() * 26) + Date.now();
Generator.prototype.getId = function() {
    return this.rand++;
};
var idGen =new Generator(); */



  $(document).on("click", "#creat-account-btn", function(){
    var email = $("#user-email").val()
    var password = $("#user-password").val()
    var confirm = $("#confirm-password").val()
      // Register a new user
    if(password == confirm){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (err) {
    // Handle errors
        
    })
    firebase.auth().signInWithEmailAndPassword(email, password)
.catch(function(err) {
  // Handle errors
});
    var userId = firebase.auth().currentUser.uid
    firebase.database().ref('users/' + userId).set({
        username: email })
    }
  
})