import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Tien from './pages/天后';
import Home from './pages/Home';
import TienHistory from './pages/天后History';
import Table from './pages/Table';
import Mapp from './pages/Map';
import Tien360 from './pages/天后360';
import Tienmodel from './pages/天后model';
import 虎垛 from './pages/decorations/虎垛';
import Temples from './pages/Temples';

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path='/Templewebsite'>
        <Home/>
      </Route>
      <Route path='/tien' component={Tien} />
      <Route path='/tienhistory' component={TienHistory} />
      <Route path='/table' component={Table} />
      <Route path='/map' component={Mapp} />
      <Route path='/tien360' component={Tien360} />
      <Route path='/tienmodel' component={Tienmodel} />
      <Route path='/虎垛' component={虎垛} />
      <Route path='/temples' component={Temples} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
