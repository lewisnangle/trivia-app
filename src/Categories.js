import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';


function Categories ({incrementCategoryScore,categories,setCategoryToComplete}){
  


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
                  setCategoryToComplete : setCategoryToComplete,
                  complete : category.complete
                }
              }}>
                {category.title}
              </Link>  {category.score}
                       {category.complete ? <div>Complete</div> : <div></div>}
              </h2>
              ))
          }
        </div>
    )

}



export default Categories;