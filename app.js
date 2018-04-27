const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



app.get("/", function(req, res) {
    res.send(JSON.stringify(req.query, null, 2));
});

app.listen(3000, function() {
    console.log("It works!");
});
