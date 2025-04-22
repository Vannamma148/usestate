import React, { useState } from 'react'

export default function ColorPicker() {
    const [color, setColor] = useState('black');
    const [colors, setColors] = useState('black');
    const gradientColors = {
        white: 'linear-gradient(to right, #ffffff, #e0e0e0)',
        black: 'linear-gradient(to right, #000000, #333333)',
        red: 'linear-gradient(to right, #ff0000, #ff6666)',
        orange: 'linear-gradient(to right, #ffa500, #ffcc99)',
        yellow: 'linear-gradient(to right, #ffff00, #ffff66)',
        green: 'linear-gradient(to right, #008000, #66b266)',
        blue: 'linear-gradient(to right, #0000ff, #6666ff)',
        indigo: 'linear-gradient(to right, #4b0082, #6a4c9c)',
        violet: 'linear-gradient(to right, #8a2be2, #dda0dd)',
        pink: 'linear-gradient(to right, #ff1493, #ff66b2)',
        gray: 'linear-gradient(to right, #808080, #b3b3b3)',
        brown: 'linear-gradient(to right, #a52a2a, #cd853f)',
        gold: 'linear-gradient(to right, #ffd700, #ffcc00)',
        silver: 'linear-gradient(to right, #c0c0c0, #d3d3d3)',
        cyan: 'linear-gradient(to right, #00ffff, #80e0e0)',
        magenta: 'linear-gradient(to right, #ff00ff, #ff66cc)',
    };

    return (
        <>
          {/* <h2>Color Picker</h2> */}

          <div className="container">
            <div className="row">
               
          <div className="colorpicker" style={{ background:gradientColors[colors] }}>
          <h3 className='text-center'>Select Linear Gradient Shades</h3>

                <select name="color" onChange={(e) => {
                    setColors(e.target.value)
                }}>
                    <option value="black">Black Shades</option>
                    <option value="white">White Shades</option>

                    <option value="red">Red Shades</option>
                    <option value="orange">Orange Shades</option>
                    <option value="yellow">Yellow Shades</option>
                    <option value="green">Green Shades</option>
                    <option value="blue">Blue Shades</option>
                    <option value="indigo">Indigo Shades</option>
                    <option value="violet">Violet Shades</option>
                    <option value="pink">Pink Shades</option>
                    <option value="gray">Gray Shades</option>
                    <option value="brown">Brown Shades</option>
                    <option value="gold">Gold Shades</option>
                    <option value="silver">Silver Shades</option>
                    <option value="cyan">Cyan Shades</option>
                    <option value="magenta">Magenta Shades</option>
                </select>
            <p>{gradientColors[colors]}</p>

              
            </div>
          </div>
          <div className="row">
               
          <div className="colorpicker" style={{ backgroundColor:color}}>
            <h3 className='text-center'>Select Color</h3>
                <select name="color" onChange={(e) => {
                    setColor(e.target.value)
                }}>
                    <option value="black">Black</option>
                    <option value="white">White</option>

                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                    <option value="pink">Pink</option>
                    <option value="gray">Gray</option>
                    <option value="brown">Brown</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="cyan">Cyan</option>
                    <option value="magenta">Magenta</option>
                </select>
                
            <p> background-color:{color}</p>
              
            </div>
          </div>
          </div>
        </>
    )
}
