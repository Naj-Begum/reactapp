import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Api } from "./components/Api";
import { Counter } from "./components/Counter";
import { LoginForm } from "./components/Loginpage";
import { Nav } from "./components/Nav";
import { SalmanTodo } from "./components/Salmantodo";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/counter" element={<Counter/>}/>
    <Route path="/api" element={<Api/>}/>
    <Route path="/todo" element={<Todo/>}/>
    <Route path="/login" element={<LoginForm/>}/>
    <Route path ="salmantask" element={<SalmanTodo/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
