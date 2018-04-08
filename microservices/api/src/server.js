var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var alertnode = require('alert-node');
const vision = require('@google-cloud/vision');
require('request-debug')(request);
var fetch =  require('fetch');
/*var hasuraExamplesRouter = require('./hasuraExamples');

var server = require('http').Server(app);

router.use(morgan('dev'));

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	helpers: {
	    toJSON : function(object) {
	      return JSON.stringify(object, null, 4);
	    }
  	}
	})
);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', hasuraExamplesRouter);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
*/
app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	helpers: {
	    toJSON : function(object) {
	      return JSON.stringify(object, null, 4);
	    }
  	}
	})
);
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));
app.get('/picture', function(req,res){
  const client = new vision.ImageAnnotatorClient({
  projectId: 'gmailsignin-1522408964161',
  keyFilename: './gmailsignin-f6c00b9c7788.json',
  });
  client
  .labelDetection('https://filestore.alias14.hasura-app.io/v1/file/361d8829-93a3-4e9b-9c2b-eb537d0a1640')
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
});
app.post('/eventadd', function(req, res){
  var selectOptions = {
    url: "https://data.alias14.hasura-app.io/v1/query",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "type": "insert",
      "args": {
          "table": "events",
          "objects": [
              {
                  "eventname": req.body.eventname,
                  "eventdate": req.body.eventdate
              }
          ]
      }
    })
  }
  console.log("Request - body"+req);
  request(selectOptions, function(error, response, body) {
    if (error) {
        console.log('Error from select request: ');
        console.log(error)
        res.status(500).json({
          'error': error,
          'message': 'Select request failed'
        });
    }
    console.log("response: "+ response);
    alertnode('Thank you, your event has been added');
    res.redirect("/index.html");
  })
});
app.post('/tcksubmit', function(req, res){
  var selectOptions = {
    url: "https://data.alias14.hasura-app.io/v1/query",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "type": "insert",
      "args": {
          "table": "techtickets",
          "objects": [
              {
                  "title": req.body.title,
                  "descr": req.body.descr,
                  "email": req.body.mail,
                  "mobile": req.body.mobile
              }
          ]
      }
    })
  }
  console.log("Request - body"+req);
  request(selectOptions, function(error, response, body) {
    if (error) {
        console.log('Error from select request: ');
        console.log(error)
        res.status(500).json({
          'error': error,
          'message': 'Select request failed'
        });
    }
    console.log("response: "+ response);

    var selec = {
      url: "https://data.alias14.hasura-app.io/v1/query",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "type": "select",
          "args": {
              "table": "techtickets",
              "columns": [
                  "ticketid"
              ]
          }
      })
    }
    request(selec, function(er, rp, by) {
      if (er) {
          console.log('Error from select request: ');
          console.log(er)
          res.status(500).json({
            'error': er,
            'message': 'Select request failed'
          });
      }
      console.log("response: "+ rp);
      var selectOpt = {
        url: "https://notify.alias14.hasura-app.io/v1/send/email",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "to": req.body.mail,
          "from": "admin@colleper.in",
          "fromName": "Colleper Admin",
          "sub": "Regarding support ticket on Colleper",
          "text": "This mail is to confirm that you have succesfully applied for a support ticket with ticket id:"+rp.id[0],
          "html": "<p>This mail is to confirm that you have succesfully applied for a support ticket with ticket id:</p>"
      })
    };
      request(selectOpt, function(er, rpr, by) {
        if (error) {
            console.log('Error from select request: ');
            console.log(er)
            res.status(500).json({
              'error': er,
              'message': 'Select request failed'
            });
        }
        console.log("response: "+ rpr);
        alertnode('Thank you, your ticket has been generated, a copy has been mailed to you too! :)');

        res.redirect("/index.html");
      })
    })


  })
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
