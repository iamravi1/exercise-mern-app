import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './index.css';
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
            <Navbar />
      <div className="container">

      <br/>
      <Routes>
      <Route path="/" exact element={<ExercisesList/>} />
      <Route path="/create" element={<CreateExercise/>} />
      <Route path="/user" element={<CreateUser/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;