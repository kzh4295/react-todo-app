import React, { useState } from 'react';

// 할 일을 나타내는 Todo 타입 정의
interface Todo {
  id: number;      // 고유 식별자
  text: string;    // 할 일 텍스트
  completed: boolean; // 완료 여부
}

// React 함수 컴포넌트 정의
const App: React.FC = () => {
  // 할 일 목록을 저장할 상태 변수 todos와 그 상태를 업데이트할 함수 setTodos
  const [todos, setTodos] = useState<Todo[]>([]);

  // 할 일을 추가하는 함수
  const addTodo = (newTodo: string) => {
    // 입력된 내용이 공백이 아닌 경우에만 실행
    if (newTodo.trim() !== '') {
      // 새로운 할 일을 todos 배열에 추가
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: prevTodos.length + 1, // 현재 할 일의 개수 + 1을 사용하여 고유 ID 생성
          text: newTodo,         // 사용자가 입력한 내용 저장
          completed: false,      // 새로운 할 일은 완료되지 않았으므로 false
        },
      ]);
    }
  };

  // 할 일의 완료 상태를 토글하는 함수
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 할 일을 제거하는 함수
  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/* <h1>Todo List</h1> */}
      <input
        type="text"
        placeholder="Add a new task"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.currentTarget.value);
            e.currentTarget.value = ''; // 입력 필드 초기화
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
