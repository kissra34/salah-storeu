import React, { useEffect, useState } from 'react';

function UserNotRegisteredError() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`p-4 border rounded text-red-700 bg-red-100 border-red-400 transition-transform duration-700 ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      يجب عليك التسجيل لتتمكن من الوصول إلى هذه الصفحة.
    </div>
  );
}

export default UserNotRegisteredError;
