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
//test signup
// const newUser ={username: "uniquename", firstName: "Faysel", lastName: "Rajo", email:"unique@gmail.com", password: "122345"}
// _userSignup(newUser).then(data => console.log(data))

//signup//
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


// ------- Shelves ---------- //
const tmpToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTZhMGViMDhkODM2ZTFjNTQ0NzA1MGMiLCJlbWFpbCI6ImZheXNlbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImZheXNlbCIsImlhdCI6MTcwMTQ1MTU4NCwiZXhwIjoxNzAxNTM3OTg0fQ.GuWPgAJKdNWFN6UElovxM6txb64eo_8NzKa_Hqq1mQY"

//create a shelf //
export const _createShelf = async function (authToken, username, label) {
  const api_endpoint = `${base_url}/user/${username}/create-shelf`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.patch(api_endpoint, {label}, {headers});
    // console.log(response)
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err.message);
  }
};
//test
// _createShelf("faysel", "newOne", ).then(data => console.log(data))


//get all shelves of a user //
export const _getShelves = async function (username) {
  const api_endpoint = `${base_url}/user/${username}/shelves`;
  try {
    const response = await axios.get(api_endpoint);
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err.message);
  }
};
//test
// _getShelves("faysel").then(data => console.log(data))


// delete shelf //
export const _deleteShelf = async function (authToken, username, label) {
  const api_endpoint = `${base_url}/user/${username}/delete-shelf/${label}`;
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.delete(api_endpoint, {headers});
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err.message);
  }
};
//test
// _deleteShelf(tmpToken,"faysel", "newOne").then(data => console.log(data))



// add book to shelf //
export const _addBookToShelf = async function (authToken,username, label, bookId) {
  const api_endpoint = `${base_url}/user/${username}/shelves/${label}/add`;
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  }
  try {
    const response = await axios.patch(api_endpoint, {bookId}, {headers});
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err.message);
  }
};
//test
// 



// remove book from shelf //
export const _removeFromShelf = async function (authToken,username, label, bookId) {
  const api_endpoint = `${base_url}/user/${username}/shelves/${label}/remove/${bookId}`;
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  }
  try {
    const response = await axios.patch(api_endpoint, {bookId}, {headers});
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err);
  }
};
//test
// const tmpBookId = "655c96c9545a2f3bb0b7c128"
// _removeFromShelf(tmpToken, "faysel", "finance", tmpBookId).then((data)=> console.log(data))



// ------------------ Review ------------------ //

const tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTcyMjNhOTVjMjQ5OTY2NTY0ODU1NTgiLCJlbWFpbCI6ImFiY0BhYmMuY29tIiwidXNlcm5hbWUiOiJhYmMiLCJpYXQiOjE3MDIwMjEwMzQsImV4cCI6MTcwMjEwNzQzNH0.HvYkabE8hjO7bEedUBzmq5f98NMAhs-7Lb_slERbwD4"
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
    const response = await axios.delete(api_endpoint, {
      headers,
      data: reviewData, 
    });
    
    return response.data;
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

// ------------------ Take Challenge ------------------ //
// get user challenge details //
export const _getChallenge = async function (authToken) {
  const api_endpoint = `${base_url}/challenges/get-challenge`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.get(api_endpoint, {headers});
    
      return response.data;
  } catch (err) {
      console.log(err.message);
  }
};

//test get Challenge
//_getChallenge(tempToken).then(data => console.log(data));


// add target number of books //
export const _addTargetBooks = async function (authToken, targetData ) {
  const api_endpoint = `${base_url}/challenges/add-target-books`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.post(api_endpoint, targetData, {headers});
      return response.data; 
  } catch (err) {
      console.log(err.message);
  }
};
//test
// const targetData = {
//   "targetBooks" : 5
// };

// _addTargetBooks(tempToken, targetData).then(data => console.log(data));

// update target number of books //
export const _updateTargetBooks = async function (authToken, targetData) {
  const api_endpoint = `${base_url}/challenges/update-target-books`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.patch(api_endpoint, targetData, {headers});
      return response.data; 
  } catch (err) {
      console.log(err.message);
  }
};

//test
// const targetData = {
//   "targetBooks" : 3
// };

// _updateTargetBooks(tempToken, targetData).then(data => console.log(data));


// delete challenge //
export const _deleteChallenge = async function (authToken) {
  const api_endpoint = `${base_url}/challenges/delete-challenge`;

  // Request headers with Authorization token
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.delete(api_endpoint, { headers });
    console.log('Request Headers:', headers);
    console.log('Response:', response);
    return response.data;
  } catch (err) {
    console.error('Error:', err.message);
    if (err.response) {
      console.log('Response Data:', err.response.data);
    }
  }
  
  // try {
  //   const response = await axios.delete(api_endpoint, { headers });
  //   console.log('Response:', response);
  //     return response.data;
  // } catch (err) {
  //     console.log(err.message);
  // }
};

// test
//_deleteChallenge(tempToken).then(data => console.log(data))



//update user //
export const _updateUser = async function (authToken, username, editedData) {
  //edited data can optionally contain firstName, lastName, email, bio, preferredGenres
  const api_endpoint = `${base_url}/user/${username}`;
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  }
  try {
    const response = await axios.put(api_endpoint, editedData, {headers});
      return response.data; //retruns a success message
  } catch (err) {
      console.log(err.message);
  }
};

// tested
// const editedData = {
//   "firstName": "Md ABCD",
//   "lastName": "Man",
//   "bio": "i am a great reader",
// }
// _updateUser(tempToken, "abc", editedData).then(data => console.log(data))






