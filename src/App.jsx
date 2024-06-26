import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home";
import Tournament from "./services/tournament";
import Profile from "./pages/Profile";
import Leaderboards from "./pages/Leaderboards";

function App() {

  return (
    <Router>
      App

      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/leaderboard" element= {<Leaderboards/>}/>
        <Route path="/tournaments" element= {<Tournament/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
