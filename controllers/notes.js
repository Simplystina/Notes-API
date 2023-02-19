const NotesModel = require("../Model/notes")

exports.createNotes = async(req,res)=>{
    try {
        const { name, descriptions } = data  = req.body
        console.log(req.user,req.body,"oooooooo")
       

        data.userId = req.user.userid
        if(!(name && descriptions)){
          
            return  res.status(422).send({message: "Data entered is invalid"})
        }
        console.log(data,"data")
        const notes = await NotesModel.create(data)
        return res.status(200).json({
            message: "Note created successfully",
            status: "true",
            data: notes
        })
    } catch (error) {
        console.log(error)
        return res.status(404).send({
            message:"Title already used"
        })
    }
}
exports.getAllNotes = async(req,res)=>{
    try {

        const userId = req.user.userid
        console.log(userId, "userId")
        const result = await NotesModel.find({userId: userId })
        
        res.status(200).json({message:"Successfully retrieved", status: true, data: result})
    } catch (error) {
        res.status(404).send("Something went wrong, check logs")
    }
}
exports.getANote = async(req,res)=>{
    try {
        const {id} = req.params
       
        const result = await NotesModel.findById(id)
        res.status(200).json({
            message:"Data fetched successfully",
            status: true,
            data: result
        })
    } catch (error) {
        
    }
}
exports.updateNotes = async(req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        const update = await NotesModel.findByIdAndUpdate(id, data, {new:true})
        res.status(200).json({message: "Notes updated successfully", status: true, data:update})

    } catch (error) {
        
    }
}
exports.deleteNotes = async(req,res)=>{
    try {
        const id = req.params.id
      
        const data = await NotesModel.findByIdAndDelete(id)
        console.log(data, "dataaaaaaaa")
           return res.status(200).json({message: "Note Deleted successfully", status: true})
       
      
    } catch (error) {
        console.log(error,"error")
    }
}

