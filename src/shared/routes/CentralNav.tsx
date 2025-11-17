import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import Home from "../../pages/home/Home"
import Products from "../../pages/products/Products"
import ProductDetailsPage from "../../pages/product-details/ProductDetails"
import Checkout from "../../pages/checkout/Checkout"
import BookAnEvent from "../../pages/book-event/BookAnEvent"
import ContactUs from "../../pages/contact-us/ContactUs"
import Cart from "../../pages/cart/Cart"
import Orders from "../../pages/dashboard/orders/Orders"

const CentralNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.products} element={<Products />} />
        <Route path={routes.productsDetails} element={<ProductDetailsPage />} />
        <Route path={routes.checkout} element={<Checkout />} />
        <Route path={routes.bookEvent} element={<BookAnEvent />} />
        <Route path={routes.contact} element={<ContactUs />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={routes.orders} element={<Orders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default CentralNav
