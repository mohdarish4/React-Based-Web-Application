import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Counter } from './components/Counter/Counter';
import { UserForm } from './components/UserForm/UserForm';
import { RichTextEditor } from './components/RichTextEditor/RichTextEditor';
import { Button, Stack } from '@mui/material';
import { Dashboard } from './components/Dashboard/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
    
      <Stack spacing={2} direction="row" justifyContent="center" p={2}>
        <Button component={Link} to="/dashboard">Dashboard</Button>
        <Button component={Link} to="/">Counter</Button>
        <Button component={Link} to="/form">User Form</Button>
        <Button component={Link} to="/editor">Editor</Button>
      </Stack>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/editor" element={<RichTextEditor />} />
      </Routes>
    </BrowserRouter>
  );
}