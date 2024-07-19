import React from 'react';

const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

return (
    <div className="flex flex-wrap justify-center">
      {colors.map((color, index) => (
        <div key={index} className={`m-2 w-16 h-16 rounded-full bg-${color}`}></div>
      ))}
    </div>

  );

