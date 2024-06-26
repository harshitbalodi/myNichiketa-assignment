import { useEffect, useState } from 'react';
import playerService from '../services/player';
import styled from 'styled-components';
import Player from '../components/Player';

const Leaderboards = () => {
  const [leaderboards, setLeaderboards] = useState({});
  const gameTypes = ['antichess', 'blitz', 'bullet', 'classical', 'crazyhouse', 'horde', 'kingOfTheHill', 'puzzle', 'rapid', 'racingKings', 'threeCheck', 'ultraBullet'];

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const response = await playerService.getPlayerLeaderboard();
        console.log(response.data);
        setLeaderboards(response.data);
      } catch (error) {
        console.error('Error fetching leaderboards:', error);
      }
    };

    fetchLeaderboards();
  }, []);

  return (
    <Container>
      <h1>Leaderboards</h1>
      {gameTypes.map(gameType => (
        <div key={gameType}>
          <h2>{gameType.charAt(0).toUpperCase() + gameType.slice(1)} Leaderboard</h2>
          {leaderboards[gameType] && leaderboards[gameType].map(player => (
            <Player key={player.username} player={player} gameType={gameType} />
          ))}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Leaderboards;
