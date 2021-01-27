import React from 'react'
import './searchbox.styles.css'

export default function Searchbox({placeholder, handleChange}) {
    return (
        <div >
        <input
            className='search' 
            type="search" 
            placeholder={placeholder} 
            onChange= {handleChange}
        />
        </div>
    )
}
