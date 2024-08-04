import React, { useCallback, useEffect, useState } from 'react'
import { useRound } from '../Context/RoundContext.jsx';
import { useActive } from '../Context/ActiveContext.jsx';

const Card = () => {
  const [AllRoundness , setAllRoundness] = useState(false)
  const [CardRoundness , setCardRoundness] = useState(false)
  const [ButtonRoundness , setButtonRoundness] = useState(false)
  const [ImageRoundness , setImageRoundness] = useState(false)
  const [cardHtml, setCardHtml] = useState('');
  
  const {round} = useRound()
  const {Active} = useActive()

  useEffect(()=>{
    if (Active === 'all') {
      console.log(Active)
      setAllRoundness(true)
      if (AllRoundness) {
        console.log(AllRoundness)
      }    
    }
    if (Active === 'card') {
      console.log(Active)
      setCardRoundness(true)
      if (AllRoundness) {
        console.log(AllRoundness)
      }    
    }
    if (Active === 'button') {
      console.log(Active)
      setButtonRoundness(true)
      if (AllRoundness) {
        console.log(AllRoundness)
      }    
    }
    if (Active === 'image') {
      console.log(Active)
      setImageRoundness(true)
      if (AllRoundness) {
        console.log(AllRoundness)
      }    
    }
  },[Active,AllRoundness])

  useEffect(() => {
    const html = `
<div className="flex justify-center">
  <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ${round ? `rounded-${round}` : 'rounded-none'}">
    <img className="${round ? `rounded-${round}` : 'rounded-none'}" src="https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet.</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quis!</p>
      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${round ? `rounded-${round}` : 'rounded-none'}">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
</div>`;
setCardHtml(html);
}, [round]);

  return (
    <div>
      <div className="flex justify-center">
          <div className={`max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 ${AllRoundness || CardRoundness ? `rounded-${round}` : `rounded-none`} `}>
              <img className={`${AllRoundness || ImageRoundness ? `rounded-${round}` : `rounded-none`}`} src="https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet.</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quis!</p>
              <a href='#' className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${AllRoundness || ButtonRoundness ? `rounded-${round}` : `rounded-none`}`}>
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /> 
                </svg>
              </a>
            </div>
          </div>
        </div>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mt-4 max-w-96 overflow-x-scroll">
          <code>{cardHtml}</code>
        </pre>
    </div>
  )
}

export default Card
