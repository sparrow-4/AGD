import React from 'react'
import photo from '../assets/man.png';

const Display = () => {
  return (
    <section className="bg-[#1b1b1b] py-3">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
       
        <div className="text-center mb-5">
          <img src={photo} alt="Man" />
        </div>

       
      </div>
    </section>
  )
}

export default Display;