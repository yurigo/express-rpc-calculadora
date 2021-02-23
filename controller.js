function hello(req, res){
    const { name, version, description, author, license } = require("./package.json")
    res.json({ name, version, description, author, license });
}

function suma(req, res){
    const result = parseFloat(req.query.a.replace(",", ".")) + parseFloat(req.query.b.replace(",","."))
    res.json({ result })
}

function resta(req, res){
    const result = parseFloat(req.query.a.replace(",", ".")) - parseFloat(req.query.b.replace(",","."))
    res.json({ result })
}

function multiplicacion(req, res){
    const result = parseFloat(req.query.a.replace(",", ".")) * parseFloat(req.query.b.replace(",","."))
    res.json({ result })
}

function division(req, res){
    const result = parseFloat(req.query.a.replace(",", ".")) / parseFloat(req.query.b.replace(",","."))
    res.json({ result })
}

module.exports = { hello, suma, resta, multiplicacion, division }