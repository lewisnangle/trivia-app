import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';



function Categories ({incrementCategoryScore,categories}){

    return(
      
        <div>
        {
            categories.map(category => (
              <h2 key = {category.id}>
              <Link to = {{
                pathname:`/categories/${category.id}`,
                params : {
                  score : category.score,
                  increment: incrementCategoryScore
                }
              }}>
                {category.title}
              </Link>  {category.score}
              </h2>
              ))
          }
        </div>
    )

}



export default Categories;