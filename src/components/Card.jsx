import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import heart from '/heart.png';
import share from '/share.png';

function Card() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map(item => (
        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden relative group flex flex-col cursor-pointer">
          {loading ? (
            <div className="animate-pulse h-full w-full bg-gray-300"></div>
          ) : (
            <>
              <div className="relative w-full pb-[125%] overflow-hidden">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform transform group-hover:scale-105" />
                <div className="absolute top-2 left-2 flex flex-col bg-white p-4 rounded-lg gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src={heart} alt="Heart" className="w-6 h-6 mb-15px" />
                  <img src={share} alt="Share" className="w-6 h-6" />
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-1 truncate">{item.title}</h2>
                <p className="text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                <div className="flex items-center mb-2">
                  {item.tag && (
                    <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mr-2">{item.tag}</span>
                  )}
                  {item.icon && (
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded">{item.icon}</button>
                  )}
                </div>
                <div className="mt-auto">
                  <button className="bg-black w-full text-white text-sm px-4 py-2 rounded transform transition-transform duration-300 hover:bg-gray-800 hover:scale-110">
                    See more
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
