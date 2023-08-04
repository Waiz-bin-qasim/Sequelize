import express  from "express"
import employeeRoute from "./Routes/Employee.Route.js"

const app = express()
const port = 3000

app.use(express.json())
app.use("/employee",employeeRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))