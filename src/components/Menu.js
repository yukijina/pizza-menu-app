import React from 'react';
import Pizza from './Pizza';
import pizzaData from '../data';

export default function Menu() {
  return (
    <main>
      <h2>Our Menu</h2>
      {pizzaData.length !== 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our storne oven, all organic, all delicious.
          </p>

          <>
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later 🍕</p>
      )}
    </main>
  );
}
