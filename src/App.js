import './App.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Views/Home'
import Cart from './Views/Cart'
import Pizza from './Views/Pizza'
import { ContextPizzas } from './context.jsx';

function App() {
  console.log("hola")

  return (
    <BrowserRouter>
      <ContextPizzas childrenComponent={

        <div>
          <Navbar />
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pizza/:id' element={<Pizza />} />
            <Route path='/carrito' element={<Cart />} />
          </Routes>
        </div>
      } />




    </BrowserRouter>

  );
}

export default App;
