// javascript file

// Function to csreate a new list item when clicking on the "Add" button
function newElement() {
  // use variables to create a new list item, with Bootrap class, and get the values from the form.
  var newItem = document.createElement("li");
  newItem.className = "list-group-item";
  var inputText = document.getElementById("myInput").value;
  var inputDate = document.getElementById("myInput2").value;
  // validate input to check whether the task has a due date, or not. Append the associated output to the span.
  if (inputDate !== "") {
    var dateInput = document.createElement("span");
    dateInput.className = "badge badge-dark";
    dateInput.id = "dateInput";
    dateInput.innerHTML = "Due: " + inputDate;
  }else {
    var dateInput = document.createElement("span");
    dateInput.className = "badge badge-dark";
    dateInput.id = "dateInput"
    dateInput.innerHTML = "Due: N/A";
  }
  // create a text node for the text that was inputted, and append the newly created 'li' child to the 'ul'.
  var textNode = document.createTextNode(inputText);
  textNode.className = "taskText";
  newItem.appendChild(textNode);
  newItem.appendChild(dateInput);
  // ensure the input is not blank, if it is, display an alert. Otherwise, append the child to the ul.
  if (inputText !== '') {
    document.getElementById("myList").appendChild(newItem);
  } else {
      alert("You must write something in the task input! Don\'t be LAZY!!!");
  }
  // set inputs to blank after submitting a task.
  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";

  // append a close button to the list item
  var button = document.createElement("button");
  var txt = document.createTextNode("\u00d7");
  button.className = "close";
  button.appendChild(txt);
  newItem.appendChild(button);
  // if closeButton is clicked, hide/remove the item from the list.
  button.onclick = function() {
    var div = button.parentNode;
    div.remove();
  }
}
// when clicking on a task (not the close-button), strikethrough and change background to green
var list = document.querySelector('ul');
// cute cat meme
var gif = document.querySelector('.ifr');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    // toggle cute cat meme, once user has clicked one of their tasks
    gif.style.display = "inline-block";
  }
}, false);
