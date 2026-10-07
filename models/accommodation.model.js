import mongoose from "mongoose";

const accomodationSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: [2, 'Building name too short'],
        maxLength: [50, 'Building name too long']
    },
    address: {
        type: String,
        trim: true,
        minLength: [2, 'Building name too short'],
        maxLength: [150, 'Building name too long']
    },
    building_type: {
        type: String,
        enum: ['Bungalow', 'Duplex', 'Apartment', 'Penthouse'],
        required: [true, 'What is type of building is this'],
        default: 'Bungalow'
    },
    description: {
        type: String,
        trim: true,
        minLength: [2, 'Building name too short'],
        maxLength: [150, 'Building name too long']
    },
    availability: {
        type: String,
        enum: ['Rent', 'Lease', 'Rented', 'Leased'],
        required: [true, 'What is type of building is this'],
        default: 'Rent'
    },
    term: {
        type: String,
        enum: ['Monthly', 'Quarterly', 'Semi-Yearly', 'Yearly'],
        required: [true, 'What is type of building is this'],
        default: 'Rent'
    },
    proposed_price: {
        type: Number,
        required: [true, 'Price is required'],
        minLength: [0, 'Price must be greater than 0']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    building_image: {
        url: {
            type: String,
            default: null
        },
        publicId: {
            type: String,
            default: null
        }
    }
},
{timestamps: true})

const Accomodation = mongoose.model('Accomodation', accomodationSchema)

export default Accomodation