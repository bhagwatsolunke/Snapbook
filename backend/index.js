const connectToMongo = require('./db');
const express = require ("express")
const helmet = require ("helmet");
const morgan = require ("morgan");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts");
const app = express()
const port = 3000

async function startServer() {
  await connectToMongo();
 
  //middleware


app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));


 app.use("/api/users", userRoute);
 app.use("/api/auth", authRoute);
 app.use("/api/posts", postRoute);

  app.listen(port, () => {
    console.log(`Socialmedia Backend listening at http://localhost:${port}`);
  });
}

startServer();
