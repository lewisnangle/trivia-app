import CategoryLink from './CategoryLink';


function Categories ({incrementCategoryScore,setCategoryToComplete, categories}){
  
    return(      
        <div>
        {
            categories.map(category => (
              <h2 key = {category.id}>
                  <CategoryLink 
                  incrementCategoryScore = {incrementCategoryScore} 
                  setCategoryToComplete = {setCategoryToComplete} 
                  category = {category}
                  />
              </h2>
              ))
          }
        </div>
    )

}



export default Categories;