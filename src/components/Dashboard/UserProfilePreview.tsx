import { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { UserData } from '../../types';

export const UserProfilePreview = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  if (!userData) return null;

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Latest User Profile
      </Typography>
      
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary={userData.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={userData.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address" secondary={userData.address} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone" secondary={userData.phone} />
        </ListItem>
      </List>
    </Paper>
  );
};