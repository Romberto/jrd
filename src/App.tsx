import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>}></Route>
        <Route
          path="*"
          element={
            <h1>
              Указанный путь не существует. Пожалуйста, проверьте правильность
              ввода и попробуйте снова.
            </h1>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
