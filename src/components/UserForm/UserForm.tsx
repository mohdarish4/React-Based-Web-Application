import { useState, useEffect, useRef } from 'react';
import { TextField, Button, Stack, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useUnsavedChanges } from './useUnsavedChanges';
import { generateId } from '../../utils/generateId';
import { UserData } from '../../types';

export const UserForm = () => {
    
    const initialData = (() => {
      const savedData = localStorage.getItem('userData');
      return savedData 
        ? JSON.parse(savedData)
        : {
            id: generateId(),
            name: '',
            address: '',
            email: '',
            phone: '',
          };
    })();
  
    const initialDataRef = useRef<UserData>(initialData);
  
    const [formData, setFormData] = useState<UserData>(initialData);
    const [isDirty, setIsDirty] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [navigationConfirmed, setNavigationConfirmed] = useState(false);


  
  useUnsavedChanges(isDirty);

  useEffect(() => {
    const handleRouteChange = () => {
      if (isDirty && !navigationConfirmed) {
        setShowWarning(true);
        return false;
      }
      return true;
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [isDirty, navigationConfirmed]);

  useEffect(() => {
    const dirty = JSON.stringify(formData) !== JSON.stringify(initialDataRef.current);
    setIsDirty(dirty);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    initialDataRef.current = formData;
    setIsDirty(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNavigationConfirm = () => {
    setNavigationConfirmed(true);
    setShowWarning(false);
    
  };

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} maxWidth="600px" margin="auto">
        <TextField
          name="name"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          name="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          name="address"
          label="Street Address"
          value={formData.address}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={3}
        />

        <TextField
          name="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          fullWidth
          inputProps={{ pattern: "[0-9]{10}" }}
        />

        <Button 
          type="submit" 
          variant="contained" 
          size="large"
          disabled={!isDirty}
        >
          Save Data
        </Button>
      </Stack>
    </form>
    <Dialog open={showWarning}>
        <DialogTitle>Unsaved Changes</DialogTitle>
        <DialogContent>
          You have unsaved changes. Are you sure you want to leave?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowWarning(false)}>Stay</Button>
          <Button onClick={handleNavigationConfirm} color="error">
            Leave Anyway
          </Button>
        </DialogActions>
      </Dialog>
    </>

  );
};