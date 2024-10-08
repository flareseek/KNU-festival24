/**
 * @license
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

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
