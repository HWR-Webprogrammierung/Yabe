const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"));
app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get('/table', (_, res) => {
    res.sendFile(path.join(__dirname + "/table.html"));
});

app.listen(8080, () => {
    console.log("Running on port 8080");
});
