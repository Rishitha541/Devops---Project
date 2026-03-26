const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    subject: String,
    examDate: Date,
    difficulty: Number,
    hoursRequired: Number
})

module.exports = mongoose.model("Task", TaskSchema)