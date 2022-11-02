import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderMenu from '../Header/headerMenu';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Card from '../Card/Card';
import morty from '../../resources/img/morty.png';
import Profile from '../Profile/profile';

function App() {
  return (
    <Router>
      <div className="App">
      <HeaderMenu />
          <Switch>
            <Route exact path="/">
              <Banner />
              <Search />
              <Card image={morty} cardName='Morty Smith' />
              <Profile prof_img={morty} prof_name='Summer Smith' />
            </Route>
            <Route exact path="/location">
            </Route>
            <Route exact path="/episode">
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
