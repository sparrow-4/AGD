import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import All from '../components/items/All'
import Download from '../components/Download'

const Seeall = () => {
  return (
    <div>
      <Header />
      <div className='w-full overflow-x-hidden max-w-400 mx-auto bg-[#1b1b1b]'>
        <All/>
      </div>
      <section>
        <Download />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Seeall