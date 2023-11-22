import React, { useEffect, useState } from 'react';
// import method from fetchData.js
import { fetchData, postData } from './fetchData';

const Test = () => {

  const [books, setBooks] = useState([]);

  //call the api inside the hook
  useEffect(() => {
    const getBooks = async (endpoint)=> {
      try {
        const data = await fetchData(endpoint); // Specify the endpoint
        console.log(data)
        setBooks(data);
        //always verify the data using console.log(data)
      } catch (error) {
        console.log(error)
        // Handle the error if needed further
      }
    }
    //exec
    const allBooksapi = '/books/get-books'; //base url embedded in fetchData.js
    getBooks(allBooksapi);

    //apply the same steps everytime calling an api
    
  },[])


  return (
    <div className='flex flex-col text-center'>
      <h2 className='text-2xl'>Testing fetchData.js</h2>
      <hr></hr>
      <div>
        <h3>Showing all books ... </h3>
        
      </div>
    </div>
  );
};

export default Test;