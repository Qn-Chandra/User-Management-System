import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React from 'react'
import HeaderComponent from './components/HeaderComponent.js';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <div className='container'>
          <Switch>
            <Route path="/" exact component={listUserComponent}/>
            <Route path="/users" exact component={ListUserComponent}></Route>
            <Router component={CreateUserComponent} path="add-user/:id">

            </Router>
             <Router component={UpadteUserComponent} path="update-user/:id">
            
            </Router>
            <Router component={viewUserComponent} path="/view-user:id">
            
            </Router>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
