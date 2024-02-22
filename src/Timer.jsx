import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const inputTimeRef = useRef(null);
  const remainingTimeRef = useRef(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    const inputTime = parseInt(inputTimeRef.current.value, 10) || 0;
    remainingTimeRef.current = inputTime;

    const intervalId = setInterval(() => {
      if (remainingTimeRef.current > 0) {
        remainingTimeRef.current -= 1;
        setDays(Math.floor(remainingTimeRef.current / (60 * 60 * 24)));
        setHours(
          Math.floor((remainingTimeRef.current % (60 * 60 * 24)) / (60 * 60))
        );
        setMinutes(Math.floor((remainingTimeRef.current % (60 * 60)) / 60));
        setSeconds(remainingTimeRef.current % 60);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  };

  return (
    <div>
      <div className="container">
        <h1>Timer</h1>
        <label className=" flex mt-20 mx-auto gap-20 items-center">
          <h3 className=" text-rose-500 text-2xl">Vaqtni kiriting (sekund):</h3>
          <input className=" border h-8" type="number" ref={inputTimeRef} />
          <button
            className="border bg-slate-600 text-white text-2xl pl-4 pr-4 p-2"
            onClick={startTimer}
          >
            Boshlash
          </button>
        </label>
        <div className=" mx-auto mt-10">
          <div>{`${days} kun`}</div>
          <div>{`${hours} soat`}</div>
          <div>{`${minutes} daqiqa`}</div>
          <div>{`${seconds} sekund`}</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
