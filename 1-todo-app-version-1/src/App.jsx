function App() {
  return (
    <center class="todo-container">
      <h1>TODO App by Ayush</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Tasks here!" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>

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
      </div>
    </center>
  );
}

export default App;
