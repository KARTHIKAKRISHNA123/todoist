import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todoService } from '../api/todoService';

export const useTodos = () => {
  const queryClient = useQueryClient();

  // 1. Fetch all tasks
  const { data: todos = [], isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getAllTodos,
  });

  // 2. Create a task
  const addTodoMutation = useMutation({
    mutationFn: todoService.createTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }), // Instantly refreshes the list!
  });

  // 3. Update a task (Mark as completed)
  const updateTodoMutation = useMutation({
    mutationFn: ({ id, data }) => todoService.updateTodo(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  // 4. Delete a task
  const deleteTodoMutation = useMutation({
    mutationFn: todoService.deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  return {
    todos,
    isLoading,
    isError,
    addTodo: addTodoMutation.mutate,
    updateTodo: updateTodoMutation.mutate,
    deleteTodo: deleteTodoMutation.mutate,
  };
};