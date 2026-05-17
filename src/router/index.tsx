import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import TodoListPage from "../pages/TodoList/TodoListPage";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects/todo-list", element: <TodoListPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
