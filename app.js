const express = require("express")
const app = express()

const path = require("path")
const publicPath = path.resolve('public')

app.use(express.static(publicPath))

const port = process.env.PORT || 3001;
app.listen(port, () =>console.log("Servidor corriendo en el puerto ${port}"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
})
app.get("/registro", (req, res) => {
    res.sendFile(path.resolve('views/register.html'))
})
app.post("/", (req, res) => {
    res.sendFile(path.resolve('views/register.html'))
})
app.get("/login", (req, res) => {
    res.sendFile(path.resolve('views/login.html'))
})
app.post("/", (req, res) => {
    res.sendFile(path.resolve('views/login.html'))
})




