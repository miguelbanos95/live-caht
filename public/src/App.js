import { Routes, Route } from "react-router-dom"; 
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import Chat from "./views/Chat/Chat"





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Chat/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
