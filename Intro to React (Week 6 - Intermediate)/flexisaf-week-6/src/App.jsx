import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Todo App
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new todo..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>

        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No todos yet. Add one above!
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
              >
                <span className="text-gray-800">{todo.text}</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <div  className="text-center mt-8 text-gray-600">
        View{" "}
        <span className="text-blue-500">
          <a 
          target="_blank"
          href="https://github.com/Rukkyoo/Flexisaf-Internship-May-2025-Cohort/tree/main/Intro%20to%20React%20(Week%206%20-%20Intermediate)">
            Github
          </a>
        </span>{" "}
        repo here
      </div>
    </div>
  );
}

export default App;
