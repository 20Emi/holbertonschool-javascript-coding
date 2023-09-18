#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';
let resultado = 0;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    for (const movies of data.results) {
      for (const characters of movies.characters) {
        if (characters.includes('people/18')) {
          resultado++;
        }
      }
    }
    console.log(resultado);
  }
});
