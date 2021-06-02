const express = require("express");
const app = express();

app.get("/public/bundle.js", (req, res) => {
    res.sendFile(__dirname + "/bundle.js");
});

app.get("/**", (req, res) => {
    res.sendFile((__dirname + "/index.html"))
});

app.listen(3000, () => {
    console.log("start");
})