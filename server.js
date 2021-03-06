const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://tdj03001:101%Sure!!@ds213529.mlab.com:13529/heroku_f83j55v9", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/apiRoutes.js"))
app.use(require("./routes/htmlRoutes.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});