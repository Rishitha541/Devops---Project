const express = require("express")
const router = express.Router()

const Task = require("../models/Task")

// ADD TASK
router.post("/add", async (req, res) => {

    try {

        console.log("POST /tasks/add hit")
        console.log("Data received:", req.body)

        const task = new Task(req.body)

        await task.save()

        console.log("Task saved:", task)   // helps see in terminal

        res.send(task)

    } catch (error) {

        console.log(error)
        res.status(500).send("Error saving task")

    }

})


// GET SCHEDULE
router.get("/schedule", async (req, res) => {

    try {

        const tasks = await Task.find()

        const today = new Date()

        const schedule = tasks.map(task => {

            const daysLeft =
                (new Date(task.examDate) - today) /
                (1000 * 60 * 60 * 24)

            const priority = task.difficulty / daysLeft

            return {
                subject: task.subject,
                hours: task.hoursRequired,
                priority: priority
            }

        })

        schedule.sort((a, b) => b.priority - a.priority)

        res.send(schedule)

    } catch (error) {

        console.log(error)
        res.status(500).send("Error generating schedule")

    }

})

router.get("/date/:date", async (req, res) => {

    const selectedDate = new Date(req.params.date)

    const nextDate = new Date(selectedDate)
    nextDate.setDate(selectedDate.getDate() + 1)

    const tasks = await Task.find({
        examDate: {
            $gte: req.params.date,
            $lt: nextDate.toISOString().split("T")[0]
        }
    })

    res.send(tasks)
})
module.exports = router