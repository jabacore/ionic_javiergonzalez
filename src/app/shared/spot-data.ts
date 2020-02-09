import { InMemoryDbService } from 'angular-in-memory-web-api';

export class SpotData implements InMemoryDbService {

  createDb() {
    let spots = [
      {
        "id": 0,
        "title": "pamplona",
        "description": "nuevo skatepark.",
        "image": "http://placehold.it/820x320"
      },
      {
        "id": 1,
        "title": "zaragoza",
        "description": "nuevo skatepark en zaragoza",
        "image": "http://placehold.it/820x320"
      },
     
    ];
    return { spots: spots };
  }
}
