import React, { useEffect, useState } from 'react'
import './AllButton.css'
import axios from 'axios'

function AllButton() {

        const handleClick = () => {
        window.location.reload(false);
        }

  return (
    <p className='All-button' onClick={handleClick}>All
    </p>
  )
}

export default AllButton