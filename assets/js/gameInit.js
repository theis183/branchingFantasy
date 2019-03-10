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
  id = window.location.search.substring(1)
  myCharDB = database.ref(id)
  
  myCharDB.on("value", function (childSnapshot){
    var str = childSnapshot.val().myStrength
    var agi = childSnapshot.val().myAgility
    var con = childSnapshot.val().myConstitution
    var wil = childSnapshot.val().myWillpower
    var intel = childSnapshot.val().myIntelligence
    var cha = childSnapshot.val().myCharisma
    var name = childSnapshot.val().myName
    var maxHp = parseInt(str) + 2 * (parseInt(con)) + 10
    var curHp = childSnapshot.val().myCurrentHp

    var summary = $('<section>')
    var section1 = $("<p>").text(name)
    var section2 = $("<p>").html("<br>HP: " + curHp + " / " + maxHp )
    var section3 =$("<p>").html("<br>STATS<br>STR: " + str + " AGI: " + agi + " CON: " + con  + "<br>WIL: " + wil + " INT: " + intel + " CHA: " + cha)
    summary.append(section1).append(section2).append(section3)
    $("#character-info").html(summary)
    
  })