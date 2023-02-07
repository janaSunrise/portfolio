import { useState, useEffect } from 'react';

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-sm text-accent-secondary">
      {date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })}{' '}
      • {date.toLocaleTimeString()}
    </div>
  );
};

export default Time;
