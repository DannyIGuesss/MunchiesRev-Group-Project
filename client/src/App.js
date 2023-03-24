import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Restaurants from './components/Restaurants';
import Login from './components/Login';
import Register from './components/Register';
import Reviews from './components/Reviews';
import CreateReview from './components/CreateReview';
import UpdateReview from './components/UpdateReview';


function App() {
  const [user, setUser] = useState({})
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>                          {/* Landing Page */}
          <Route exact path='/Restaurants' element={<Restaurants/>}/>           {/* Show all Restraunts and let the user click cards to view that specific restraunt's reviews */}
          <Route exact path='/Login' element={<Login setUser={setUser}/>}/>                       {/* Login lol */}
          <Route exact path='/Register' element={<Register/>}/>                 {/* Register a new user */}
          <Route exact path='/Reviews/:_id' element={<Reviews/>}/>              {/* Shows all reviews for a specific restraunt */}
          <Route exact path='/CreateReview' element={<CreateReview/>}/>         {/* Create a review for a specific restraunt */}
          <Route exact path='/UpdateReview' element={<UpdateReview/>}/>    {/* Update a specific review */}{/*/:_id*/}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
