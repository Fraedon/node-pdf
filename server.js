const Express = require("express");
const path = require("path");

const app = new Express();

app.get("/", (req, res) => {
    res.download(path.join(__dirname, "./file.pdf"));
});

app.listen(3000, () => {
    console.log("Node PDF Server is now listening on :3000");
});
