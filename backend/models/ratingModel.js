import mongoose from 'mongoose';

const {Schema} = mongoose;

const ratingSchema = new Schema({
     user : {
      type : String,
      required : true,
     },
     book : {
      type : String,
      required : true,
     },
     rating : {
      type : Number,
      min : 1,
      max : 5,
     },
}, { timestamps : true});


const Rating = mongoose.model('Rating', ratingSchema) ;
export default Rating ;