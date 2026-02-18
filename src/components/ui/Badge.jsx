import React from 'react';

function Badge({ text }) {
  return (
    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
      {text}
    </span>
  );
}

export default Badge;
