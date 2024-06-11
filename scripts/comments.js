"use strict"

window.onload = () => {

    //get the form off the page
    const createCommentForm  = document.querySelector("#createCommentForm");

    //listen for the form submission and call createAComment
    createCommentForm.addEventListener("submit", createAComment)

    //doing the CRUD actions
   /*C*/ //createAComment();
   /*R*/ getComments();
   /*U*/ updateAComment();
   /*D*/ deleteAComment();

}

//getComments function
//CRUD: (R)ead comments
const getComments = async () => {

    //try catch for error handling
    try {

        //make a fetch (GET) request to get the comments from the API
        let response = await fetch("https://jsonplaceholder.typicode.com/comments",
            //redundant and not needed for a get request
            {
                method: "GET"
            }
        );

        //turn those comments in to something we can work with
        let comments = await response.json();

        //put the comments in the console
        console.log(comments);

    } catch (err) {

        //what the hell happend
        console.log("something went south")

    }

}

//method/function to create a comment
//CRUD: (C)reate a comment
const createAComment = async (event) => {

    //call preventDefault to keep the page from reloading
    event.preventDefault();

    console.log(event.target, "raw form data");

    //try catch for error handling
    try {

        //make a fetch (POST) request to create a comment in the API
        let response = await fetch("https://jsonplaceholder.typicode.com/comments",
            {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                //take the data from the form and build the body of the request
                body: JSON.stringify({
                    body: event.target.body.value,
                    email: event.target.email.value,
                    name: event.target.name.value,
                    postId: event.target.postId.value
                })
            }
        );
        //turn the response in to something we can work with
        let newComment = await response.json();

        //put the comments in the console
        console.log(newComment)

    } catch (err) {

        //what the hell happend
        console.log("something went south")

    }

}

//method/function to update a comment
//CRUD: (U)pdate a comment
const updateAComment = async () => {

    //try catch for error handling
    try {

        //make a fetch (PUT) request to update a comment in the API
        let response = await fetch("https://jsonplaceholder.typicode.com/comments/5",
            {
                method: "PUT",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    body: "this is the body",
                    email: "erics273@whocares.com",
                    name: "this is the name",
                    postId: 7
                })
            }
        );
        //turn those comments in to something we can work with
        let updatedComment = await response.json();

        //put the comments in the console
        console.log(updatedComment)

    } catch (err) {

        //what the hell happend
        console.log("something went south")

    }

}

//method/function to delete a comment
//CRUD: (D)elete a comment
const deleteAComment = async () => {

    //try catch for error handling
    try {

        //make a fetch (DELETE) request to remove a comment in the API
        let response = await fetch("https://jsonplaceholder.typicode.com/comments/5",
            {
                method: "DELETE"
            }
        );
        //turn those comments in to something we can work with
        let deletedComment = await response.json();

        //put the comments in the console
        console.log(deletedComment)

    } catch (err) {

        //what the hell happend
        console.log("something went south")

    }

}