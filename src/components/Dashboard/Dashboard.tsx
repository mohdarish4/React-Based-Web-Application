import { Box, Grid, Paper, Typography } from '@mui/material';
import { Counter } from '../Counter/Counter';
import { UserCharts } from './UserCharts';
import { UserProfilePreview } from './UserProfilePreview';

export const Dashboard = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        User Analytics Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Interactive Counter
            </Typography>
            <Counter />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <UserProfilePreview />
        </Grid>

        <Grid item xs={12}>
          <UserCharts />
        </Grid>
      </Grid>
    </Box>
  );
};