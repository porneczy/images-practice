const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 9000;

const pathtoFrontend = path.join(`${__dirname}/../frontend`)


app.use(express.json())
app.use('/pub', express.static(`${pathtoFrontend}/public`))
app.use('/dist', express.static(`${pathtoFrontend}/dist`))


app.get('/', (req, res, next) => {
    res.sendFile(path.join(`${pathtoFrontend}/public/index.html`));
});
app.get("/image-list", (req, res) => {
	res.sendFile(path.join(`${pathtoFrontend}/data.json`));
})



app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})