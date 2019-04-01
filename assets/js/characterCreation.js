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
  

  var points = 10

  var attributes = ["Strength", "Agility", "Constitution", "Willpower", "Intelligence", "Charisma"]

  function createButtons(){
    var divPoints = $('<div id="points">').text("Points: " + points)
    $("#character-attributes").append(divPoints)
    $("#character-attributes").append('<input class="form-control" type="text" id="character-name" placeholder="Name">')   
  for (var i = 0; i < attributes.length; i++){
      div = $("<div>")
      p = $("<p>").text(attributes[i]+ ": 0").attr("id", attributes[i]).attr("points", 0)
      btnAdd = $('<button type="button" class="btn btn-primary add-btn">').text("+").attr("id", attributes[i] + "-add-btn").attr("assoc-attribute", attributes[i])
      btnSub= $('<button type="button" class="btn btn-danger sub-btn">').text("-").attr("id", attributes[i] + "-sub-btn").attr("assoc-attribute", attributes[i])
      div.append(p).append(btnAdd).append(btnSub)
      $("#character-attributes").append(div)
  }
  $("#character-attributes").append('<button type="button" class="btn btn-primary" id="submit-btn">Submit')
}



  createButtons()

  

  $(document).on("click", ".add-btn", function(){
    var assocAttribute = $(this).attr("assoc-attribute")
    var assocValue = parseInt($("#" + assocAttribute).attr("points"))
    if (points >= 1 && assocValue <= 3){
    $("#" + assocAttribute).text(assocAttribute + ": " + (assocValue + 1)).attr("points", assocValue + 1)
    points --
    $("#points").text("Points: " + points)
}
  })

  $(document).on("click", ".sub-btn", function(){
    var assocAttribute = $(this).attr("assoc-attribute")
    var assocValue = parseInt($("#" + assocAttribute).attr("points"))
    if ( assocValue >= 0){
    $("#" + assocAttribute).text(assocAttribute + ": " + (assocValue - 1)).attr("points", assocValue - 1)
    points ++
    $("#points").text("Points: " + points)
}
  })

function Generator() {};

Generator.prototype.rand =  Math.floor(Math.random() * 26) + Date.now();

Generator.prototype.getId = function() {
return this.rand++;
};
var idGen =new Generator();

  $(document).on("click", "#submit-btn", function(){
      if(points == 0) {
        id = idGen.getId()
        var userId = firebase.auth().currentUser.uid
        database.ref("users/" + userId + "/characters").child(id).set({
            myStrength: $("#Strength").attr("points"),
            myAgility: $("#Agility").attr("points"),
            myConstitution: $("#Constitution").attr("points"),
            myWillpower: $("#Willpower").attr("points"),
            myIntelligence: $("#Intelligence").attr("points"),
            myCharisma: $("#Charisma").attr("points"),
            myName: $("#character-name").val(),
            myCurrentHp: 10 + parseInt( $("#Strength").attr("points")) + 2 * parseInt($("#Constitution").attr("points")),
            myChapter: 1,
            myid: id
        })
        window.location.href = "characterSelect.html"
      }
  })

  