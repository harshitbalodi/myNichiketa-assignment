import React from 'react';
import styled from 'styled-components';

const Player = ({ player, gameType }) => {
  return (
    <PlayerContainer>
      <tbody>
        <TableRow>
          <TableCell><strong>Username</strong></TableCell>
          <TableCell>{player.username}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><strong>{gameType.charAt(0).toUpperCase() + gameType.slice(1)} Rating</strong></TableCell>
          <TableCell>{player.perfs?.[gameType]?.rating}</TableCell>
        </TableRow>
      </tbody>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`;

export default Player;
