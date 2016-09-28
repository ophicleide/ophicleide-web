var express = require("express");
var morgan = require("morgan");
var http = require("http");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();

app.use(morgan("combined"));
app.use(express.static("app"));
app.use("/js", express.static("node_modules/jquery/dist"));
app.use(express.static("node_modules/datatables/media"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use("/js", express.static("node_modules/angular"));
app.use("/js", express.static("node_modules/angular-route"));
app.use("/js", express.static("node_modules/angular-ui-bootstrap/dist"));
app.use("/js", express.static("node_modules/angular-animate"));
app.use(express.static("node_modules/patternfly/dist"));
app.use("/js", express.static("node_modules/angular-patternfly/dist"));
app.use(bodyParser.json());

var ophicleide_training_addr = process.env.OPHICLEIDE_TRAINING_ADDR || '127.0.0.1'; 
var ophicleide_training_port = process.env.OPHICLEIDE_TRAINING_PORT || '8080'; 
var ophicleide_debug = process.env.OPHICLEIDE_DEBUG || false;

app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/api/models", function(req, res) {
  var url = `http://${ophicleide_training_addr}:${ophicleide_training_port}/models`;
  request.get(url).pipe(res);
});

app.post("/api/models", function(req, res) {
  var url = `http://${ophicleide_training_addr}:${ophicleide_training_port}/models`;
  var data = req.body;
  data['callback'] = "not implemented";
  request.post(url, {body: data, json: true}).pipe(res);
});

app.delete("/api/models/:id", function(req, res) {
  var url = `http://${ophicleide_training_addr}:${ophicleide_training_port}/models/${req.params.id}`;
  request.delete(url).pipe(res);
});

app.get("/api/queries", function(req, res) {
  var url = `http://${ophicleide_training_addr}:${ophicleide_training_port}/queries`;
  request.get(url).pipe(res);
});

app.post("/api/queries", function(req, res) {
  var url = `http://${ophicleide_training_addr}:${ophicleide_training_port}/queries`;
  request.post(url, {body: req.body, json: true}).pipe(res);
});

app.listen(8080, function() {
  console.log("ophicleide-web listening on :8080");
});
