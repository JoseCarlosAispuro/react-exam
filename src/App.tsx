import React from 'react';
import './styles/main.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/index";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import PokemonDetails from "./pages/pokemon-details";
import Profile from "./pages/profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/sign-up"  element={<SignUp />} />
            <Route path="/sign-in"  element={<SignIn />} />
            <Route path="/pokemon/:pokemonName" element={<ProtectedRoute><PokemonDetails /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
    </Router>
  );
}

export default App;
