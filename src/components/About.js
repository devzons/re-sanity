import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import bgAbout from '../assets/bg-about.jpg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const About = () => {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'author']{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])

  if (!author) return <div>Loadding...</div>

  return (
    <main className='relative'>
      <img src={bgAbout} alt='bg' className='absolute w-full' />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-gray-800 rounded-lg shadow-2xl lg:flex p-20'>
          <img src={urlFor(author.authorImage).url()} alt={author.name} className='rounded w-20 h-32 lg:w-48 lg:h-64 mr-8' />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-green-300 mb-4'>
              Hi there. I'm <span className='text-gray-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent blocks={author.bio} projectId='9ajf0e3w' dataset='production' />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About
