const mongoose = require('mongoose');

// const mongoURI = "mongodb://127.0.0.1:27017/Socialmedia?directConnection=true";
const mongoURI=`mongodb+srv://bhagwatsolunke007:9959233110@cluster0.0z3d9mr.mongodb.net/snapbook`

const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
      resolve();
    })
    .catch((err) => {
      console.log(`Error connecting to MongoDB: ${err}`);
      reject(err);
    });
  });
};

module.exports = connectToMongo;
