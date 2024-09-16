import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./components/Layout";
import routerInfo from "./shared/routing/routerInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routerInfo.map(({ path, element: Element }) => ({
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
