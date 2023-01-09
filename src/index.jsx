import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import PuzzleIndex from "./routes/puzzle-index";
import Puzzle from "./routes/puzzle";
import ErrorPage from "./error-page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PuzzleIndex />,
      },
      {
        path: "/puzzles",
        element: <PuzzleIndex />,
      },
      {
        path: "/puzzles/:id",
        element: <Puzzle />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
