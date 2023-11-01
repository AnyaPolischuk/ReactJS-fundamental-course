import { Route, Routes, Navigate } from "react-router-dom";
import { About } from "../pages/About";
import Posts from "../pages/Posts";
import { Error } from "../pages/Error";
import { PostIdPage } from "../pages/PostIdPage";
import { Login } from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context";

export const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  return (
    isAuth 
      ? 
       <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" exact element={<Posts />} />
          <Route path="/posts/:id" exact element={<PostIdPage />} />
          <Route path='*' element={<Navigate to='/posts' replace />} />
        </Routes>
      :
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
   
  )
}