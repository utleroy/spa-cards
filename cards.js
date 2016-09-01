var userType = document.getElementById("user-info")
var submitBtn = document.getElementById("submit");
var card = document.getElementById("addedCard");
var remove = document.getElementsByClassName("delete");
var outToDom = document.getElementById("DOM");



submitBtn.addEventListener("click", function newCard() {
  var output = "<div class='addedCard'><p>" + userType.value + "</p></div>"
      output += "<button class='delete'>Remove</button>"
      DOM.innerHTML += output;


  console.log("new card", output)

})



