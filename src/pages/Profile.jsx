import { useState } from 'react';
import userService from '../services/user';
import styled from 'styled-components';
import { Spin } from 'antd';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await userService.getUserProfile(username);
      setProfile(response.data);
      setError(null);
    } catch (err) {
      setError('User not found');
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Profile</Title>
      <SearchContainer>
        <Input 
          type="text" 
          placeholder="Enter Lichess username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={fetchProfile}>Get Profile</Button>
      </SearchContainer>
      {loading ? (
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      ) : (
        <>
          {error && <Error>{error}</Error>}
          {profile && (
            <ProfileContainer>
              <ProfileImage src={profile.perfs.image} alt="Profile Image" />
              <ProfileDetails>
                <div><strong>Username:</strong> {profile.username}</div>
                <div><strong>Bio:</strong> {profile.bio}</div>
                <div><strong>Number of games played:</strong> {profile.count.all}</div>
                <div><strong>Blitz rating:</strong> {profile.perfs.blitz.rating}</div>
                <div><strong>Rapid rating:</strong> {profile.perfs.rapid.rating}</div>
                <div><strong>Classical rating:</strong> {profile.perfs.classical.rating}</div>
              </ProfileDetails>
            </ProfileContainer>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 60%;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const SpinContainer = styled.div`
  margin-top: 20px;
`;

const Error = styled.div`
  color: red;
  margin-top: 20px;
`;

const ProfileContainer = styled.div`
  margin-top: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 20px auto;
`;

const ProfileDetails = styled.div`
  font-size: 16px;

  & > div {
    margin-bottom: 10px;
  }
`;

export default Profile;
