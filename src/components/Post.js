import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'

const Post = () => {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
          title, 
          slug, 
          mainImage{
            asset->{
              _id, 
              url
            }, 
            alt
          }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])

  return (
    <main className='bg-gray-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>Blog Posts</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my site</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                  <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-700' key={index}>
                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className='w-full h-full rounded-r object-cover absolute' />
                    <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                      <h3 className='text-gray-100 text-lg font-bold px-3 py-4 bg-red-700 bg-opacity-75 rounded hover:bg-opacity-50'>{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}

export default Post
