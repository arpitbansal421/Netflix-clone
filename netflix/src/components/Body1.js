import React from "react";
import Header1 from "./Header1";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login1";
import Browse from "./Browse";

function Body1() {
  <Header1></Header1>
  
  const appRouter = createBrowserRouter([{

    path:'/',
    element:<Login/>
  },{

    path:'/browse',
    element:<Browse/>
  }]);

  return(


  <div>
        <RouterProvider router={appRouter}/>
    </div>
  )

  
    
}

export default Body1;
