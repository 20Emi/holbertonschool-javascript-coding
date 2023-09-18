#!/usr/bin/node

const fs = require('fs');
const file = process.argv[2];
const contenuto = process.argv[3];

fs.writeFile(file, contenuto, 'utf-8', (error) => {
  if (error) {
    console.error(error);
  }
});
