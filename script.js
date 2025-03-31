//your code here
const inputE1=document.getElementById("newTodoInput");
const buttonE1=document.getElementById("addTodoBtn");
const olE1=document.getElementById("todoList");
buttonE1.addEventListener('click',()=>{
	let li=document.createElement("li");
	
	if(inputE1.value!==""){
		li.textContent=inputE1.value;
		olE1.appendChild(li);
		inputE1.value="";
	}
	
})

