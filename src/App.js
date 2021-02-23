import logo from './logo.svg';
import './App.css';
import Demo from "./demo";
import Giphy from "./giphy";
import Calculator from "./calculator";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Functional components - modern way of writing components
// class based components

function Home() {
    const onSomethingClickedInHomeComponent = async () => {

    };

    return (
        <h2 className={'text-4xl font-bold text-blue-600'}>I am on Home page</h2>
    );
}

function About() {
    return <h2 className={'text-4xl font-bold text-blue-600'}>I am on About page</h2>;
}

function Users() {
    return <h2 className={'text-4xl font-bold text-blue-600'}>I am on User page</h2>;
}


function App() {

    const onSomethingClickedInAppComponent = async () => {

    };

  return (
      <Router>

          <div className="App"  style={{padding: '50px'}}>

              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/about">About</Link>
                      </li>
                      <li>
                          <Link to="/users">Users</Link>
                      </li>
                      <li>
                          <Link to="/calculator">Calculator</Link>
                      </li>
                  </ul>
              </nav>


              <Switch>
                  <Route path="/calculator">
                      <Calculator />
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/users">
                      <Users />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>

              {/*<Demo />*/}
              {/*<Giphy />*/}

              {/*<Giphy />*/}

              {/*<Calculator />*/}


              {/*<br/>*/}
              {/*<br/>*/}
              {/*<header className="App-header">*/}
              {/*  <img src={logo} className="App-logo" alt="logo" />*/}
              {/*  <p>*/}
              {/*    Edit <code>src/App.js</code> and save to reload.*/}
              {/*  </p>*/}
              {/*  <a*/}
              {/*    className="App-link"*/}
              {/*    href="https://reactjs.org"*/}
              {/*    target="_blank"*/}
              {/*    rel="noopener noreferrer"*/}
              {/*  >*/}
              {/*    Learn React*/}
              {/*  </a>*/}
              {/*</header>*/}
              {/*JSX*/}
          </div>

      </Router>

  );
}

export default App;
