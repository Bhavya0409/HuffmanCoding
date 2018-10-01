const fs = require('fs');
const VALID_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';

getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("input.dat", "utf-8", (err, data) => {
      if (err) {
        reject('Error getting file')
      }
      else {
        let filteredInput = ''
        const lowercase = data.trim().toLowerCase();
        for (let i = 0; i < lowercase.length; i++) {
          if (VALID_CHARACTERS.indexOf(lowercase.charAt(i)) !== -1) {
            filteredInput += lowercase.charAt(i);
          }
        }
        resolve(filteredInput);
      }
    })
  })
}

getData().then((data) => {
  const freq = {}
  for (let i = 0; i < data.length; i++) {
    const char = data.charAt(i);
    if (freq.hasOwnProperty(char)) {
      freq[char] = freq[char] + 1
    } else {
      freq[char] = 1
    }
  }

  const freqSorted = Object.keys(freq).sort((a,b) => {
    return freq[b]-freq[a];
  })
  console.log(freq);
  console.log('freqSorted', freqSorted);
}, (error) => {
  console.log('Error getting file');
})
