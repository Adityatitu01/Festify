const {Schema, model } = require ('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    eventsCreated: [{
        type: Schema.Types.ObjectId,
        ref: 'Event',
    }]
})

userSchema.pre("save", async function (next) {
    const user = this;
    try {
        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password, 8);
        }
        next(); // Proceed to the next middleware or save operation
    } catch (error) {
        console.log("error in hashing password")
        next(error); // Pass the error to the next middleware or error handler
    }
});

// json web tokens

userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId: this.id.toString(),
            email: this.email,
            isAdmin :this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn: '30d'
        }
    )
    }
    catch(error){
        console.error("error in generating token")
    }
}


const User = model('User', userSchema);
module.exports = User;