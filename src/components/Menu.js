import React from 'react';
import Pizza from './Pizza';
import pizzaData from '../data';

export default function Menu() {
  return (
    <main>
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </div>
    </main>
  );
}
