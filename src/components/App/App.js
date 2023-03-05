import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';


function App() {
return (
    <>
           <Switch>
            <Route path="/" exact>
              <Header />
              <Main />
              <Footer />
            </Route>
            <Route path="/signin">
                <Login  /> 
            </Route>
            <Route path="/signup">
            <Register />
            </Route>
            <Route path="/movies">
                <Movies />
            </Route>
            <Route path="/saved-movies">
            <SavedMovies />
      
            </Route>
            <Route path="/profile"></Route>
            <Profile  />
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
     
</>
  );
}

export default App;