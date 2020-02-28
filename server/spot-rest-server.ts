var express = require('express');
const bodyParser = require('body-parser');
const app = express();

class Spot {
  constructor(
    public id: number,
    public title: string,
    public image: string,
    public description: string,
   
  ) { }
}

const spots: Spot[] = [
  new Spot(
    0,
    "zaragoza",
    "http://placehold.it/820x320",
    "fino"
  ),
  new Spot(
    1,
    "Madrid",
    "http://placehold.it/820x320",
    "fino"
  ),
  new Spot(
    2,
    "Corella",
    "http://placehold.it/820x320",
    "fino"
  ),
  new Spot(
    3,
    "Tudela",
    "http://placehold.it/820x320",
    "fino"
  ),
]

function getSpots(): any[] {
  return spots;
}

app.use(function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "0.0.0.0"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.post('/spots', bodyParser.json(), (req: any, res: any) => {

  let sNew = new Spot(
    spots.length + 1,
    req.body.title,
    req.body.images,
    req.body.description
  );
  spots.push(sNew);
  res.status(200).send({ 
    id: sNew.id,
    title: sNew.title,
    image: sNew.image,
    description: sNew.description
    
   });
 
})

app.get('/', (req: any, res: any) => {
  res.send('The URL of spots is http://localhost:8000/spots');
});

app.get('/spots', (req: any, res: any) => {
  res.json(getSpots());
});


function getSpotsById(spotId: number): any {
  let s: any;
  s = spots.find(s => s.id == spotId);
  return s;
}

app.get('/spots/:id', (req: any, res: any) => {
  res.json(getSpotsById(parseInt(req.params.id)));
});



function updateSpotsById(req:any, spotId: number): any {
  let s: any;
  s = spots.find(s => s.id == spotId);
  let index = spots.indexOf(s);

  s.title =  req.body.title,
  s.image =  req.body.image,
  s.description =  req.body.description
  
  spots[index] = s;
  return s;
}

app.put('/spots/:id', function (req:any, res:any) {
  res.json(updateSpotsById(req, parseInt(req.params.id)));
  res.send('Got a UPDATE request at /user');
});


function deleteSpotsById(spotId: number): any {
  let s: any;
  s = spots.find(s => s.id == spotId);
  let index = spots.indexOf(s);
  return s;
}

app.delete('/spots/:id', function (req:any, res:any) {
  res.json(deleteSpotsById(parseInt(req.params.id)));
  res.send('Got a DELETE request at /user');
});



const server = app.listen(8000, "localhost", () => {
  const { address, port } = server.address();

  console.log('Listening on %s %s', address, port);
});




