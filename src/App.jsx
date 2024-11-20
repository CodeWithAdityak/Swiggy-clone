import Header from "./components/Header"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from "./components/Search"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Header/> <Main/> <Footer/></>
    },
    {
      path:"/Search",
      element:<><Search/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
