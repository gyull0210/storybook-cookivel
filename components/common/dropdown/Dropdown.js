import { useState, useEffect, useRef } from 'react'
import useDetectClose from '../../hooks/useDetectClose'

export default function Dropdown({label, menu}){

  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  
  const handleDropdown = (e) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="flex itesm-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 active:bg-gray-200"
        onClick={handleDropdown}
      >
        {label}
      </button>
      <div 
        ref={dropDownRef}
        className={handleDropdown ? "absolute opacity-0 translate-y-0": "absolute opacity-1 origin-top-right bg-white w-56 -translate-y-4 p-2 border shadow-md duration-150" }
        role="menu"
        tabIndex={-1}
        >
          d
          {menu}      
      </div>
    </div>
  )
}