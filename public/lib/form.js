


playerOne = document.querySelector("player1").value;
playerTwo = document.querySelector("player2").value;
start = document.querySelector("#start");
start.addEventListener("click",function(e){
// e.preventDefault();


// if (validate;
alert("it's working");}
// postData(`POST /sessions`, {answer: 42})
//   .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
//   .catch(error => console.error(error));
//   // debugger;

// function postData(url = '', data = {}) {
//   // Default options are marked with *
//     return fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, cors, *same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrer: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     })
//     .then(response => response.json()); // parses JSON response into native JavaScript objects 
// }
// }
);

const validate = ()=>{

  if (playerOne === playerTwo){
    alert("Idiot, you cant race yourself");
    return false;
  
  }
  else if(playerOne == null||playerTwo==""){
   alert ("player one cannot be empty!")
   return false;
  }
  else if (playerTwo == null||playerTwo==""){
    alert ("player two cannot be empty!")
    return false;
   }
  else{
    return true;
  }
}


