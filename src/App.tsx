import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsDams from "./pages/ProductsDams";


function App() {
  const router = createBrowserRouter([
    {
      path: "/", element:<ProductsDams/>
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;