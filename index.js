const express = require("express");
const app = express();

var port = process.env.PORT || 8080;

const c = require("./controller");

app.get("/", c.hello);
app.get("/suma", c.suma);
app.get("/resta", c.resta);
app.get("/multiplicacion", c.multiplicacion);
app.get("/division", c.division);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
