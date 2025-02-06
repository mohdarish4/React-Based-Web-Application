import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Grid } from '@mui/material';

const mockChartData = [
  { month: 'Jan', users: 65 },
  { month: 'Feb', users: 59 },
  { month: 'Mar', users: 80 },
  { month: 'Apr', users: 81 },
  { month: 'May', users: 56 },
  { month: 'Jun', users: 55 },
];

const ageDemographics = [
  { ageGroup: '18-24', count: 31 },
  { ageGroup: '25-34', count: 45 },
  { ageGroup: '35-44', count: 28 },
  { ageGroup: '45+', count: 16 },
];

export const UserCharts = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        User Trends
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Monthly Signups
          </Typography>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#1976d2" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Age Demographics
          </Typography>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageDemographics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ageGroup" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="count" 
                  fill="#dc004e" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};