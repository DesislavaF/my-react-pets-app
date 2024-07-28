import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import EditPet from './components/EditPet/EditPet';
import CreatePet from './components/CreatePet/CreatePet';
import auth from './utils/firebase';
import { useEffect, useState } from 'react';


import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
      setUser(user);
    }, []);

  

  return (
    <div className="container">
      <Header />
      <h1>{user?.email}</h1>
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/pets/details/:petId" exact component={PetDetails} />
        <Route path="/pets/details/:petId/edit" component={EditPetDetails} />
        <Route path="/pets/create" component={CreatePet} />
        <Route path="/pets/:petId/edit" component={EditPet} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" render={() => {
              auth.signOut();
              return <Redirect to="/" />
            }} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;