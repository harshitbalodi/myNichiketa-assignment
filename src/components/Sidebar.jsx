import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/" exact>
        {/* Add your icon here */}
        Home
      </SidebarLink>
      <SidebarLink to="/profile">
        {/* Add your icon here */}
        Profile
      </SidebarLink>
      <SidebarLink to="/leaderboard">
        {/* Add your icon here */}
        Leaderboards
      </SidebarLink>
      <SidebarLink to="/tournaments">
        {/* Add your icon here */}
        Tournaments
      </SidebarLink>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const SidebarLink = styled(NavLink)`
  color: #ecf0f1;
  text-decoration: none;
  padding: 15px;
  font-size: 18px;
  &.active {
    background-color: #34495e;
  }
  &:hover {
    background-color: #34495e;
  }
`;

export default Sidebar;
