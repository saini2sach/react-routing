import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Gallery from './components/gallery';
import Notfound from './components/notFound'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (){
    console.log("dfdsf");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My App</h1>
        </header>
        <Router>
          <div>
            <ul className="nav-link">
              <li>
                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/gallery" component={Gallery}/>
              <Route component={Notfound}/>
            </Switch>            
          </div>
        </Router>
      
      </div>
    );
  }
}

export default App;