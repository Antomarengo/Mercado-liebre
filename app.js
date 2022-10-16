const express = require("express")
const app = express()

const path = require("path")
const publicPath = path.resolve('public')

app.use(express.static(publicPath))

const puerto = 2727 
app.listen(puerto, ()=> console.log("Servidor levantado"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
})
app.post("/register", (req, res) => {
    res.sendFile(path.resolve('views/register.html'))
})
app.post("/login", (req, res) => {
    res.sendFile(path.resolve('views/login.html'))
})