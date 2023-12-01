import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  reviewText: {
    type: String,
    default: '',
  },
  likes: {
    type: [String],
    default: [],
  },
  dislikes: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;