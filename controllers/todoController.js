var bodyParser = require('body-parser')
const express = require('express');
const urlencodeParser = bodyParser.urlencoded({ extended: false})
const router = express.Router();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todo')

var todoSchema = new mongoose.Schema({
    item: String,
    remark: String,
    priority: Number,
    deadline: { type: Date },
    created: { type: Date, default: Date.now() },
    updated: { type: Date, default: Date.now() },
    done: Boolean
})


var Todo = mongoose.model('Todo', todoSchema)


router.get('/', async function (req, res) {
    const todos = await Todo.find({}).sort({ created: 1 })
    res.render('todo', { todos: todos })
}),

router.post('/todo', urlencodeParser, async function (req, res) {
    console.log(req.body)
    const obj = await Todo(req.body).save()
    res.json(obj)
}),

router.get('/todo/:id', async function (req, res) {
    const data = await Todo.findById(req.params.id)
    res.json(data)
}),

router.delete('/todo/:item', async function (req, res) {
    await Todo.findOneAndDelete(req.params.id)
    res.json({
        success: true,
        code: 0
    })
})

module.exports = router;
