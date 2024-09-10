import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks for login, signup, and logout
export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
});

export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await fetch('http://localhost:5000/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Signup failed');
  }
  return response.json();
});

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await fetch('http://localhost:5000/api/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Logout failed');
  }
  return response.json();
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.status = 'idle'; // Reset status to idle after logout
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;