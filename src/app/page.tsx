'use client'
import React, { useState } from 'react';

export default function Home() {
  const maxClicks = 10;
  const [clicks, setClicks] = useState(0);
  const [label, setLabel] = useState(":3");

  const handleClick = () => {
    if(clicks >= maxClicks){
      setLabel(">:3");
    } else {
      setClicks(clicks + 1);
    }
  }

  return (
    <>
      <h1>click the button, what's the worst that could happen?</h1>
      <button className="bg-red-600 rounded-full w-40 h-40" onClick={handleClick}>{label}</button>
      <h1>Pressed the button {clicks} times</h1>
    </>
  )
}
