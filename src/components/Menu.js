import React from 'react';
import Pizza from './Pizza';
import pizzaData from '../data';

export default function Menu() {
  return (
    <main>
      <h2>Our Menu</h2>
      <div>
        {pizzaData.length !== 0 &&
          pizzaData.map((pizza) => <Pizza pizza={pizza} key={pizza.name} />)}
      </div>
    </main>
  );
}
