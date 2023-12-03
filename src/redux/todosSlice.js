import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  // Ім'я слайсу
  name: 'todos',
  // Початковий стан редюсера слайсу
  initialState: { items: [] },
  // Об'єкт редюсерів
  reducers: {
    addTodo(state, { payload }) {
      //   state.items = [...state.items, action.payload];
      state.items.push(payload);
    },
    deleteTodo(state, { payload }) {
      console.log('payload: ', payload);

      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

// Генератори екшенів
export const { addTodo, deleteTodo } = todosSlice.actions;
// Редюсер слайсу
export const todosReducer = todosSlice.reducer;
