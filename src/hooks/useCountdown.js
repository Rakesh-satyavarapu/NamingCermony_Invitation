import { useEffect, useState } from "react";

function getTimeRemaining(targetDate) {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      completed: true
    };
  }

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    completed: false
  };
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(
    () => getTimeRemaining(targetDate)
  );

  useEffect(() => {
    const update = () => {
      setTimeLeft(getTimeRemaining(targetDate));
    };

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export default useCountdown;