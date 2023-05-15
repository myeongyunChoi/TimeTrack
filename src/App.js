import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'
import Nav from './component/common/Nav'
import Calendar from './component/Calendar';
import HolidayAsk from './component/HolidayApplication';
import HolidayApproval from './component/HolidayApproval';
import HolidayAbout from './component/HolidayAbout';
import HolidayManagement from './component/HolidayManagement';

function App() {
  const components = [
    <Calendar />,
    <HolidayAbout />,
    <HolidayAsk />,
    <HolidayApproval />,
    <HolidayManagement />,
  ];

  const [showIdx, setShowIdx] = useState(0);
  const showComponent = (idx) => {
    setShowIdx(idx)
  }

  return (
    <>
      <div className="App">
        <h2>연차 및 월차 관리 시스템</h2>
        <Nav showComponent={showComponent} />
        {components[showIdx]}
      </div>
    </>
  );
}


export default App;
