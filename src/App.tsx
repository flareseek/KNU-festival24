import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import RouterInfo from "./shared/routing/RouterInfo.tsx";


const RouterPath = RouterInfo.map((info) => {
    return {
        path: info.path,
        element: info.element,
    }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: RouterPath,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
