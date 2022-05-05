var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var msgs = document.getElementById("msgs");

button.addEventListener('click', function() {
  var newMessage = document.createElement("li");
  newMessage.innerHTML = textbox.value;
  msgs.appendChild(newMessage);
  textbox.value = "";
});

function refreshPage() {
  window.location.reload();
}

function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "Your Name");
  if (person == null || person == "") {
    text = "Goodbye!";
  } else {
    text = "Hello " + person + "! How are you today? Welcome!";
  }
  document.getElementById("ulTxt").innerHTML = text;
}
