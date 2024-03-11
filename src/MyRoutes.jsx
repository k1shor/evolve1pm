import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./pages/App"
import Layout from "./components/layout/Layout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

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

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes