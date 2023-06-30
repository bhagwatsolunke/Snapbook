const connectToMongo = require('./db');
const express = require ("express")
const helmet = require ("helmet");
const morgan = require ("morgan");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversation");
const messagesRoute = require("./routes/messages");
const app = express()
const port = 4000
const multer = require("multer")
const path = require("path");

async function startServer() {
  await connectToMongo();
 
  app.use("/", express.static(path.join(__dirname, "public")));
  //middleware


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public"));
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, req.body.name);
  },
});


const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"),(req,res)=>{
  try {
    console.log("File uploded successfully")
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
    console.log("File  not uploded ")

  }
})


 app.use("/api/users", userRoute);
 app.use("/api/auth", authRoute);
 app.use("/api/posts", postRoute);
 app.use("/api/conversations", conversationRoute);
 app.use("/api/messages",messagesRoute);
  app.listen(port, () => {
    console.log(`Socialmedia Backend listening at http://localhost:${port}`);
  });
}

startServer();
