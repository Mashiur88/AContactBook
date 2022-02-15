import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateContact from './components/Contacts/CRUD/CreateContact';
import UpdateContact from './components/Contacts/CRUD/UpdateContact';
import Cockpit from './components/Cockpit/Cockpit';
import Contact from './components/Contacts/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Cockpit/>
          </Route>
          <Route exact path="/createcontact">
              <CreateContact/>
          </Route>
          <Route exact path="/updatecontact/:id">
              <UpdateContact/>
          </Route>
          <Route exact path="/details/:id">
              <Contact/>
          </Route>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
