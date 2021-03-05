import React, { useEffect,useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

const Clue = (props) => {

    const [answer,setAnswer] = useState('');
    const [correctAnswer,setCorrectAnswer] = useState('');
    const [isCorrectAnswer,setIsCorrectAnswer] = useState(false);


    useEffect(()=>{
        setCorrectAnswer(props.answer);
    },[])
    
    
    const updateAnswer = (event) => {
        console.log(event.target.value)
        setAnswer(event.target.value)
      }


    const checkAnswer = (event) => {
        if(!isCorrectAnswer && answer == correctAnswer){
            setIsCorrectAnswer(true);
            props.incrementCategoryScore(props.categoryId);
            props.incrementLocalScore();
        }
        event.preventDefault();
    }

    return (
        <div>
            
            <Card />
            <CardContent>
                    <Typography component={'span'} variant={'body2'}>
                    {props.question + ":  "}
                    <form  onSubmit = {checkAnswer} noValidate autoComplete="off">
                        <TextField onChange = {updateAnswer} id="outlined-basic" label="Answer" variant="outlined" />
                    </form>
                    <div>
                        {isCorrectAnswer ? "Correct!!"  : "Incorrect."}
                    </div>
                    </Typography>
            </CardContent>
        </div>
    );


}


export default Clue;