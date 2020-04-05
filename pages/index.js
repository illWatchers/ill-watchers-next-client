import React, { useState } from 'react'

export default function index() {
  const [color, setColor] = useState('red')

  return (
    <>
      <div className="one" onClick={() => setColor(color === 'black' ? 'red' : 'black')}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ipsa at incidunt velit placeat cumque quo commodi beatae consequatur voluptas esse, aspernatur ex provident soluta illo voluptates veritatis! Quas, voluptates.
      </div>

      <style jsx>{`
        .one {
          color: ${color};
        }
      `}
      </style>
    </>
  )
}
