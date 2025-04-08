import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Errorpage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {path: '/', element: <Homepage />},
      {path: '/products', element: <Products />},
      {path: '/products/:id', element: <ProductDetails />}
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
