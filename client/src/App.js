import React, {Component} from "react";
import WeatherApp from "./pages/WeatherApp"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage"


class App extends Component {
render() {
  return (
    <div className="App">
    <WeatherApp />
    </div>
  );
}
}

// const App = () => (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" component={WeatherApp} />
//         <Route exact path="/loginPage" component={LoginPage} />
//       </Switch>
//     </div>
//   </Router>
// );
export default App;
