import React from 'react';
import {
  createBrowserRouter,
  RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Root from './pages/Root';
import Error from './pages/Error';
import ProductDetails from './pages/ProductDetails';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/product' element={<Home/>}/>
//   </Route>
// );

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <Error />, /* react router dom page에서 제공해주는 오류 페이지가 아닌 직접 작성한 오류 페이지 전송 */
    children:[
      {index:true, element: <Home />}, // /가 없을 때는 상대경로로 상단의 path에서 정한 루트 뒤에 붙음
      {path:'product',element: <Product />},
      {path:'product/:id', element: <ProductDetails />},
    ]
  },
])

// const router = createBrowserRouter(routeDefinitions);

const App = () => {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default App;
