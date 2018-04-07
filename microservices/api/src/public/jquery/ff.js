
function fettch(){

  var a = document.getElementById('em').value;
  var b = document.getElementById('pass').value;
  console.log("a: "+ a+ " B: "+ b);
  fetch("https://auth.controversial68.hasura-app.io/v1/login",{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
  "provider": "username",
  "data":{
  "username":""+a,
  "password":""+b
  
  }
  })
  }
  
  )
  .then((res) => res.json())
  .then((resp) => {
    console.log(resp);
    if(resp.code=="invalid-creds"){
      alert("Invalid login");
    }
    else{
      window.location = "t2.html";
    }
  }
  )
  
  
  
  
  }
  