import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from 'react';
import Layout from "./components/Layout";
import RouterInfo from "./shared/routing/RouterInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: RouterInfo.map(({ path, element: Element }) => ({
      path,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Element />
        </Suspense>
      ),
    })),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
