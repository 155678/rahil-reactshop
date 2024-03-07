import "./index.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import { type FC } from 'react'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import Nav from "./components/Nav"
import {ShopContextProvider} from "../src/context/shopContext"
//props object barye inke batoniem az noe object motale bashime bayade az interface estafde koniem
const App: FC = () => {
  return (
    <div>
      <ShopContextProvider>
       <BrowserRouter>
         <Nav  />
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App

