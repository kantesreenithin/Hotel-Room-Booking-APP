import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
function Landingpage() {
  return (
    <div className='row landing justify-content-center mx-0'>
        <div className="col-md-10 my-auto text-center" style={{borderRight:'5px solid white'}}>
            <h2 style={{color: 'white', fontSize:'80px'}}>Book a Room</h2>
            <h1 style={{color: 'white'}}>Make Your stays Wonderful. Get your desired room.</h1>
            <Link to='/homepage'>
                <button className='btn landingbtn'>Get Started</button>
            </Link>
        </div>
    </div>
  )
}

export default Landingpage