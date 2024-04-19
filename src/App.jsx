import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home, { loader as countryLoader } from "./pages/Home";
import Categories, { loader as categoryLoader } from "./pages/Categories";
import PageNotFound from "./pages/PageNotFound";
import CategoryList from "./category/CategoryList";
import Recipe from "./pages/Recipe";
import SearchResult from "./pages/SearchResult";
import Letter from "./pages/Letter";
import CountryMeal from "./pages/CountryMeal";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: countryLoader,
      },
      {
        path: "category",
        element: <Categories />,
        loader: categoryLoader,
      },
      {
        path: "category/:foodItemName",
        element: <CategoryList />,
      },
      {
        path: "ingredients/:ingredients",
        element: <Recipe />,
      },
      {
        path: "search/:searchResults",
        element: <SearchResult />,
      },
      {
        path: "letter/:letters",
        element: <Letter />,
      },
      {
        path: "country/:country",
        element: <CountryMeal />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
