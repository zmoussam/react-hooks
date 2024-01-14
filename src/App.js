import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Effect from './useEffect/useEffect';
import State from './useState/useState';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/useEffect">
          <Effect/>
        </Route>
        <Route path="/">
          <State/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
