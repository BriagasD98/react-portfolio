import React from 'react';

// importing different page components which render unique content
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


// Using "react-router-dom" to render different page content without refreshing entire app
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <body>
      <HashRouter>
        <div className="hero">
          <div>
            <Header></Header>
          </div>
          <div>
            <Nav></Nav>
          </div>
        </div>
          <main>
            <Switch>
              <Route exact={true} path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Project} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
          </main>
      <div>
        <Footer></Footer>
      </div>
      </HashRouter>
    </body>
  );
}

export default App;
