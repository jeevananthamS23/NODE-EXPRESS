const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

app.post("/first", (req, res) => {
    console.log("message from the first user", req.body.name);
    res.send("success");
});


app.listen(port, (error) => {
    if (error) {
        console.log("error occur", error);
    } else {
        console.log("app initialized successfully and running great");
    }
});