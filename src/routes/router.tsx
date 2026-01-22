import { createBrowserRouter, Navigate } from "react-router-dom";
import { Ingredients, Kitchen, Restaurant, Storage, NotFound } from "../pages";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/ingredients" replace /> },

  { path: "/restaurant", element: <Restaurant /> },
  { path: "/kitchen", element: <Kitchen /> },
  { path: "/ingredients", element: <Ingredients /> },
  { path: "/storage", element: <Storage /> },

  { path: "*", element: <NotFound /> },
]);
