import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Leaderboards from "./pages/Leaderboards";
import Tournaments from "./pages/Tournaments";
import Sidebar from "./components/Sidebar";
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <AppContainer>
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboards />} />
            <Route path="/tournaments" element={<Tournaments />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export default App;
