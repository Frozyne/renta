import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [2, 'Name must be at least 2 characters'],
        maxLength: [50, 'Name must be at most 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'This email is already registered'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password must be 8 characters long'],
        select: false,
    }
},
{timestamp: true})

const User = mongoose.model('User', userSchema)

export default User