//setup is similar to how we use default tags in html
const express = require("express")
const Course = require("./models/course")
var cors = require("cors")

const app = express();
app.use(cors())

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

router.post("/courses", async(req, res) => {
    try{
        const course = await new Course(req.body)
        await course.save()
        res.status(201).json(course)
        console.log(course)
    }
    catch(err){
        res.status(400).send(err)
    }
})
})

//all requests that usually use an api start with /api...  so the url would be localhost:3000
app.use("/api", router)
app.listen(3000);