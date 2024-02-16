const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://test-api-3yrd.onrender.com"],
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

app.post("/url", async (req, res) => {
  const { name, age, location } = req.body;
  try {
    console.log(
      `This data is received from the backend from the frontend interaction ${name} ${age} and ${location}`
    );
    res.json([name, age, location]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

app.post("/user", async (req, res) =>{
  const { name, age, location } = req.body
  try {
    console.log(`my name is ${name} and i am ${age} living in ${location}`)
    res.json(`my name is ${name} and i am ${age} living in ${location}`)
  } catch (error) {
    console.error(error)
  }
})
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
