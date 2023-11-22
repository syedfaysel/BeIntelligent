import axios from 'axios';


const googleBookApi = async (searchQuery, maxResults=10) => {
  //search by author, title and matching
  const apiEndpoint = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${maxResults}`;

  const result = await axios.get(apiEndpoint);
  let books = []
  if (result.data) {
    // complete the function
    
  }

}