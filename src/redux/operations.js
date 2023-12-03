import axios from 'axios';

const { createAsyncThunk } = require('@reduxjs/toolkit');
axios.defaults.baseURL = 'https://655cd35125b76d9884fe02fd.mockapi.io';

export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (todo, thunkAPI) => {
    try {
      const { data } = await axios.post('/todos', todo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/todos/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
