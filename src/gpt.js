import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [inputTime, setInputTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isActive && !isPaused && time > 0) {
      intervalRef.current = setInterval(
        () => setTime((prev) => prev - 1),
        1000
      );
    } else if (time === 0 && isActive) {
      clearInterval(intervalRef.current);
      audioRef.current.play();
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused, time]);

  const handleStart = () => {
    const totalSeconds =
      inputTime.hours * 3600 + inputTime.minutes * 60 + inputTime.seconds;
    setTime(totalSeconds);
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => setIsPaused(!isPaused);

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
    setInputTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputTime((prev) => ({
      ...prev,
      [name]: Math.max(0, parseInt(value, 10) || 0),
    }));
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="flex space-x-2">
        <Input
          name="hours"
          value={inputTime.hours}
          onChange={handleChange}
          placeholder="Hours"
        />
        <Input
          name="minutes"
          value={inputTime.minutes}
          onChange={handleChange}
          placeholder="Minutes"
        />
        <Input
          name="seconds"
          value={inputTime.seconds}
          onChange={handleChange}
          placeholder="Seconds"
        />
      </div>
      <div className="text-4xl font-mono">{formatTime(time)}</div>
      <div className="flex space-x-2">
        {!isActive ? (
          <Button onClick={handleStart} className="bg-green-500">
            Start
          </Button>
        ) : (
          <>
            <Button onClick={handlePause} className="bg-yellow-500">
              {isPaused ? "Resume" : "Pause"}
            </Button>
            <Button onClick={handleReset} className="bg-red-500">
              Reset
            </Button>
          </>
        )}
      </div>
      <audio ref={audioRef} src="/alarm.mp3" />
    </div>
  );
};

const Input = ({ name, value, onChange, placeholder }) => (
  <input
    type="number"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="p-2 border rounded"
  />
);

const Button = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-white rounded ${className}`}
  >
    {children}
  </button>
);

export default Timer;
