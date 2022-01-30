import React, {useReducer, useState} from "react";

const reducer = (state,action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        todos: [...state.todos, {text: action.data.text, isCompleted: false}],
        todosCount: state.todosCount + 1
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, idx) => idx === action.data.idx? {text: todo.text, isCompleted: !todo.isCompleted} : todo),
      }
    default:
      return state
  }
}


const App = () => {
  const [{todos, todosCount}, dispatch] = useReducer(reducer, {todos: [], todosCount: 0})
  const [text, setText] = useState('')

  return (
    <div>
      <div>TODOS COUNT: {todosCount}</div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({type: 'ADD_TODO', data:{text}})
        setText('')
      }}>
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {todos.map((todo,idx) => <div key={todo.text} style={{textDecoration:todo.isCompleted? 'line-through' : ''}} onClick={() => dispatch({type: 'TOGGLE_TODO', data:{idx}})}>{todo.text}</div>)}
    </div>
  );
};

export default App;