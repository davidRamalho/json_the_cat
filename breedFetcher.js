const request = require('request');
//https://api.thecatapi.com/v1/breeds/search?q=sib
const breedNameInput = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search' + '?q=' + breedNameInput, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`Breed ${breedNameInput} not found.`);
    } else {
      console.log(data[0].description);
    }
  } else {
    console.log('Oops! Something went wrong! ', error);
  }
});
