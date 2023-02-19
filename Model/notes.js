const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const NotesModel = new Schema(
    {
        id: ObjectId,
        name : {type: String, unique: true, required: true},
        descriptions: {type: String},
        userId: {type: String}

    },
    {
        timestamps: true, toJSON: {virtuals: true}
    }
)


const Notes = mongoose.model("notes", NotesModel)
module.exports = Notes