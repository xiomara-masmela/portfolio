// Tutorial: https://www.youtube.com/watch?v=NO7_jgzVgbc&ab_channel=TraversyMedia
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';

import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Project from "./components/Project"
import Post from "./components/Post"
import SinglePost from "./components/SinglePost"
import SingleProject from "./components/SingleProject"
// import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component = {Home} path='/' exact />
        <Route component = {About} path='/about' />
        <Route component = {SinglePost} path='/post/:slug' />
        <Route component = {Post} path='/post' />
        <Route component = {SingleProject} path='/project/:slug' />
        <Route component = {Project} path='/project' />
      </Switch>
      
  </BrowserRouter>
  

  
  
  )
  
}

export default App;
