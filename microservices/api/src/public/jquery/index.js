

	function gettext(){
fetch('https://data.alias14.hasura-app.io/v1/query',
	{
  method: 'POST',
   headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "type": "select",
    "args": {
        "table": "events",
        "columns": [
            "*"
        ],
    }
})
  })
  /*
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
.then((response) => {
	console.log(response);
})
.then((res) => res.json())

.then((data) => {
 let output = '<h1>POSTS</h1>';
 */
 /*
 data.forEach(function(post){
 	output += `${post.guid}<br>
              ${post.favoriteFruit}<hr>

 	`;
 })*/


.then((res) => res.json())

.then((data) => {
 let output = '<h1>  </h1> <ul>';
 data.forEach(function(post){
output += `
<li>
<h4>${post.eventname}</h4>
<h6>${post.eventdate}</h6>
</li>
`;

 });

document.getElementById('ecran').innerHTML = output;
});


	}

gettext();
