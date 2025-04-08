import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root />,
    children: [
      {path: '/', element: <Homepage />},
      {path: '/products', element: <Products />}
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
