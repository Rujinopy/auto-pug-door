"use client"
import { env } from 'process';
import React, { useState } from 'react';

function SendDataComponent() {
  // const [dataToSend, setDataToSend] = useState('');

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDataToSend(event.target.value);
  // };

  const sendData = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
    const response = await fetch(`${process.env.SERVER_URL}/send-data?data=${e.currentTarget.value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e.currentTarget.value),
    });
    const message = await response.text();
  };


  return (
    <div className='bg-white max-w-6xl mx-auto'>
      <div className='flex flex-col items-center pt-20 md:pt-0 md:justify-center h-screen relative  '>
      <img src='/pug.png' alt='logo' className='md:w-1/4 w-3/4 md:absolute top-0 left-20' />
        <img src='/pug-door.png' alt='logo' className='w-full ' />
        <div className='flex md:flex-row flex-col py-2 gap-3 w-full justify-center items-center text-2xl'>
          <button className='px-4 py-3 border border-black rounded-xl w-3/4 hover:bg-emerald-500' value={"L"} onClick={ (e) => sendData(e)}>Lock</button>
          <button className='px-4 py-3 border border-black rounded-xl w-3/4 hover:bg-red-400' value={"U"} onClick={ (e) => sendData(e)}>Unlock</button>
        </div>
      </div>
    </div>
  );
}

export default SendDataComponent;
