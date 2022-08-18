// selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
todoInput.focus()


// Event listner
todoButton.addEventListener('click', addTodo);
// console.log(todoButton)
todoList.addEventListener('click', deleteTodofun);
function hello(thing) {
	console.log(this + thing)
}
hello.call("hello " , "World");

// Functions

var person = {
  fullName: function() {
  	console.log(this);
  	// console.log(mouseX, mouseY);
    return this.firstName + " " + this.lastName + " " + this;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe",
  fully: function() {
  	console.log(mouseX, mouseY);
  }
}

var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.call(person1)); 


function addTodo(event){
	// prevent form from submitting
	event.preventDefault();
	// create list of task with delete button and check button
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// create the li for the list
	const newTodo = document.createElement('li');

	if (todoInput.value != "") {
		newTodo.innerText = todoInput.value;
		newTodo.classList.add('todo-item');
		todoDiv.appendChild(newTodo);

		// create checkbutton
		const checkTodo = document.createElement('button');
		checkTodo.innerHTML = '<i class="fas fa-check"></i>';
		checkTodo.classList.add('check-btn')
		todoDiv.appendChild(checkTodo);

		// create delete button
		const deleteButton = document.createElement('button');
		deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>'
		deleteButton.classList.add('delete-btn');
		todoDiv.appendChild(deleteButton);

		// append to list
		todoList.appendChild(todoDiv);
		todoInput.value = "";
		todoInput.focus()


		
	}
	else {
		window.alert("Input task to add to list");
		todoInput.focus()
	}
	

}


function deleteTodofun(event){
	const item = event.target;
	

	if (item.classList[0] == 'delete-btn') {
		if (item.parentElement.classList[1] != 'completed') {
			const deletefun = item.parentElement;
			// deletefun.disabled = true;
			deletefun.remove();
		}
	}

	if (item.classList[0] == 'check-btn'){
		const checkfun = item.parentElement;
		checkfun.classList.toggle('completed');	
		turndeleteoff = document.getElementsByClassName('delete-btn');
		console.log(checkfun.classList);
		turndeleteoff.disabled = true;
		// turndeleteoff.disabled = true;
	}


	
}
