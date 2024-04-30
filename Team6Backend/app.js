//setup is similar to how we use default tags in html
const express = require("express")
const Course = require("./models/courses")

const app = express();

//Middleware that parses HTTP requests with JSON body
app.use(express.json());

const router = express.Router()

//get all the courses in a database
router.get("/courses", async(req, res) =>{
    try{
        const courses = await Course.find({ })
        res.send(courses)
        console.log(courses)
    } 
    catch (err) {
        console.log(err)
    }
})
//all requests that usually use an api start with /api...  so the url would be localhost:3000
app.use("/api", router)
app.listen(3000);