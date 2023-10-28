import { Analytics } from '@vercel/analytics/react';
import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import Todo from "./components/Todo";

function App() {
  return <div className="App">
    <TodoWrapper></TodoWrapper>
    <Analytics/>
  </div>;
}

export default App;
