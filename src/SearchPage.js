import { Button } from '@mui/material'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
import room from './room.jpg'

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage_info">
            <p>
                62 stays . 26 august to 30
                august. 2 guest
            </p>
            <h1>Stays nearby</h1>
            <Button variant="outlined">
                Cancellation Flexibility
            </Button>
            <Button variant="outlined">
                Type of place
            </Button>
            <Button variant="outlined">
                Price
            </Button>
            <Button variant="outlined">
               Rooms and beds
            </Button>
            <Button variant="outlined">
                More Filters
            </Button>
        </div>
        
        <SearchResult
            img={room}
            location="Private room in LA"
            title="Edwardian House"
            description="1 guest . 1 bedroom . 
            1 bed . Wifi . Kitchen . Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"

         />
        
        <SearchResult
            img={room}
            location="Private room in LA"
            title="Edwardian House"
            description="1 guest . 1 bedroom . 
            1 bed . Wifi . Kitchen . Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"

         />

        <SearchResult
            img={room}
            location="Private room in LA"
            title="Edwardian House"
            description="1 guest . 1 bedroom . 
            1 bed . Wifi . Kitchen . Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"

         />

        <SearchResult
            img={room}
            location="Private room in LA"
            title="Edwardian House"
            description="1 guest . 1 bedroom . 
            1 bed . Wifi . Kitchen . Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"

         />

        <SearchResult
            img={room}
            location="Private room in LA"
            title="Edwardian House"
            description="1 guest . 1 bedroom . 
            1 bed . Wifi . Kitchen . Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"

         />

        <SearchResult
            img={room}
            location="Private room in LA"
            title="Edwardian House"
            description="1 guest . 1 bedroom . 
            1 bed . Wifi . Kitchen . Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"

         />

        <SearchResult
            img={room}
            location="Private room in LA"
            title="Edwardian House"
            description="1 guest . 1 bedroom . 
            1 bed . Wifi . Kitchen . Free parking"
            star={4.73}
            price="$30 / night"
            total="$117 total"

         />
    </div>
  )
}

export default SearchPage