
const start = document.getElementById("start");
start.addEventListener("click",validate);

function validate(e){
  e.preventDefault();

  var playerOne = document.getElementsByName("player1")[0].value;
  var playerTwo = document.getElementsByName("player2")[0].value;
 


  if (playerOne =="" && playerTwo==""){
    alert("please enter your name");
    // console.log("condition 1 loaded")
    return false;
  }
  else if (playerOne === playerTwo){
    // console.log("conditon two loaded")
    alert("You cant race yourself");
    return false;
  
  }
  else if(playerOne == null||playerOne==""){
   alert ("player one cannot be empty!")
   return false;
  }
  else if (playerTwo == null||playerTwo==""){
    alert ("player two cannot be empty!")
    return false;
   }
  else {
    let data = {"player1":playerOne,"player2":playerTwo};
    redirectPost('/start',data);
  }

};


function redirectPost(url, data) {
  var form = document.createElement('form');
  document.body.appendChild(form);
  form.method = 'post';
  form.action = url;
  for (var name in data) {
      var player = document.createElement('input');      
      player.type = 'hidden';
      player.name = name;
      player.value = data[name];
      form.appendChild(player);
  }
  form.submit();
}



