import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'
import roomImg from './room.jpg'

function Home() {
  return (
    <div className='home'>
        <Banner />

        <div className='home_section'>
            <Card 
              src={roomImg}
              title="Unique stays"
              description='Spaces that are more than
                    just a place to sleep.'
            />
            <Card 
              src={roomImg}
              title="Unique stays"
              description='Spaces that are more than
                    just a place to sleep.'
            />
            <Card 
              src={roomImg}
              title="Unique stays"
              description='Spaces that are more than
                    just a place to sleep.'
            />
        </div>

        <div className='home_section'>
            <Card 
              src={roomImg}
              title="Unique stays"
              description='Spaces that are more than
                    just a place to sleep.'
            />
            <Card 
              src={roomImg}
              title="Unique stays"
              description='Spaces that are more than
                    just a place to sleep.'
            />
            <Card 
              src={roomImg}
              title="Unique stays"
              description='Spaces that are more than
                    just a place to sleep.'
            />
        </div>

    </div>
  )
}

export default Home