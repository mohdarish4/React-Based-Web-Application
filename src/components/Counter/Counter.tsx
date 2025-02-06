import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Button, Stack, Typography } from '@mui/material';
import { styles } from './styles';

export const Counter = () => {
  const [count, setCount] = useState(0);
  
  const backgroundAnimation = useSpring({
    height: `${count}%`,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div style={styles.container}>
      <animated.div style={{ ...styles.background, ...backgroundAnimation }} />
      <Stack spacing={2} style={styles.content}>
        <Typography variant="h3">{count}</Typography>
        <Stack direction="row" spacing={2}>
          <Button 
            variant="contained" 
            onClick={() => setCount(c => c + 1)}
          >
            Increment
          </Button>
          <Button 
            variant="outlined" 
            onClick={() => setCount(c => c - 1)}
          >
            Decrement
          </Button>
          <Button 
            variant="text" 
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};