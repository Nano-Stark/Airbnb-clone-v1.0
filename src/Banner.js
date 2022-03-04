import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Banner.css'
import Search from './Search';

function Banner() {

    const [showSearch, setShowSearch] = useState(false);
    const  [showText, setShowText] = useState("Search Dates");
    const navigate = useNavigate();
    
  return (
    <div className='banner'>
        <div className='banner_search'>
            <Button
                onClick={() => setShowSearch(!showSearch)}
                className='banner_searchButton'
                variant='outlined'>
                {showSearch ? "Hide Date" : "Search Date" }</Button>
            {showSearch && <Search />}    
        </div>
        <div className='banner_info'>
            <h1>Get out and stretch 
                your imagination</h1>
            <h5>Plan a different kind of
                getaway to uncover the 
                hidden gems near you.
            </h5>
            <Button 
                variant='outlined'
                onClick={() => navigate("/search")}
                >
                Explore Nearby
            </Button>
        </div>
    </div>
  )
}

export default Banner