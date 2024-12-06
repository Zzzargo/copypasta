const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
require("./database");

const app = express();
app.use(express.json());

const User = require("./models/User");
const Recipe = require("./models/Recipe");

// Allow cross-origin requests
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// User registration (add new user)
app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
      phone: req.body.phone,
    });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// User login (check)
app.post("/users/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare passwords
    const Match = await bcrypt.compare(req.body.password, user.password);
    if (!Match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Successful login
    res.status(200).json({
      message: "Login successful",
      username: user.username,
      phone: user.phone,
      email: user.email,
      college_group: user.college_group,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server side error", error: error.message });
  }
});

// Remove a user
app.delete("/users", async (req, res) => {
  const { username } = req.body;

  try {
    const result = await User.findOneAndDelete({ username });

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: `User "${username}" has been deleted` });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all recipes
app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new recipe
app.post("/recipes", async (req, res) => {
  try {
    const recipe = new Recipe({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    });
    await recipe.save();
    res.status(201).send("Recipe added successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Remove a recipe
app.delete("/recipes", async (req, res) => {
  const { title } = req.body;

  try {
    const result = await Recipe.findOneAndDelete({ title });

    if (!result) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res
      .status(200)
      .json({ message: `Recipe with title "${title}" has been deleted` });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
