import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/homepage";
import Toolbar from "./containers/Header/Toolbar/Toolbar";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Toolbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        {/* <Route path="/Sigin" exact component={Sigin} /> */}

        {/* <Route
          path="/addstudent"
          exact
          render={() => (
            <Suspense fallback={<p>....loading</p>}>
              <AddStudent />
            </Suspense>
          )}
        /> */}
        {/* <Route path="/student/:id" exact component={StudentEdit} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
      <div></div>
    </BrowserRouter>
  );
};

export default App;
