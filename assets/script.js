document.getElementById("newUserButton").addEventListener("click",newUser );
document.getElementById("existingUser").addEventListener("click",existingUser );
document.getElementById("existingRedirect").addEventListener("click",existingUser);

function newUser(){
    window.location.href = "newUser.html";
}

function existingUser(){
    window.location.href = "exisitingUser.html";
}

//new user data function - needed