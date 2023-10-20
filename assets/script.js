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

function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const value = data.get('email');
  
    console.log({ value });
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);