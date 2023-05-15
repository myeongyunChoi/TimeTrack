import { useRef, useState } from 'react'

const Nav = ({ showComponent }) => {
    const navItems = ['달력', '조회', '신청', '승인', '관리'];
    const [navActive, setNavActive] = useState(['underline', 'nav_li', 'nav_li', 'nav_li', 'nav_li']);
  
    const navigatorActive = (navIdx) => {
      setNavActive(navActive.map((_, idx) => (idx === navIdx ? 'underline' : 'nav_li')));
      showComponent(navIdx);
    };
  
    return (
      <ul className="nav_bar">
        {navItems.map((text, index) => (
          <li key={index} onClick={() => navigatorActive(index)}>
            <span className={navActive[index]}>{text}</span>
          </li>
        ))}
      </ul>
    );
  };
  

export default Nav;
