import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'
import Calendar from './component/Calendar';
import HolidayAsk from './component/HolidayApplication';
import HolidayApproval from './component/HolidayApproval';
import HolidayAbout from './component/HolidayAbout';

function App() {


  const [navActive, setNavActive] = useState(['underline', 'nav_li', 'nav_li', 'nav_li', 'nav_li']);
  const [showIdx, setShowIdx] = useState(0)
  const navigatorComponent = (navIdx) => {
    setNavActive(navActive.map((_, idx) => (idx === navIdx ? 'underline' : 'nav_li')));
    setShowIdx(navIdx)
  };

  const navItems = ['달력', '조회', '신청', '승인', '관리'];
  const components = [
    <Calendar />,
    <HolidayAbout />,
    <HolidayAsk />,
    <HolidayApproval />
  ]

  return (
    <>
      <div className="App">
        <h2>연차 및 월차 관리 시스템</h2>
        <ul className="nav_bar">
          {
            navItems.map((text, index) => (
              <li key={index} onClick={() => navigatorComponent(index)}>
                <span className={navActive[index]}>{text}</span>
              </li>
            ))
          }
        </ul>
        {components[showIdx]}
      </div>

    </>
  );
}

export default App;
