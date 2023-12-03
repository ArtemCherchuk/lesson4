import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './operations';

const todosSlice = createSlice({
  // Ім'я слайсу
  name: 'todos',
  // Початковий стан редюсера слайсу
  initialState: { items: [], isLoading: false, error: null },
  // Об'єкт редюсерів
  extraReducers: {
    [fetchTodos.pending](state) {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchTodos.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Генератори екшенів
export const { addTodo, deleteTodo } = todosSlice.actions;
// Редюсер слайсу
export const todosReducer = todosSlice.reducer;
