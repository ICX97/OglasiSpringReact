import './App.css';
import ListOglasComponent from './components/ListOglasComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateKorisnikComponent from './components/CreateKorisnikComponent';
import LogKorisnikComponent from './components/LogKorisnikComponent';
import CreateOglasComponent from './components/CreateOglasComponent';
import ViewOglasComponent from './components/ViewOglasComponent';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListOglasComponent}></Route>
                <Route path = "/oglas"  exact component = {ListOglasComponent}></Route>
                <Route path = "/addOglas/:oglas_id" exact component = {CreateOglasComponent}></Route>
                <Route path = "/viewOglas/:oglas_id" exact component = {ViewOglasComponent}></Route>
                <Route path = "/singUp"  exact component = {CreateKorisnikComponent}></Route>
                <Route path = "/logIn"  exact component = {LogKorisnikComponent}></Route>
              </Switch>
            </div>
          <FooterComponent/>
       
      </Router>
    </div>
  );
}

export default App;
