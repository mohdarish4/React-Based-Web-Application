export const styles = {
    container: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    background: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#2196f3',
    },
    content: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
    },
  } as const;