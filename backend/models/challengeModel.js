import mongoose from 'mongoose';

const { Schema } = mongoose;

const challengeSchema = new Schema({
    username : {
        type : String,
        ref : 'User',
        required : true,
    },
    year : {
        type : Number,
        required : true
    },
    targetBooks : {
        type : Number,
        required : true,
    },
    completedBooks : {
        type : Number,
        default : 0,
    },
    progress : {
        type : Number,
        default : 0,
    },
}, { timestamps: true });

const Challenge = mongoose.model('Challenge', challengeSchema);

export default Challenge ;