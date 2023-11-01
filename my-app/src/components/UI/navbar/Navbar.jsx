import { Link } from "react-router-dom";
import { MyButton } from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const exit = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButton onClick={exit}>Выйти</MyButton>
        <div className="navbar__links">
          <Link to="./about">О сайте</Link>
          <Link to="./posts">Посты</Link>
        </div>
      </div>
  ) 
}