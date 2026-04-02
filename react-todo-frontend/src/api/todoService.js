import api from './axios';

export const todoService = {

  getAllTodos: async () => {
    const response = await api.get('/api/v1/toDo');
    return response.data;
  },

  createTodo: async (todoData) => {
    const response = await api.post('/api/v1/toDo/create', todoData);
    return response.data;
  },

  updateTodo: async (id, todoData) => {
    const response = await api.put(`/api/v1/toDo`, todoData);
    return response.data;
  },

  deleteTodo: async (id) => {
    const response = await api.delete(`/api/v1/toDo/${id}`);
    return response.data;
  }
};