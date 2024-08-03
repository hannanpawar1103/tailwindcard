import React from 'react'
import { useActive } from "../Context/ActiveContext.jsx";

const Active = () => {
  const {Active , setActive} = useActive()


  const handleSelectChange = (event) => {
    setActive(event.target.value)
  }

  const ActiveAttributes =[
    'none',
    'card',
    'image',
    'button',
    'all'
  ]

  return (
    <div>
      <div className="w-1/2">
          <div className="mb-4">
            <label htmlFor="round-select" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Roundness {Active}
            </label>
            <select
              id="round-select"
              onChange={handleSelectChange}
              className="bg-black text-white p-2 rounded"
            >
              {
                ActiveAttributes.map((option) => (
                  <option value={option} key={option}>{option}</option>
                ))
              }
            </select>
          </div>
        </div>
    </div>
  )
}

export default Active
