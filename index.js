const express = require('express');
const app = express();
const port = 3000;

// Define the /hello route
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});



app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
  });
  
 // POST request to /user/:firstname/:lastname
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
