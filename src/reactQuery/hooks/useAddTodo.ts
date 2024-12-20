import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";


export interface AddTodoContext {
    previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todoService.post,
        onMutate: (newTodo: Todo) => {
            // APPROACH 2: UPDATING DATA IN THE CACHE
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
                newTodo,
                ...todos,
            ]);
            onAdd();

            return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
            );
        },
        onError: (_error, _newTodo, context) => {
            if (!context) return;
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
        },
    });

}

export default useAddTodo;