#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const file = process.argv[3];
const fs = require('fs');

request(url, function (error, request, body) {
  if (error) {
    console.error(error);
  }
  fs.writeFile(file, body, 'utf-8', (error) => {
    if (error) {
      console.error(error);
    }
  });
});
