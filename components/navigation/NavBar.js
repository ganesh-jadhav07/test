import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import style from '../../styles/navBar.module.css';

function NavBar() {
  return (
    <nav className={style.mainNav}>
      {/* logo part */}
      <div className={style.logo}>
        <h2>
          <span>Bluepineapple</span>
        </h2>
      </div>

      {/* menu part  */}
      <div className={style.menuLink}>
        <div className={style.menuLinkUl}>
          <ul>
            <li>Home</li>
          </ul>
          <ul>
            <li>Services</li>
          </ul>
          <ul>
            <li>Innovation</li>
          </ul>
          <ul>
            <li>About</li>
          </ul>
          <ul>
            <li>Careers</li>
          </ul>
          <ul>
            <li>Blogs</li>
          </ul>
        </div>
      </div>

      {/* hamburger part */}
      <div className={style.hamburger}>
        <Bars3Icon style={{height:'2.5rem',color:'blue'}}/>
      </div>
    </nav>
  );
}

export default NavBar;
