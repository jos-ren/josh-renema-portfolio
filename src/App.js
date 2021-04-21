import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import Projects from "./pages/Projects.js"

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>

            <Route exact path="/" component={Home} />
            <Route exact path="/projects/:id" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />

          </Switch>
        )}
      />
    </Router >
  );
}

export default App;
