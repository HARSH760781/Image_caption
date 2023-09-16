const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./model/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

mongoose.connect(
  "mongodb+srv://hjds760781:12345yuiop@cluster0.i6kcvj3.mongodb.net/user?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", async (req, res) => {
  const data = req.body;
  const { email, password } = data;
  if (!email || !password) {
    res.status(400).send({ message: "Please enter all fields" });
  } else {
    const userdata = await User.findOne({ email });
    if (userdata && password === userdata.password) {
      res.status(200).send(userdata);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  }
});
app.post("/signup", async (req, res) => {
  const data = req.body;
  const { name, email, password, confirmPassword } = data;
  // console.log(name + " " + email + " " + password + " " + confirmPassword);
  if (!name || !email || !password || !confirmPassword) {
    // console.log(data);
    res.status(400).send({ message: "Please enter all fields" });
  } else {
    if (!(password === confirmPassword)) {
      res.status(401).send({ message: "Passwords do not match" });
    } else {
      try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          res.status(409).send({ message: "Email already exists" });
        } else {
          const newUser = new User({ name, email, password, confirmPassword });
          await newUser.save();
          res.status(201).send({ message: "User registered successfully" });
        }
      } catch (error) {
        console.error("Error while registering user:", error);
        res.status(500).send({ message: "Internal server error" });
      }
    }
  }
});
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
