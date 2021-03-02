import React, {useState,useEffect} from 'react';
import Clue from './Clue.js';
import {useLocation} from 'react-router';


const Category = ({match}) => {


    const [clues,setClues] = useState([]);
    const [score,setScore] = useState(0);
    const location = useLocation();

    useEffect(() => {
      fetchClues();
    },[])


    const incrementScore = () => {
      setScore(score + 1);
    }
  
  
    const fetchClues = async () => {
      const data = await fetch(`http://jservice.io/api/clues?category=${match.params.id}`);
      const json = await data.json();
      setClues(json);
    }

    return (
        <div>
            Score: {score}
            {console.log(clues)}
            {clues.map(c=>(
                <Clue 
                key = {c.id} 
                question = {c.question} 
                id={c.id} 
                answer = {c.answer} 
                incrementScore = {incrementScore} 
                score = {score} 
                incrementCategoryScore = {location.params.increment}
                categoryId = {c.category_id}
                />
            ))} 

        </div>
    );
    }

export default Category;