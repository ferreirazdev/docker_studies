const express = require("express")

const app =  express()

const port = 3000

app.get("/", (req, res) => {
    res.send("Hello modafoca")
})

app.listen(port, () => {
    console.log("runnig on port " + port)
})