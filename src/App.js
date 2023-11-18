import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Signin from "./components/Signin";
import Signup from "./components/Signup";



function AppLayout() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

const appRouter=createBrowserRouter([
  {
      path:"/",
      element:<AppLayout/>,
      children:[
          {
              path:"/",
              element:<Body/>
          },
          {
              path:"/signup",
              element:<Signup/>,
          },
          {
            path:"/signin",
            element:<Signin/>,
          }
          
      ],
      
  }
]);

export default appRouter;
