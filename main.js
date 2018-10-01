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
