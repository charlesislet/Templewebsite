import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Tien from './pages/天后';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    {/* <div className='container'> */}
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/tien' component={Tien} />
    </Switch>
    {/* </div> */}
    </Router>
    </>
  );
}

export default App;
