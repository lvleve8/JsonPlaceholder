"use strict"

window.onload = () => {

    let userInput = document.querySelector("#todoId");
    let theButton = document.querySelector("#theButton");

    theButton.addEventListener("click", (event) => showInfo(event, userInput.value))

}

function showInfo(event, todoId){

    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then((response)=>response.json())
        .then((todo)=>{

            displayTodo(todo)

        })
        .catch((error)=>console.log("sh*t be broken"));

}

function displayTodo(todo){

    let resultsDiv = document.querySelector("#results");

    if(Array.isArray(todo)){
        resultsDiv.innerHTML = `
        <div>Please enter a valid todo id</div>
    `;

    }else{
        resultsDiv.innerHTML = `
        <div>Title: ${todo.title}</div>
    `;

    }
   

}