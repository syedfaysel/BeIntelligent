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

