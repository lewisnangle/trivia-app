import React, {useState,useEffect} from 'react';
import Clue from './Clue.js';
import {useLocation} from 'react-router';
import Button from '@material-ui/core/Button';


const Category = ({match}) => {

    const location = useLocation();

    const timeInSeconds = location.params.complete ? 0 : 60;

    const [clues,setClues] = useState([]);
    const [score,setScore] = useState(location.params.score);
    const [counter, setCounter] = useState(timeInSeconds); //1 min for each category
    

    useEffect(() => {
      fetchClues();
    },[])

    const fetchClues = async () => {
      const data = await fetch(`http://jservice.io/api/clues?category=${match.params.id}`);
      const json = await data.json();
      setClues(json);
    }

    const incrementLocalScore = () => {
      setScore(score+1);
    }

    const markCategoryComplete = (categoryId) => {
      location.params.setCategoryToComplete(categoryId);
    }

  
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter == 0){ markCategoryComplete(match.params.id)}
      }, [counter]);

    return (
        <div>
          <div>
            <h2>Time left: {counter}</h2>
            <h2>Score : {score}</h2>
          </div>
            {console.log(clues)}
            {clues.map(c=>(
                <Clue 
                key = {c.id} 
                question = {c.question} 
                id={c.id} 
                answer = {c.answer} 
                incrementLocalScore = {incrementLocalScore}
                incrementCategoryScore = {location.params.increment}
                categoryId = {c.category_id}
                disabled={(counter === 0 || location.params.complete) ? true : false}
                />
            ))} 

            <Button onClick={()=>{ markCategoryComplete(match.params.id)}} variant="contained" color="primary">
              Mark As Complete
            </Button>

        </div>
    );
    }

export default Category;