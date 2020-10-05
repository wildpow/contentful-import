require('dotenv').config();
var contentful = require('contentful');

var client = contentful.createClient({
  space: process.env.SPACEID,
  accessToken: process.env.ACCESSTOKEN,
});

const csv = require('csvtojson');

// Test
csv()
  .fromFile('./test.csv')
  .then(jsonObject => {
    console.log(jsonObject);
  });
client
  .getEntries()
  .then(entries => {
    entries.items.forEach(entry => console.log(entry));
  })
  .catch(err => console.log(err));
