const express = require("express");
const app = express();
const fetch = require("node-fetch");
const helmet = require("helmet");
const path = require("path");

app.use(helmet.frameguard());

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//GET method for music
app.get("/music/:query/:pageNumber", async (req, res) => {
    const query = req.params.query;
    const pageNumber = req.params.pageNumber;

    const api_url = `https://itunes.apple.com/search?term=${query}&media=music&${pageNumber}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json);
});

//GET method for music videos
app.get("/videos/:query/:pageNumber", async (req, res) => {
    const query = req.params.query;
    const pageNumber = req.params.pageNumber;

    const api_url = `https://itunes.apple.com/search?term=${query}&media=musicVideo&${pageNumber}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json);
});

//GET method for movies
app.get("/movies/:query/:pageNumber", async (req, res) => {
    const query = req.params.query;
    const pageNumber = req.params.pageNumber;

    const api_url = `https://itunes.apple.com/search?term=${query}&media=movie&${pageNumber}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json);
});

//GET method for audioBook
app.get("/audiobooks/:query/:pageNumber", async (req, res) => {
    const query = req.params.query;
    const pageNumber = req.params.pageNumber;

    const api_url = `https://itunes.apple.com/search?term=${query}&media=audiobook&${pageNumber}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.json(json);
});

//Report errors
app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send("Error");
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("/*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});