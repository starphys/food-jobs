const path = require("path");
const express = require("express");
const {getListings} = require("./cloudant-util.js");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    getListings().then(listings => {res.json(listings)})
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
