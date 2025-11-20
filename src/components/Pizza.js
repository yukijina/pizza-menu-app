import React from 'react';

export default function Pizza({ pizza }) {
  return (
    <div>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{!pizza.price ? +pizza.price + 3 : 'Sold Out'}</span>
      </div>
    </div>
  );
}
