import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Headerbar from "./components/Headerbar";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

// const Grocery = lazy(()=> import("./components/Grocery"))
const About = lazy(()=> import("./components/About"))

const AppLayout = () => {
  //Authentication
  const [user, setuser] = useState();

  useEffect(() => {
    //making API call and sending userName and password
    const data = {
      name: "Abhishek Ojha",
    };
    setuser(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedUser: user, setuser }}>
      <>
        <Headerbar />
        <Outlet />
      </>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....~</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....~</h1>}>
            {/* <Grocery /> */}
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resMenu",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
