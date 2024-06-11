"use strict"

window.onload = () => {

    //go get theusers on load of the DOM
    getUsers()

}

//function to get and display the users
function getUsers(){

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response)=>response.json())
        .then((users)=>{

            generateTableRows(users)

        })
        .catch((error)=>console.log("sh*t be broken. no users!"));

}

//helper function to build table rows
function generateTableRows(users){

    let tbody = document.querySelector("#userTbody");

    for(let i = 0; i < users.length; i++){

        // let row = tbody.insertRow();

        // let cell1 = row.insertCell();
        // cell1.innerHTML = users[i].id

        // let cell2 = row.insertCell();
        // cell2.innerHTML = users[i].name

        // let cell3 = row.insertCell();
        // cell3.innerHTML = users[i].username

        // let cell4 = row.insertCell();
        // cell4.innerHTML = users[i].email

        //not as safe but maybe a bit easier to see what is actually happening
        tbody.innerHTML += `
            <tr>
                <td>${users[i].id}</td>
                <td>${users[i].name}</td>
                <td>${users[i].username}</td>
                <td>${users[i].email}</td>
            </tr>
        `

    }
   

}