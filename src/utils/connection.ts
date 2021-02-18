import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://db_graphql:27MmFPiVE8c9cmR@cluster0.0pjtg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})