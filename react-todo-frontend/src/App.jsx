import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast'; // <-- 1. Import Toaster
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* 2. Add the Toaster here, styled for Dark Mode! */}
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: 'var(--color-secondary)',
              color: 'var(--color-foreground)',
              border: '1px solid var(--color-border)',
            },
            success: { iconTheme: { primary: 'var(--color-primary)', secondary: 'white' } }
          }} 
        />
        
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}