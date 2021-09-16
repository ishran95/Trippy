import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"; 
import Home from "./components/Home.jsx";
import hotelcity from "./components/Hotels.jsx";
import hotel from "./components/HotelPage.jsx";
import Navbar from "./core/Navbar.jsx";
import Error404 from "./components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
       <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hotels/:city" component={hotelcity} />
            <Route path="/hotel/:id" component={hotel} />
            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
    </div>
  )
}



