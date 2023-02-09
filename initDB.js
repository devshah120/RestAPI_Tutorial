const mongoose = require("mongoose");
module.exports = ()=>{
    mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:admin@demo.56us5gq.mongodb.net/Restapi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => console.log(err.message));

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Connection Disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("MongoDB Connection Disconnected Due to Some Problem");
    process.exit(0);
  });
});
}