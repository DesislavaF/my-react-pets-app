import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import EditPet from './components/EditPet/EditPet';
import CreatePet from './components/CreatePet/CreatePet';
import auth from './utils/firebase'; // Importing the auth object
import './App.css';

const Logout = () => {
  useEffect(() => {
    auth.signOut();
  }, []);

  return <Redirect to="/" />;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <Header user={user} />
      
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/pets/details/:petId" exact component={PetDetails} />
        <ProtectedRoute path="/pets/details/:petId/edit" component={EditPetDetails} />
        <ProtectedRoute path="/pets/create" component={CreatePet} />
        <ProtectedRoute path="/pets/:petId/edit" component={EditPet} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;