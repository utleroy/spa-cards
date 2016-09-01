var userType = document.getElementById("user-info")
var submitBtn = document.getElementById("submit");
var outToDom = document.getElementById("DOM");

var remove = document.getElementsByClassName("delete");
var addedCard = document.getElementsByClassName("addedCard");

submitBtn.addEventListener("click", function newCard() {
  var output = "<div class='addedCard'>" + '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">New Card</span><p><section>' + userType.value + '</div></div></div></div>' + "</p></section><input type='button' class='btn delete' value='Delete'></div>"
  outToDom.innerHTML += output;
  console.log("new card", output)

  deleteButtonFunction()
})
function deleteFromDom (event) {
  var currentCard = event.target.parentElement;
  outToDom.removeChild(currentCard)
}
function deleteButtonFunction() {
  for (var i = 0; i < remove.length; i++) {
    var deleteLoop = document.getElementsByClassName("delete");
    for (var j = 0; j < deleteLoop.length; j++) {
      deleteLoop[j].addEventListener("click", deleteFromDom)
    }
  }
}

