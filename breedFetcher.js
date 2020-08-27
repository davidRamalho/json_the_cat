const request = require('request');
//https://api.thecatapi.com/v1/breeds/search?q=sib

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (!data[0]) {
        callback(`Breed ${breedName} not found.`, null);
      } else {
        callback(null, data[0].description);
      }
    } else {
      callback(`Oops! Something went wrong! ${error}`, null);
    }
  });
  
};

module.exports = { fetchBreedDescription };