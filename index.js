const app = require('express')();
let port = 6700

app.get('/', (req, res) => {
  res.send(`Item:`);
});



app.listen(port, () => {
  console.log(`Express.js backend is listening on port ${port}`);
});

module.exports = app;