import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState(''); // 새로운 입력 필드 상태 추가

  const addTodo = (newText: string) => {
    if (newText.trim() === '') {
      return;
    }

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        text: newText,
        completed: false,
      },
    ]);

    setNewTodoText(''); // 입력 필드 초기화
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodoText} // 입력 필드 값 설정
        onChange={(e) => setNewTodoText(e.target.value)} // 입력 값이 변경될 때 상태 업데이트
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addTodo(newTodoText); // 입력 값을 사용하여 새로운 항목 추가
            setNewTodoText(''); // 입력 필드 초기화
          }
        }}
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
