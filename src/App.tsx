import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductZitta from "./pages/ProductZitta";


function App() {
  const router = createBrowserRouter([
    {
      path: "/", children:[{path: "productzitta", element: <ProductZitta/>}]
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;