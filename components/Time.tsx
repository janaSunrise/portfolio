import { useState, useEffect } from 'react';

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p className="text-accent-secondary">
        {date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}{' '}
        · {date.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Time;
