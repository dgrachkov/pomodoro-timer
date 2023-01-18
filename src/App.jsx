import React, {useState} from 'react';
import ControlSounds from './components/ControlSounds';
import Settings from './components/Settings';
import Timer from './components/Timer';
import SettingsContext from './SettingsContext';
import Navbar from './components/Navbar';

const App = () => {
  const [showSettings, setShowSettings] = useState(false);

  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className='app relative'>
      <Navbar/>
      <div className='Home'>
        <div className='container m-auto p-4 sm:p-0'>
          <SettingsContext.Provider value={{
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
            showSettings,
            setShowSettings,
          }}>
            {showSettings ? <Settings/> : <Timer/>}
          </SettingsContext.Provider>
        </div>
        <ControlSounds/>
      </div>
    </div>
  )
}

export default App