import React from 'react'
import img1 from './images/pic.avif';
import img2 from './images/pic1.avif';
import img3 from './images/pic2.png';
import { Link } from 'react-router-dom'

function Demopage() {
  return (
    <div>
        <div class="row" style={{padding : '1%'}}>
  <div class="col-md-4">
    <img class="card-img-top " src={img1} alt="Card" style={{borderRadius:'6px'}}/><br/><br/>
    <div class="card-body">
      <h5 class="card-title">luxury Room</h5>
      <p class="card-text">The room may feature upgraded amenities such as a larger bed, higher quality linens and towels, more stylish decor, additional seating, a larger TV, a mini-fridge, and other luxury touches.</p>
      <button type="button" class="btn btn-primary">
      <Link to="/homepage" className="navbar-brand fs-4">
          <strong>Book Now</strong>
        </Link></button>
    </div>
  </div>
  <div class="col-md-4">
    <img class="card-img-top" src={img2} alt="Card" style={{borderRadius:'6px'}}/><br/><br/>
    <div class="card-body">
      <h5 class="card-title">Deluxe Room</h5>
      <p class="card-text">Standard rooms are generally more affordable than other room types, making them a popular choice for budget-conscious travelers or those who plan to spend little time in their hotel room.</p>
      <button type="button" class="btn btn-primary">
      <Link to="/homepage" className="navbar-brand fs-4">
          <strong>Book Now</strong>
        </Link></button>

    </div>
  </div>
  <div class="col-md  -4">
    <img class="card-img-top" src={img3} alt="Card"style={{borderRadius:'6px'}}/><br/><br/>
    <div class="card-body">
      <h5 class="card-title">Standard Room</h5>
      <p class="card-text">The room will usually come with basic amenities such as a small table or desk, a chair, and a closet or dresser for storage. Other features may include a small TV, lamp, and bathroom with a shower.
</p>
  <button type="button" class="btn btn-primary">
      <Link to="/homepage" className="navbar-brand fs-4">
          <strong>Book Now</strong>
        </Link></button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Demopage