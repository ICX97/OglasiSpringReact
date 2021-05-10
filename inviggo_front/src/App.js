import logo from './logo.svg';
import './App.css';
import ListOglasComponent from './components/ListOglasComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateKorisnikComponent from './components/CreateKorisnikComponent';
import LogKorisnikComponent from './components/LogKorisnikComponent';
import CreateOglasComponent from './components/CreateOglasComponent';
import UpdateOglasComponent from './components/UpdateOglasComponent';
import ViewOglasComponent from './components/ViewOglasComponent';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListOglasComponent}></Route>
                <Route path = "/oglas" component = {ListOglasComponent}></Route>
                <Route path = "/addOglas/:oglas_id" component = {CreateOglasComponent}></Route>
                <Route path = "/viewOglas/:oglas_id" component = {ViewOglasComponent}></Route>
                <Route path = "/signUp" component = {CreateKorisnikComponent}></Route>
                <Route path = "/logIn" component = {LogKorisnikComponent}></Route>
              </Switch>
            </div>
          <FooterComponent/>
       
      </Router>
    </div>
  );
}

export default App;
