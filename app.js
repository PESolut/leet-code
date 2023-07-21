// DEPENDACIES
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json())

// CONTROLLERS

// ROUTES
app.get("/", (req, res) => {
    res.status(200).send('Welcome to leet-code backend server.')
});

app.get("/not-found", (req, res) => {
    res.status(404).json({error: "page not found"})
})

app.get("*", (req, res)=> {
    res.redirect("/not-found")
})

// EXPORT
module.exports = app