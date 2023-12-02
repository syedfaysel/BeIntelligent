import axios from "axios";

//file or methods import
import { base_url, endpoints } from "./api-endpoints.js";


//user auth//

//signup//
export const _userSignup = async function (user) {
  const api_endpoint = `${base_url}${endpoints.userSignup}`;
  try {
    const response = await axios.post(api_endpoint, user);
      return response.data; // return a json with user
  } catch (err) {
    // console.log(err.response.data.message);
    console.log(err.message)
  }
};
// //test signup
// const newUser ={username: "uniquename", firstName: "Faysel", lastName: "Rajo", email:"unique@gmail.com", password: "122345"}
// _userSignup(newUser).then(data => console.log(data))

// //signup//
export const _userLogin = async function (credential) {
  const api_endpoint = `${base_url}${endpoints.userLogin}`;
  try {
    const response = await axios.post(api_endpoint, credential);
      return response.data; 
  } catch (err) {
    // console.log(err.response.data.message);
    console.log(err.message)
  }
};
// const credential ={username: "messi", firstName: "Faysel", lastName: "Rajo", email:"messi@gmail.com", password: "122345"}
// _userLogin(credential).then(data => console.log(data))



//get all books//
export const _fetchBooks = async function () {
  const api_endpoint = `${base_url}${endpoints.getBooks}`;
  try {
      const response = await axios.get(api_endpoint);
      return response.data.books; // returns list of book objects
  } catch (err) {
      console.log(err.message);
  }
};
//test fetchBooks
//fetchBooks().then(data => console.log(data));

//get single book //
export const _fetchBookById = async function (_id) {
  const api_endpoint = `${base_url}${endpoints.getBook}${_id}`;
  try {
      const response = await axios.get(api_endpoint);
      return response.data.book; //retruns a single book object
  } catch (err) {
      console.log(err.message);
  }
};
//test
// fetchBookById("655e5ff16f4a5dbb583faca7").then(data => console.log(data))

// export const _addReview = async (reviewData) => {
//   const api_endpoint = `${base_url}${endpoints.addReview}`;
//   try {
//       const response = await axios.post(api_endpoint, reviewData);
//       return response.data;
//     } catch (err) {
//       console.log(err.message);  
//     }
// };

// ------------------ Review ------------------ //

const tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTZhMGViMDhkODM2ZTFjNTQ0NzA1MGMiLCJlbWFpbCI6ImZheXNlbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImZheXNlbCIsImlhdCI6MTcwMTUxMDk2MCwiZXhwIjoxNzAxNTk3MzYwfQ.jBUZC4WbNFDM3OSe2d3Ed_dyVPyDya3E_6ozM4FwBKQ"

// add a review //
export const _addReview = async function (authToken, reviewData ) {
  const api_endpoint = `${base_url}/reviews/add-review`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.post(api_endpoint, reviewData, {headers});
    // console.log(response)
      return response.data; //returns a success message
  } catch (err) {
      console.log(err.message);
  }
};
// // test
// const reviewData = {
//   bookId: "655d0b16ca1df7808c938326",
//   rating: 4,
//   reviewText: "It is really a good book"
// };

// _addReview(tempToken, reviewData).then(data => console.log(data));

// edit review //
export const _editReview = async function (authToken, reviewData) {
  const api_endpoint = `${base_url}/reviews/edit-review`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.put(api_endpoint, reviewData, {headers});
    // console.log(response)
      return response.data; //returns a success message
  } catch (err) {
      console.log(err.message);
  }
};

//test
// const reviewData = {
//   bookId: "655d0b16ca1df7808c938326",
//   rating: 3,
//   reviewText: "This is a good book"
// };

// _editReview(tempToken, reviewData).then(data => console.log(data));

//delete review//
export const _deleteReview = async function (authToken, reviewData) {
  const api_endpoint = `${base_url}/reviews/delete-review`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.delete(api_endpoint, reviewData, {headers});
    // console.log(response)
      return response.data; //returns a success message
  } catch (err) {
      console.log(err.message);
  }
};
// test
// const reviewData = {
//   "bookId": "655d0b16ca1df7808c938326",
//   "deleteReviewText" : true,
//   "deleteRating" : true
// };

// _deleteReview(tempToken, reviewData).then(data => console.log(data));

//get review by book id
export const _getReviewsByBookId = async function (authToken , bookId) {
  const api_endpoint = `${base_url}/reviews/get-book-reviews/${bookId}`;
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.get(api_endpoint, {headers});
    // console.log(response)
      return response.data; //returns a success message
  } catch (err) {
      console.log(err.message);
  }
};

//test
// _getReviewsByBookId(tempToken, "655d0b16ca1df7808c938326").then(data => console.log(data))

//get review by username
export const _getReviewsByUsername = async function (authToken) {
  const api_endpoint = `${base_url}/reviews/get-book-reviews/username`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.get(api_endpoint, {headers});
    // console.log(response)
      return response.data; //returns a success message
  } catch (err) {
      console.log(err.message);
  }
};

//test
//getReviewsByUsername("syed").then(data => console.log(data))

export const _likeReview = async function (authToken){
  const api_endpoint = `${base_url}/reviews/like-review/reviewId`;
  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.post(api_endpoint, {headers});
    // console.log(response)
      return response.data; //returns a success message
  } catch (err) {
      console.log(err.message);
  }
};

//test
//likeReview("656a22401c76b05b0b2047c0").then(data => console.log(data))

export const _dislikeReview = async function (authToken){
  const api_endpoint = `${base_url}/reviews/dislike-review/reviewId`;
  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.post(api_endpoint, {headers});
    // console.log(response)
      return response.data; //returns a success message
  } catch (err) {
      console.log(err.message);
  }
};

//test
//dislikeReview("656a22401c76b05b0b2047c0").then(data => console.log(data))




