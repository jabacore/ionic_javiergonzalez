var express = require('express');
const bodyParser = require('body-parser');
const app = express();

class Spot {
  constructor(
    public id: number,
    public title: string,
    public images: string
   
  ) { }
}

const spots: Spot[] = [
  new Spot(
    0,
    "zaragoza",
    "http://placehold.it/820x320"
  ),
  new Spot(
    1,
    "Madrid",
    "http://placehold.it/820x320"
  ),
  new Spot(
    2,
    "Corella",
    "http://placehold.it/820x320"
  ),
  new Product(
    3,
    "Fourth Product",
    84.99,
    3.9,
    "This is a short description of the Fourth Product",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ["hardware"],
    "http://placehold.it/820x320"
  ),
  new Product(
    4,
    "Fifth Product",
    94.99,
    5,
    "This is a short description of the Fourth Product",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ["electronics", "hardware"],
    "http://placehold.it/820x320"
  ),
  new Product(
    5,
    "Sixth Product",
    54.99,
    4.6,
    "This is a short description of the Fourth Product",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ["books"],
    "http://placehold.it/820x320"
  )
]





function getProducts(): any[] {
  return products;
}

app.use(function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
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

app.post('/products', bodyParser.json(), (req: any, res: any) => {

  let pNew = new Product(
    products.length + 1,
    req.body.title,
    req.body.price,
    req.body.rating,
    req.body.shortDescription,
    req.body.description,
    req.body.categories,
    req.body.images
  );
  products.push(pNew);
  res.status(200).send({ 
    id: pNew.id,
    title: pNew.title,
    price: pNew.price,
    rating: pNew.rating,
    shortDescription: pNew.shortDescription,
    description: pNew.description,
    categories: pNew.categories,
    images: pNew.images
   });
 
})

app.get('/', (req: any, res: any) => {
  res.send('The URL of products is http://localhost:8000/products');
});

app.get('/products', (req: any, res: any) => {
  res.json(getProducts());
});


function getProductsById(productId: number): any {
  let p: any;
  p = products.find(p => p.id == productId);
  return p;
}

app.get('/products/:id', (req: any, res: any) => {
  res.json(getProductsById(parseInt(req.params.id)));
});



function updateProductsById(req:any, productId: number): any {
  let p: any;
  p = products.find(p => p.id == productId);
  let index = products.indexOf(p);

  p.title =  req.body.title,
  p.price =  req.body.price,
  p.rating =  req.body.rating,
  p.shortDescription =  req.body.shortDescription,
  p.description =  req.body.description,
  p.categories =  req.body.categories,
  p.images =  req.body.images
  
  products[index] = p;
  return p;
}

app.put('/products/:id', function (req:any, res:any) {
  res.json(updateProductsById(req, parseInt(req.params.id)));
  res.send('Got a UPDATE request at /user');
});


function deleteProductsById(productId: number): any {
  let p: any;
  p = products.find(p => p.id == productId);
  let index = products.indexOf(p);
  delete products[index];
  return p;
}

app.delete('/products/:id', function (req:any, res:any) {
  res.json(deleteProductsById(parseInt(req.params.id)));
  res.send('Got a DELETE request at /user');
});



const server = app.listen(8000, "localhost", () => {
  const { address, port } = server.address();

  console.log('Listening on %s %s', address, port);
});




