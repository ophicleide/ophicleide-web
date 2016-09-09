var express = require("express");
var morgan = require("morgan");
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

app.get("/", function(request, response) {
    response.render("index.html");
});

app.listen(8080, function() {
  console.log("ophicleide-web listening on :8080");
});
