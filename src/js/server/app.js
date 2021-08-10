import express from "express"
import bookmarkRoutes from "./routes/bookmarks"
import * as BodyParser from "body-parser"

const app = express()
import hbs from "express-handlebars"

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

app.engine("hbs", hbs({ extname: "hbs" }))
app.set("view engine", "hbs")
app.use(express.urlencoded({ extended: true }))

require("dotenv").config({})

app.use("/bookmark", bookmarkRoutes)
app.get("/", (req, res) => {
  res.send("Hello Knex")
})

// const PORT = process.env.PORT
// app.listen(PORT, () => {
//   console.log(`app is listening on PORT 3005`)
// })

// Setup Server
const port = 3005;

// Spin up the server
const server = app.listen(port, listening);

// Function for the Server to run
function listening(){
    console.log(`Server is running on localhost: ${port}`);
}