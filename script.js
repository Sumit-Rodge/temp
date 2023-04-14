const inputField = document.querySelector("#inputField")
const addTodo = document.querySelector("#addToDo")
const toDoContainer= document.querySelector("#toDoContainer")

addTodo.addEventListener( 'click' , () => {

    if(inputField.value == '') return

    const listItem = document.createElement('li');
    listItem.innerText=inputField.value 
    toDoContainer.appendChild(listItem);
    inputField.value=''

    const done = document.createElement('button');
    done.classList.add("float-right");
    done.innerText="Done";
    listItem.appendChild(done);

    done.addEventListener( 'click' , () => {
        listItem.style.textDecoration = "line-through";

    })
    
    listItem.addEventListener( 'dblclick' , () => {
        toDoContainer.removeChild(listItem)
    })
})


