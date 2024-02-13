const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["POST", "GET"],
  credential: true,
  exposedHeaders: ["Access-Control-Allow-Origin"],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
