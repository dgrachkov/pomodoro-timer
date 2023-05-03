import React, { useContext, useState } from 'react'
import SettingsContext from '../SettingsContext'

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);

  const [savedTimeWork, setSavedTimeWork] = useState(settingsInfo.workMinutes);
  const [savedTimeBreak, setSavedTimeBreak] = useState(settingsInfo.breakMinutes);

  const handleChangeWork = event => {
    const result = event.target.value.replace(/[^\d]/g,'');

    settingsInfo.setWorkMinutes(result);
  };

  const handleChangeBreak = event => {
    const result = event.target.value.replace(/[^\d]/g,'');

    settingsInfo.setBreakMinutes(result);
  };

  function goBack() {
    if (settingsInfo.workMinutes === '' || settingsInfo.workMinutes === '0') {
      settingsInfo.setWorkMinutes(savedTimeWork);
    } else {
      settingsInfo.setShowSettings(false);
    }

    if (settingsInfo.breakMinutes === '' || settingsInfo.breakMinutes === '0') {
      settingsInfo.setBreakMinutes(savedTimeBreak);
    } else {
      settingsInfo.setShowSettings(false);
    }
  }

  return (
    <div className='mt-8'>
      <div className='container m-auto px-0'>
        <form className='block md:flex'>
          <div className='w-full'>
            <label className='text-[17px] text-[#ededed]'>Work time</label>
            <input
              className='rounded-md w-full mt-[6px] block border border-gray-600 text-[#FFFFFE] bg-[#16161A] outline-none focus:border-[#7F5AF0] py-3 px-[10px]'
              value={settingsInfo.workMinutes}
              onChange={handleChangeWork}
            />
          </div>
          <div className='mt-6 md:mt-0 md:ml-8 w-full'>
            <label className='text-[17px] text-[#ededed]'>Break time</label>
            <input
              className='rounded-md w-full mt-[6px] block border border-gray-600 text-[#FFFFFE] bg-[#16161A] outline-none focus:border-[#7F5AF0] py-3 px-[10px]'
              value={settingsInfo.breakMinutes}
              onChange={handleChangeBreak}
            />
          </div>
        </form>
        <div className='mt-6 flex justify-end'>
          <button 
            className='btn-effect cursor-pointer p-[10px] border border-gray-600 rounded-md'
            onClick={goBack}>
            <img src='icons/apply.svg' className='w-7 sm:w-8 h-7 sm:h-8'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings