import {useState} from "react";
const Header = () => {
const [res,setRes]=useState(true);
const nav=document.getElementById("nav-links");
  const handleClickMenu=(e)=>{
  if(nav.style.display=="none"){
   nav.style.display="block";
   setRes(false)
  }else{
    nav.style.display="none";
  setRes(true);
  }
  }
  return (
    <header className="header-main">
      <img
        src="\images\spotify.png"
        alt="pic" width="100rem"
      />
      {/* <input type="checkbox" id="menu"></input>
      <label htmlFor="menu" className="menu" id="menubutton" onClick={handleClickMenu}>
     {res? <i className= "fa fa-bars"></i>:<i className="fa-solid fa-xmark"></i>}
      </label> */}
      <button onClick={handleClickMenu} className="menu">{res==true?<i className="fa fa-bars"></i>:<i className="fa-mark fa-xmark"></i>}</button>
      <nav id="nav-links">
        <ul>
          <li>primium</li>
          <li>Support</li>
          <li>Download</li>
          <li>|</li>
          <li>Sign up</li>
          <li>log in</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
