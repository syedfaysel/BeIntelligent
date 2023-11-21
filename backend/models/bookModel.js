import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({

    isbn: {
        type : String,
        required : true
    },

    title : {
        type : String,
        required : true
    },
    
    author: {
        type : String,
        required : true
    },
    
    description : {
        type : String,
        required : true
    },

    image : {
        type : String,
        required : true
    },

    genres: {
        type: [String],
        required : true
    },

    avgRating: {
        type: Number,
        default: null
    },
    
    totalPages: {
        type: Number,
        required : true
    }
}, {timestamps : true})
  

const Book = mongoose.model('Book', bookSchema);

export default Book;
   