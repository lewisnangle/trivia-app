import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';



function Catagory (){

    const [catagories,setCatagories] = useState([
      {id : '',
      title : '',
      clues_count : 0,
      score : 0}
    ]);

    useEffect(() => {
      fetchCatagories();
    },[])

    const initialiseScores = (json) => {
      const array = [];
      json.map((catagory,index) => (
        array[index] = {...catagory,score : 0}  
      ))
      return array;
    }
  
    const fetchCatagories = async () => {
      const data = await fetch(`http://jservice.io/api/categories?count=30`);
      const json = await data.json();
      setCatagories(initialiseScores(json));
    }


    const incrementCatagoryScore = () => {



    }


    return(
      
        <div>
        {
            catagories.map(catagory => (
              <h2 key = {catagory.id}>
              <Link to = {`/categories/${catagory.id}`}>{catagory.title}</Link>  {catagory.score}
              </h2>
              ))
          }
        {console.log(catagories)}
        </div>
    )

}



export default Catagory;