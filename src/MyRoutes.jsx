import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./pages/App"
import Layout from "./components/layout/Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Counter from "./components/Counter"
import Data from "./components/Data"
import Display from "./components/Display"
import Product from "./pages/Product"
import MyCounter from "./components/reducers/MyCounter"
import GameDisplay from "./components/reducers/GameDisplay"

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />

                    <Route path="products" element={<Products />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="contact" element={<Contact />} />


                    <Route path="counter" element={<Counter/>}/>
                    <Route path="data" element={<Data/>}/>

                    <Route path="display" element = {<Display/>}/>
                    <Route path="product/:id" element = {<Product/>}/>


                    <Route path="mycounter" element = {<MyCounter/>}/>
                    <Route path="game" element = {<GameDisplay/>} />


                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes