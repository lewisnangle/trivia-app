import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';



function Catagory (){

    const [catagories,setCatagories] = useState([]);

    useEffect(() => {
      fetchCatagories();
    },[])
  
  
    const fetchCatagories = async () => {
      const data = await fetch(`http://jservice.io/api/categories?count=30`);
      const json = await data.json();
      setCatagories(json);
      console.log(json)
    }


    return(
        <div>
        {
            catagories.map(catagory => (
              <h2 key = {catagory.id}>
              <Link to = {`/categories/${catagory.id}`}>{catagory.title}</Link>  
              </h2>
              ))
          }

        </div>
    )

}



export default Catagory;