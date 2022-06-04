import "./App.css";
import { Provider } from "react-redux";
import { store } from "./component/features/store";
import CounterCompunent from "./component/counterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./component/Todos/TodoList";
import AddTodoForm from "./component/Todos/AddTodoForm";
import TotalCompleteItems from "./component/Todos/TotalCompleteTodo";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <CounterCompunent /> */}
        {/* <h1>hello</h1> */}
        <div className="App container">
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
        </div>
      </Provider>
    </>
  );
}

export default App;
