import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListContactComponent from "./component/ListContactComponent";
import AddContactComponent from "./component/AddContactComponent";
import EditContactComponent from "./component/EditContactComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>React Contact Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListContactComponent} />
                      <Route path="/contacts" component={ListContactComponent} />
                      <Route path="/add-contact" component={AddContactComponent} />
                      <Route path="/edit-contact" component={EditContactComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;