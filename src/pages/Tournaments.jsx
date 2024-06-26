import { useEffect, useState } from 'react';
import tournamentService from '../services/tournament';
import styled from 'styled-components';
import { Spin } from 'antd';

const Tournaments = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const response = await tournamentService.getTournaments();
                console.log("response", response.data);
                setTournaments(response.data.started);
            } catch (error) {
                console.error('Error fetching tournaments:', error);
            }
        };

        fetchTournaments();
    }, []);

    return (
        <Container>
            <Title>Ongoing Tournaments</Title>
            {tournaments.map(tournament => (
                <TournamentContainer key={tournament.id}>
                    <thead>
                        <tr>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Status</TableHeader>
                            <TableHeader>Start Time</TableHeader>
                            <TableHeader>End Time</TableHeader>
                            <TableHeader>System</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>{tournament?.fullName}</TableCell>
                            <TableCell>{tournament?.status}</TableCell>
                            <TableCell>{new Date(tournament?.startsAt).toLocaleString()}</TableCell>
                            <TableCell>{new Date(tournament?.finishesAt).toLocaleString()}</TableCell>
                            <TableCell>{tournament.system}</TableCell>
                        </TableRow>
                    </tbody>
                </TournamentContainer>
            ))}
        </Container>
    );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const TournamentContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  background-color: #34495e;
  color: #ecf0f1;
  text-align: left;
  padding: 12px 15px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
`;

export default Tournaments;
