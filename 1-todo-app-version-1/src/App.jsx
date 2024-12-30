import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />

        <div class="row">
          <div class="col-6">
            Buy milk
          </div>
          <div class="col-4">
            4/10/24
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            Learn React
          </div>
          <div class="col-4">
            30/12/24
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
    </center>
  );
}

export default App;
