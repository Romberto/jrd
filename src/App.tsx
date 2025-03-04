import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Header } from "./components/UI/Header/Header";

function App() {
  return (
    <div className="container app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
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
