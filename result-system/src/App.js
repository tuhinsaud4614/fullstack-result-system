import { Route, Switch } from "react-router-dom";

import Admin from "./routes/Admin";
import Teacher from "./routes/Teacher";
import User from "./routes/User";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/teacher">
        <Teacher />
      </Route>
      <Route path="/">
        <User />
      </Route>
    </Switch>
  );
}

export default App;
