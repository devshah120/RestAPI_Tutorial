const mongoose = require("mongoose");
module.exports = ()=>{
    mongoose.set("strictQuery", false);
mongoose
  .connect(
    process.env.MONGODB_URI
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