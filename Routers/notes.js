const noteController = require("../controllers/notes")
const express = require("express")
require("dotenv").config()

const notesRouter = express.Router()



notesRouter.post('/create-note', noteController.createNotes)

notesRouter.get('/a-note/:id', noteController.getANote)
notesRouter.get("/all-note", noteController.getAllNotes)
notesRouter.delete('/delete-note/:id', noteController.deleteNotes)

notesRouter.patch('/update-note/:id', noteController.updateNotes)

module.exports = notesRouter