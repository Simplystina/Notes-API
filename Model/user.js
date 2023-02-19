const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserModel = new mongoose.Schema({
    firstName :{type: String, default: null},
    lastName: {type: String, default: null},
    email: {type: String, unique: true},
    password: {type: String},
})


UserModel.pre(
    'save',
    async function(next){
        const user = this;
        const hash = await bcrypt.hash(this.password, 10)

        this.password = hash
        next()
    }
)

UserModel.methods.isValidPassword = async function(password){
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    
    return compare
}

const User = mongoose.model('users', UserModel)

module.exports = User