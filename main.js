const fs = require('fs');

getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("input.dat", "utf-8", (err, data) => {
      if (err) reject('Error getting file');
      else resolve(data);
    })
  })
}

getData().then((data) => {
  console.log('got file!', data);
}, (error) => {
  console.log('Error getting file');
})
