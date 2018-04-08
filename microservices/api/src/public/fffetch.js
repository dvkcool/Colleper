function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://data.alias14.hasura-app.io/v1/query';
fetch(url, {
  method: "post",
  body:
  {
      "type": "select",
      "args": {
          "table": "events",
          "columns": [
              "*"
          ]
      }
  }



})
.then((resp) => resp.json())

.then((data) => {
  console.log(data);
  let authors = data;
   authors.forEach(function(author) {
    let li = createNode('li'),

        // img = createNode('img'),
       span = createNode('span');
  //  img.src = author.picture.medium;
     span.innerHTML = `${author.eventname} ${author.eventdate}`;
    //append(li, img);
     append(li, span);
    append(ul, li);
    console.log(author.eventname);
  })
})
.catch(function(error) {
  console.log(error);
});
