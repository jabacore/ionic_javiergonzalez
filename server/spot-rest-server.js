"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Spot = /** @class */ (function () {
    function Spot(id, title, image ,description) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.description = description;       
    }
    return Spot;
}());
var spots = [
    new Spot(0, "menorca","http://www.inseguridad.org/sites/default/files/guadalcacin-4.jpg","sisisisi"),
    new Spot(1, "Zaragoza","http://www.inseguridad.org/sites/default/files/guadalcacin-4.jpg","sisisisi"),
    new Spot(2, "Mallorca","http://www.inseguridad.org/sites/default/files/guadalcacin-4.jpg","sisisisi"),
];
function getSpots() {
    return spots;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100"); /*"http://localhost:4200" */   // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/spots', bodyParser.json(), function (req, res) {
    var sNew = new Spot(spots.length + 1, req.body.title,req.body.image, req.body.description);
    spots.push(sNew);
    res.status(200).send({
        id: sNew.id,
        title: sNew.title,
        image: sNew.image,
        description: sNew.description       
    });
});
app.get('/', function (req, res) {
    res.send('The URL of spots is http://localhost:8000/spots');
});
app.get('/spots', function (req, res) {
    res.json(getSpots());
});
function getSpotsById(spotId) {
    var s;
    s = spots.find(function (s) { return s.id == spotId; });
    return s;
}
app.get('/spots/:id', function (req, res) {
    res.json(getSpotsById(parseInt(req.params.id)));
});
function updateSpotsById(req, spotId) {
    var s;
    s = spots.find(function (s) { return s.id == spotId; });
    var index = spots.indexOf(s);
        s.title = req.body.title,
        s.image = req.body.image,
        s.description = req.body.description;
        
    spots[index] = s;
    return s;
}
app.put('/spots/:id', function (req, res) {
    res.json(updateSpotsById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE request at /user');
});
function deleteSpotsById(spotId) {
    var s;
    s = spots.find(function (s) { return s.id == spotId; });
    var index = spots.indexOf(s);
    delete spots[index];
    return s;
}
app.delete('/spots/:id', function (req, res) {
    res.json(deleteSpotsById(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
