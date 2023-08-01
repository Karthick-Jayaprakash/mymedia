import './App.css';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import LeftBar from './components/leftbar/LeftBar'
import RightBar from './components/rightbar/RightBar'
import Navbar from './components/navbar/Navbar'
import {useContext} from 'react'
import {DarkModeContext} from './context/DarkModeContext.js'
import {AuthContext} from './context/AuthContext.js'
import {createBrowserRouter,RouterProvider,Outlet,Navigate} from 'react-router-dom'
function App() {

  const {currentUser}= useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext)

  const LayOut = () =>{
    return(
      <div className={`theme-${darkMode ? 'light' : 'dark'}`}>
        <Navbar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <div className="main-content">
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
      )
  }

  const ProtectedRoute = ({children}) =>{
      if(!currentUser){
        return <Navigate to = '/login'/>
      }
      return children;
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element: (<ProtectedRoute>
                  <LayOut/>
                </ProtectedRoute>),
      children:[
        {
          path:'/',
          element : <Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile/>
        }
      ]
    },
    {
      path:'/login',
      element : <Login/>
    },
    {
      path:'/register',
      element : <Register/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
