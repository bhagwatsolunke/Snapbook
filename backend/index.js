const connectToMongo = require('./db');
const express = require ("express")
const helmet = require ("helmet");
const morgan = require ("morgan");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts");
const app = express()
const port = 4000
const multer = require("multer")
const path = require("path");

async function startServer() {
  await connectToMongo();
 
  app.use("/images", express.static(path.join(__dirname, "public/images")));
  //middleware


app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});


const upload = multer({storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
})


 app.use("/api/users", userRoute);
 app.use("/api/auth", authRoute);
 app.use("/api/posts", postRoute);

  app.listen(port, () => {
    console.log(`Socialmedia Backend listening at http://localhost:${port}`);
  });
}

startServer();
