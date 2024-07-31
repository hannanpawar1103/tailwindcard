import React from 'react'
import { useRound } from '../Context/RoundContext.jsx'

const Select = () => {

  const {round , setround} = useRound()

  const handleSelectChange = (event) => {
    setround(event.target.value)
  }

  const roundAttributes =[
    'none',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
  ]

  return (
    <div>
      <div className="w-1/2">
          <div className="mb-4">
            <label htmlFor="round-select" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Roundness {round}
            </label>
            <select
              id="round-select"
              onChange={handleSelectChange}
              className="bg-black text-white p-2 rounded"
            >
              {
                roundAttributes.map((option) => (
                  <option value={option} key={option}>{option}</option>
                ))
              }
            </select>
          </div>
        </div>
    </div>
  )
}

export default Select
