import './App.css'

function App() {

  return (
    <>
      {/* <h1 className="title">투두 리스트</h1> */}
      <div className="container">
        <div>
          <input id="todoInput" type="text" placeholder="할일을 추가해주세요!" autoFocus autoComplete="off"/>
        </div>
        <ul id="todoList"></ul>
        <button id = 'allTodo'>모두</button>
        <button id = 'leftTodo'>남은거</button>
        <button id = 'completedTodo'>완성한 거</button>
        <button id = 'completedAll'>모두 완성</button>
      </div>
    </>
  )
}

export default App
