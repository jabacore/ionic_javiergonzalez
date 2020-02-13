"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Spot = /** @class */ (function () {
    function Spot(id, title, images ,description) {
        this.id = id;
        this.title = title;
        this.images = images;
        this.description = description;       
    }
    return Spot;
}());
var spots = [
    new Spot(0, "Madrid","http://placehold.it/820x320","sisisisi"),
    new Spot(1, "Zaragoza","http://placehold.it/820x320","sisisisi"),
    new Spot(2, "Mallorca","http://placehold.it/820x320","sisisisi"),
];
function getSpots() {
    return spots;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/spots', bodyParser.json(), function (req, res) {
    var sNew = new Spot(spots.length + 1, req.body.title,req.body.images, req.body.description);
    spots.push(sNew);
    res.status(200).send({
        id: sNew.id,
        title: sNew.title,
        images: sNew.images,
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
        s.images = req.body.images,
        s.description = req.body.description;
        
    products[index] = s;
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
