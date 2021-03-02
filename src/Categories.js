import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';



function Category (){

    const [categories,setCategories] = useState([
      {id : '',
      title : '',
      clues_count : 0,
      score : 0}
    ]);

    useEffect(() => {
      fetchCategories();
    },[])



    const initialiseScores = (json) => {
      const array = [];
      json.map((category,index) => (
        array[index] = {...category,score : 0}  
      ))
      return array;
    }
  
    const fetchCategories = async () => {
      const data = await fetch(`http://jservice.io/api/categories?count=30`);
      const json = await data.json();
      setCategories(initialiseScores(json));
    }

    // setItems(
    //   items.map((item, index) => {
    //     item.id === id ? newItem : item
    //   })

    const incrementCategoryScore = (id) => {
      const array = [...categories];
      console.log(array);
      array.map((category,index)=>{
        if(category.id == id){
          array[index] = {...category,score : category.score+1}  
        }
      })
      setCategories(array)
      console.log("updated cat scores", categories);
    }


    return(
      
        <div>
        {
            categories.map(category => (
              <h2 key = {category.id}>
              <Link to = {{
                pathname:`/categories/${category.id}`,
                params : {
                  score : category.score,
                  increment: incrementCategoryScore,
                  another : 53
                }
              }}>
                {category.title}
              </Link>  {category.score}
              </h2>
              ))
          }
        {console.log(categories)}
        </div>
    )

}



export default Category;