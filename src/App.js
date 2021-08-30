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
      <Route path='/Templewebsite/tien' component={Tien} />
      <Route path='/Templewebsite/tienhistory' component={TienHistory} />
      <Route path='/Templewebsite/table' component={Table} />
      <Route path='/Templewebsite/map' component={Mapp} />
      <Route path='/Templewebsite/tien360' component={Tien360} />
      <Route path='/Templewebsite/tienmodel' component={Tienmodel} />
      <Route path='/Templewebsite/虎垛' component={虎垛} />
      <Route path='/Templewebsite/temples' component={Temples} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
