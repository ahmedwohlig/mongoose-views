const express = require("express");
const mongoose = require("mongoose");
const User = require("./User");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb://localhost:27017/viewtest",
    console.log("mongoDB connected")
  );
}

const app = express();

app.get("/", async (req, res) => {
  let user = await User.find({});
  res.json(user);
});

let PORT = process.env.PORT || 3050;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
