import React, {useState,useEffect} from 'react';
import Clue from './Clue.js';
import {useLocation} from 'react-router';


const Category = ({match}) => {

    const location = useLocation();

    const [clues,setClues] = useState([]);
    const [score,setScore] = useState(location.params.score);
    const [counter, setCounter] = useState(60); //1 min for each category
    

    useEffect(() => {
      fetchClues();
    },[])

    const fetchClues = async () => {
      const data = await fetch(`http://jservice.io/api/clues?category=${match.params.id}`);
      const json = await data.json();
      console.log("Questions: ", json)
      setClues(json);
    }

    const incrementLocalScore = () => {
      setScore(score+1);
      console.log("incremented local score")
    }

  
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
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
                disabled={counter === 0 ? true : false}
                />
            ))} 

        </div>
    );
    }

export default Category;