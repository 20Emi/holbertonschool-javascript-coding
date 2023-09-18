#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    const counts = {};

    for (const i of data) {
      if (i.completed === true) {
        //  si esta completa se obtiene el valor del userid
        const userId = i.userId;
        // si existe un registro se incrementa en 1 sino se inicializa en 0
        counts[`${userId}`] = (counts[`${userId}`] || 0) + 1;
      }
    }
    console.log(counts);
  }
});
