import React from 'react';
import {Link} from 'react-router-dom';


const CategoryLink = ({incrementCategoryScore,setCategoryToComplete, category}) => {

    return (
        <div className = 'category'>
        <Link to = {{
            pathname:`/categories/${category.id}`,
            params : {
              score : category.score,
              increment: incrementCategoryScore,
              setCategoryToComplete : setCategoryToComplete,
              complete : category.complete
            }
          }}>
            <h3 className = 'text'>{category.title}</h3>
          </Link>  {category.score}
                   {category.complete ? <div>Complete</div> : <div></div>}

        </div>
    )
}


export default CategoryLink;