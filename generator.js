// script to generate the json files


import fs from 'fs';

var files = fs.readdirSync('./assets');

const generator = (arr) => {


  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    var ob = {
      "name": `Generated art piece nr: ${ arr[i].split('.')[0]}`,
      "symbol": "",
      "image": arr[i],
      "collection": {
        "name": "- Random Generated art NFT -",
        "family": "Random Generated art NFT"
     },
      "properties": {
        "files": [
          {
            "uri": arr[i],
            "type": "image/png"
          }
        ],
        "creators": [
          {
            "address": "5bFJ1QdRxM6PGDQZyQ4Npfs8h22LEB9z7kMGfK4WtE5t",
            "share": 100
          }
        ]
      }
    }

    var dictstring = JSON.stringify(ob);
    let name = 'assets/'+ arr[i].split('.')[0] + '.json'

    fs.writeFile(name, dictstring, function(err, result) {
      if(err) console.log('error', err);
  });

  }
}

generator(files)