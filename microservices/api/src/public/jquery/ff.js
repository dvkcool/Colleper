
function fettch(){

  var a = document.getElementById('em').value;
  var b = document.getElementById('pass').value;
  fetch("https://auth.alias14.hasura-app.io/v1/login",{
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

    if(resp.code=="invalid-creds"){
      alert("Invalid login");
    }
    else{
	var name = resp.username;
        alert("roles: "+ resp.hasura_roles[0]);
  window.location="index.html";
}
 })

  }
