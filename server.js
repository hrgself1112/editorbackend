const express  = require("express")
const cors = require('cors');

const port = process.env.PORT || 7800
const app = express()


app.get("/" , (req ,res)=>{
res.send("hii")    
})


app.listen(port, () => {
    console.log(`Express.js backend is listening on port ${port}`);
  });
  