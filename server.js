const express = require("express");
const app = express();
const route=require('./routes/index');
app.use(express.json());


app.use('/api',route);

app.listen(5000, (error) => {
    if (error) {
        console.log("error occur", error);
    } else {
        console.log("app initialized successfully and running great");
    }
});