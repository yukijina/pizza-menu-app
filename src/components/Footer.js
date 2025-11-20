import React from 'react';

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {isOpen ? (
        <div>
          <p>We're open until {closeHour}:00. Come visit us or order online</p>
          <button>Order</button>
        </div>
      ) : (
        <p>
          We're closed now. We're happy to welcome you between {openHour}:00 and{' '}
          {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
