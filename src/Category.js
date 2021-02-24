import React, {useState,useEffect} from 'react';
import Clue from './Clue.js';


function Category({match}) {


    const [clues,setClues] = useState([]);
    const [score,setScore] = useState(0);

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
      console.log(json)
    }

    return (
        <div>
            Score: {score}
            {console.log(match.params.id)}
            {clues.map(c=>(
                <Clue key = {c.id} question = {c.question} id={c.id} answer = {c.answer} incrementScore = {incrementScore} score = {score} />
            ))} 
        </div>
    );
    }

export default Category;