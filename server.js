const path = require("path");

const Express = require("express");
const Multer = require("multer");
const bodyParser = require("body-parser");

const app = new Express();

// This is essentially an express middleware builder for parsing request files
const upload = new Multer({ dest: path.join(__dirname, "./uploads") });

// Body parser will only parse request body (strings), not files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// upload.single("pdf") expects an uploaded file to be present in the "pdf" key of the request
app.post("/upload-pdf", upload.single("pdf"), (req, res) => {
    // When using upload.single(), req.file will always hold the extracted file data
    const file = req.file;

    if (file) {
        res.send(file);
    } else {
        res.send("did not receive file");
    }
});

app.listen(80, () => {
    console.log("Node PDF Server is now listening on :80");
});
