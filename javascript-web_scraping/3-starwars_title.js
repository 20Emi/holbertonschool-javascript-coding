#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/'

request(url + id, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
