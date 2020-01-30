// You can see the code in action at this website: https://tmd747.github.io/ToDoList/


//Different element selections stored in variables

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var newList = document.getElementsByClassName("newlist")[0];

// Function that checks the number of characters in the input field

function inputLength() {
	return input.value.length;
}

// Function that creates an li element with our text inside,
// and creates a Delete button that is added to the li.


function createDelBtnAndListElement() {
	var span = document.createElement("span");
	span.innerHTML = "<button class=\"delete\">x</button>";

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	input.value = "";
	ul.appendChild(li);
}

// Function that Delets the items. We get an event and check that the
// nodeName is BUTTON - if it is, then deletes the item

function deleteItems(event) {
	var target = event.target;
	var btncheck = event.target.nodeName;
	if (btncheck === "BUTTON") {
	target.parentNode.parentNode.remove();	
	}
}

// Function that checks the input field has characters in it and then adds the item

function addListAfterClick() {
	if (inputLength() > 0) {
		createDelBtnAndListElement();
	}
}

// Function checks the input field has characters and listens for the 'enter' 
// key press - then adds the item

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createDelBtnAndListElement();
	}
}

// Function for crossing off items on the list by adding the class 'done' to the 'li' items

function toggleClassDone(event) {
	var target = event.target;
	var licheck = event.target.nodeName;
	if (licheck === "LI") {
	target.classList.toggle("done");	
	}
}

// Function to start a new list by setting the ul to empty

function startNewList(event) {
	var target = event.target;
	var btnNewList = event.target.nodeName;
	if (btnNewList=== "BUTTON") {
	 ul.innerHTML = '';	
	}
}

// Listening for a click and then running a function from above

ul.addEventListener("click", toggleClassDone);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", deleteItems);

newList.addEventListener("click", startNewList)