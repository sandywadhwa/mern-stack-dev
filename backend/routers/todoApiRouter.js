const express = require('express');
const todoLib = require('../lib/todoLib');
var router = express.Router();

router.get("/", async (req, res) => {

    const isDeleted = req.query?.isDeleted?.toString() ?? undefined;
    const isCompleted = req.query?.isCompleted?.toString() ?? undefined;

    let filter = {};

    if (isDeleted) {
        filter["isDeleted"] = isDeleted.toLowerCase() === "true" ? true : false
    }

    if (isCompleted) {
        filter["isCompleted"] = isCompleted?.toLowerCase() === "true" ? true : false
    }
    

    todoLib.getAllTodos(filter, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "ERROR",
                message: err.message,
            });
        } else {
            return res.status(200).json({
                status: "SUCCESS",
                data: result,
            });
        }
    });
});

router.get("/:todoId", async (req, res) => {
    const todoId = req.params.todoId;
    todoLib.getTodoById(todoId, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "ERROR",
                message: err.message,
            });
        } else {
            return res.status(200).json({
                status: "SUCCESS",
                data: result,
            });
        }
    });
});

router.post("", async (req, res) => {
    const todo = req.body;
    todoLib.createTodo(todo, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "ERROR",
                message: err.message,
            });
        } else {
            return res.status(200).json({
                status: "SUCCESS",
                data: result,
            });
        }
    });
});

router.put("/:todoId", async (req, res) => {
    const todoId = req.params.todoId;
    const todo = req.body;
    todoLib.updateTodo(todoId, todo, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "ERROR",
                message: err.message,
            });
        } else {
            return res.status(200).json({
                status: "SUCCESS",
                data: result,
            });
        }
    });
});

router.delete("/:todoId", async (req, res) => {
    const todoId = req.params.todoId;
    todoLib.deleteTodo(todoId, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "ERROR",
                message: err.message,
            });
        } else {
            return res.status(200).json({
                status: "SUCCESS",
                data: result,
            });
        }
    });
});


module.exports = router;