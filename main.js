require('dotenv').config();
var contentful = require('contentful');
console.log(process.env);
var client = contentful.createClient({
  space: process.env.SPACEID,
  accessToken: process.env.ACCESSTOKEN,
});

// Test

client
  .getEntries()
  .then(entries => {
    entries.items.forEach(entry => console.log(entry));
  })
  .catch(err => console.log(err));
