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
    score : 0}
  ]);

  useEffect(() => {
    fetchCategories();
  },[])


  const initialiseScores = (json) => {
    const array = [];
    json.map((category,index) => (
      array[index] = {...category,score : 0}  
    ))
    return array;
  }

  const fetchCategories = async () => {
    const data = await fetch(`http://jservice.io/api/categories?count=30`);
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



  const Home = () => {

    return(
      <div>
        <h2>Home</h2>
      </div>
    )
  
  }

  return (

      <Router>
        <div className = "App">

        <Nav/>
        <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/categories" exact render = {() => (
          <Categories categories = {categories} incrementCategoryScore = {incrementCategoryScore}/>)}/>
        <Route path = "/categories/:id" component ={Category}/>
        </Switch>
        </div>
      </Router>
    
 
    

  );
}

export default App;
