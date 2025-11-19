import React from 'react';

export default function Pizza({ pizza }) {
  console.log(pizza);

  return (
    <div key={pizza.name}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{+pizza.price + 3}</span>
      </div>
    </div>
  );
}
