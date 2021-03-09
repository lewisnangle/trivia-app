import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './Nav.js';
import React, {useState,useEffect} from 'react';
import Categories from './Categories.js';
import Category from './Category.js';

function App() {

  const [categories,setCategories] = useState([
    {id : '',
    title : '',
    clues_count : 0,
    score : 0,
    complete : false}
  ]);

  useEffect(() => {
    fetchCategories();
  },[])


  const initialiseScores = (json) => {
    const array = [];
    json.map((category,index) => (
      array[index] = {...category,score : 0,complete : false}  
    ))
    return array;
  }

  const fetchCategories = async () => {
    const data = await fetch(`http://jservice.io/api/categories?count=10`);
    const json = await data.json();
    setCategories(initialiseScores(json));
  }

  const incrementCategoryScore = (id) => {
    const array = [...categories];
    console.log(array);
    const objectToIncrement = array.find(category => category.id == id);
    const indexOfObjectToIncrement = array.indexOf(objectToIncrement);

    array[indexOfObjectToIncrement].score = array[indexOfObjectToIncrement].score + 1;

    setCategories(array);
  }

  const setCategoryToComplete = (id) => {
    const array = [...categories];
    console.log(array);
    const objectToIncrement = array.find(category => category.id == id);
    const indexOfObjectToIncrement = array.indexOf(objectToIncrement);

    array[indexOfObjectToIncrement].complete = true;

    setCategories(array);
  }



  const Home = () => {

    return(
      <div>
        <h1>Previous Scores:</h1>
      </div>
    )
  
  }

  console.log(categories);

  return (

      <Router>
        <div className = "App">

        <Nav/>
        <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/categories" exact render = {() => (
          <Categories categories = {categories} incrementCategoryScore = {incrementCategoryScore} setCategoryToComplete = {setCategoryToComplete}/>)}/>
        <Route path = "/categories/:id" component ={Category}/>
        </Switch>
        </div>
      </Router>
    
 
    

  );
}

export default App;
