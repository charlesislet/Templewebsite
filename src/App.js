import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Tien from './pages/天后';
import Home from './pages/Home';
import TienHistory from './pages/天后History';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/tien' component={Tien} />
      <Route path='/tienhistory' component={TienHistory} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
