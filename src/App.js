import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Effect from './useEffect/useEffect';
import State from './useState/useState';
import Memo from './useMemo/useMemo';
import Ref from './useRef/useRef';
import Context from './useContext/useContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/useEffect">
          <Effect/>
        </Route>
        <Route path="/useMemo">
          <Memo/>
        </Route>
        <Route path="/useState">
          <State/>
        </Route>
        <Route path="/useRef">
          <Ref/>
        </Route>
        <Route path="/useContext">
          <Context />
        </Route>
        <Route path="/">
          <h1>Welcome to react hooks cours</h1>
          <Link to="/useEffect">useEffect</Link>
          <br/>
          <Link to="/useMemo">useMemo</Link>
          <br/>
          <Link to="/useState">useState</Link>
          <br/>
          <Link to="/useRef">useRef</Link>
          <br/>
          <Link to="/useContext">useContext</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
