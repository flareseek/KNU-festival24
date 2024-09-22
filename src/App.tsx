import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./components/Layout";
import routerInfo from "./shared/routing/routerInfo";
import { Loading } from "./components/Loading";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: routerInfo.map(({ path, element: Element }) => ({
      path,
      element: (
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
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
