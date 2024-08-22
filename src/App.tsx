import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductZitta from "./pages/ProductZitta";
import ProductNafis from "./pages/ProductNafis";


function App() {
  const router = createBrowserRouter([
    {
      path: "/", children:[{path: "productzitta", element: <ProductZitta/>}]
    },
    {
      path: "/", children:[{path: "productNafis", element: <ProductNafis/>}]
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;