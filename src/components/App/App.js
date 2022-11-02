import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderMenu from '../Header/headerMenu';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Card from '../Card/Card';
import morty from '../../resources/img/morty.png';
import rick from '../../resources/img/rick.png';
import summer from '../../resources/img/summer.png';
import Profile from '../Profile/profile';

function App() {

  return (
    <Router>
      <div className="app">
      <HeaderMenu />
          <Switch>
            <Route exact path="/">
              <Banner />
              <Search />
              <div className='app__cards'>
                <Card image={morty} cardName='Morty Smith' /> 
                <Card image={rick} cardName='Rick Sanchez' /> 
                <Card image={summer} cardName='Summer Smith' /> 
              </div>
            </Route>
              <Route exact path="/location">
            </Route>
              <Route exact path="/episode">
            </Route>
            <Route exact path="/character">
              <Profile prof_img={morty} prof_name='Summer Smith' />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
