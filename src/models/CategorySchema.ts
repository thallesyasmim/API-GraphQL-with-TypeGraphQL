import mongoose from 'mongoose'

const Schema = new mongoose.Schema({ // MongoDB add column @id for element, automatic generate
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})


export default mongoose.model('Categories', Schema) // Name and Structure