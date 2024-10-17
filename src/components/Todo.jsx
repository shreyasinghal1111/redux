import { useSelector, useDispatch } from 'react-redux'
import { removetodo } from '../features/todo/todoslice'

const Todo = () => {
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Todos</h2>
            </div>
            <ul className="divide-y divide-gray-200">
                {todos.map((todo) => (
                    <li key={todo.id} className="px-4 py-4 sm:px-6 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">{todo.text}</span>
                        <button 
                            className="ml-2 px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={() => dispatch(removetodo(todo.id))}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo