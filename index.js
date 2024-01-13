const { MongoClient, ServerApiVersion } = require('mongodb');

const app = require('express')();
require("dotenv").config()

const port = process.env.PORT
const registerRouter = require("./routes/resiter")

const client = new MongoClient(process.env.DBURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
 async function dbConnect() {

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
dbConnect().catch(console.dir);



app.use("/register" , registerRouter)


app.get("/" , (req ,res )=>{
  res.send("you are in homepage")
})

app.listen(port, () => {
  console.log(`Express.js backend is listening on port ${port}`);
});
