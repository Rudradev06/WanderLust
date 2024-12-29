const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
// const faker = require("faker");

main()
  .then((res) => console.log("Connected to Database"))
  .catch((err) => console.log(`Error Detected - ${err}`));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6712b52687ecfc45d77d5f28",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data inserted successfully");
};
initDB();