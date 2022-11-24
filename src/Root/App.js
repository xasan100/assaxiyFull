import React from "react";
import { BrowserRouter ,Route,Switch ,Redirect } from "react-router-dom";
import Cart from "../Components/Cart.jsx";
import Home from "../Components/Home.jsx";
import NavBar from "../Components/NavBar.jsx";
import NotFound from "../Components/NotFound.jsx";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import   "./App.css"
function App() {
  return (
 <BrowserRouter> 
 <ToastContainer/>
<NavBar/>
<Switch>
  <Route path={'/cart'} exact component={Cart} />
  <Route path={'/not-found'} component={NotFound} />
  <Route path={'/'} exact component={Home } />
  <Redirect to={'/not-found'}  />
</Switch>
    </BrowserRouter>
  );
}

export default App;