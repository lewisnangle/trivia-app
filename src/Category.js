import React, {useState,useEffect} from 'react';
import Clue from './Clue.js';
import {useLocation} from 'react-router';


const Category = ({match}) => {

    const location = useLocation();

    const [clues,setClues] = useState([]);
    const [score,setScore] = useState(location.params.score);

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

    return (
        <div>
            Score : {score}
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
                />
            ))} 

        </div>
    );
    }

export default Category;