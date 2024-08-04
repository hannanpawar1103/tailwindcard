import React from 'react'
import { useState , useEffect } from 'react';
import { useRound } from '../Context/RoundContext.jsx';

const Code = () => {
    
  const [cardHtml, setCardHtml] = useState('');
  const {round} = useRound()

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
    <pre className="bg-gray-800 flex text-white p-4 rounded-lg  w-96 overflow-x-scroll">
      <code>{cardHtml}</code>
    </pre>
  )
}

export default Code
