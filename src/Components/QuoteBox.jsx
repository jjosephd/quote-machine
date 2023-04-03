import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaTumblr } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import $ from 'jquery';

function QuoteBox({ onColorChange }) {
  const [toggleColor, setToggleColor] = useState('#00805a');
  const colors = [
    '#C67171	',
    '#CD9B9B	',
    '#EEE9E9	',
    '#EE3B3B	',
    '#FF7256		',
    '#8B4C39	',
    '#5E2612	',
    '#E47833		',
    '#A68064		',
  ];
  useEffect(() => {
    document.body.style.backgroundColor = toggleColor;
  }, [toggleColor]);

  function handleClick() {
    const random = Math.floor(Math.random() * colors.length);
    setToggleColor(colors[random]);
  }

  return (
    <div id="wrapper">
      <div id="quote-box">
        <div id="quote-container">
          <q
            id="text"
            style={{
              color: toggleColor,
              transition: `800ms ease-in-out`,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quo, cum ut autem quasi accusamus maxime deleniti, quibusdam atque
            tenetur itaque. Quo voluptates unde tempora vero nemo labore earum
            vitae!
          </q>
        </div>
        <div id="name-row">
          <h5 id="author">Name</h5>
        </div>
        <div className="button-row">
          <div
            className="btn"
            id="twitter"
            style={{
              backgroundColor: toggleColor,
              transition: `800ms ease-in-out`,
            }}
          >
            <FaTwitter />
          </div>
          <div
            className="btn"
            id="tumblr"
            style={{
              backgroundColor: toggleColor,
              transition: `800ms ease-in-out`,
            }}
          >
            <FaTumblr />
          </div>
          <button
            className="btn"
            id="new-quote"
            onClick={() => handleClick('yellow')}
            style={{
              backgroundColor: toggleColor,
              transition: `800ms ease-in-out`,
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
