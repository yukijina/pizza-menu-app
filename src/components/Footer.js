import React from 'react';

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 4;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {isOpen && (
        <div>
          <p>We're open until {closeHour}:00. Come visit us or order online</p>
          <button>Order</button>
        </div>
      )}
    </footer>
  );
}
