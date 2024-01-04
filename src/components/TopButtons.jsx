import React from 'react';

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Tokyo',
    },
    {
      id: 3,
      title: 'Sydney',
    },
    {
      id: 4,
      title: 'Paris',
    },
    {
      id: 5,
      title: 'Toronto',
    },
  ];

  return (
    <div className="flex justify-around items-center my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
