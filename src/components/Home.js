import React from 'react'
import Image from '../assets/pg.jpg'

const Home = () => {
  return (
    <main>
      <img src={Image} alt='One road' className='absolute object-cover w-full h-full' />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-gray-100 font-bold cursive leading-none lg:leading-snug home-name'>Annyong, I'm Don.</h1>
      </section>
    </main>
  )
}

export default Home
