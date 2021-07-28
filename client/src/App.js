import React, { useEffect, createContext, useReducer, useContext } from "react";
import NavBar from './components/navbar';
import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/screens/home';
import Login from './components/screens/login';
import About from './components/screens/about';
import Candidateinfo from "./components/screens/candidateinfo";
import Register from './components/screens/register';
import Internships from './components/screens/internships';
import Mentor from './components/screens/mentoralltoment'
import Selected from './components/screens/selectedcandidates'
import {reducer,initialstate} from './reducers/userReducer'


export const Usercontext = createContext()

const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(Usercontext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
      history.push('/')
    }
    else {
      history.push('/')
    }
  }, [])
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/internships">
        <Internships />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/candidateinfo">
        <Candidateinfo />
      </Route>
      <Route path="/mentoralotment">
        <Mentor/>
      </Route>
      <Route path="/selectedcandidates">
        <Selected/>
      </Route>
    </Switch>
  )
}
function App() {
  const [state,dispatch] =useReducer(reducer,initialstate)
  return (
    <Usercontext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing/>
      </BrowserRouter>
    </Usercontext.Provider>
  );
}

export default App;
