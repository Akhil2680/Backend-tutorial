const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jwt');

// app.get('/', (req, res) => {
//   res.cookie('name', 'akhil');
//   res.send('Hello World!');
// });

  //  app.get('/', function(req, res) {
  //   bcrypt.genSalt(10, function(err, salt) {
        
  //       bcrypt.hash('myPlaintextPassword', salt, function(err, hash){
  //         console.log('Hash:', hash);
  //       });
  //   });
  // });

  // app.get('/', function(req, res) {
    
        
  //       bcrypt.compare('myPlaintextPassword', " $2b$10$Kob4PseDA3qOUr5i1nnWyefKoc1c8p.Y2luy/j2yG3JJsLmNShCn", function(err, result){
  //         console.log('result:', result);
        
  //   });
  // });

app.get('/', (req, res) => {
  const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
  console.log('Token:', token);
  const decoded = jwt.verify(token, 'shhhhh');
  console.log('Decoded:', decoded);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

