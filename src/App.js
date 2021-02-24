import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './Nav.js';
import Categories from './Categories.js';
import Category from './Category.js';

function App() {


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
        <Route path = "/categories" exact component={Categories}/>
        <Route path = "/categories/:id" component ={Category}/>
        </Switch>
        </div>
      </Router>
    
 
    

  );
}

export default App;
